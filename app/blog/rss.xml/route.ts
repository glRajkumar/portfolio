import { NextResponse } from 'next/server';
import { Feed } from 'feed';

import { basic } from '@/lib/data';
import { blog } from '@/lib/source';

export const revalidate = false

export function GET() {
  const feed = new Feed({
    title: 'Glrk Blog',
    id: `${basic.url}/blog`,
    link: `${basic.url}/blog`,
    language: 'en',

    favicon: `${basic.url}/favicon.ico`,
    copyright: `All rights reserved ${new Date().getFullYear()}, ${basic.name}`,
  })

  for (const page of blog.getPages().sort((a, b) => new Date(b.data.date).getTime() - new Date(a.data.date).getTime())) {
    feed.addItem({
      id: page.url,
      title: page.data.title,
      description: page.data.description,
      link: `${basic.url}${page.url}`,
      date: new Date(page.data.date),

      author: [{
        name: basic.name,
      }],
    })
  }

  return new NextResponse(feed.rss2())
}
