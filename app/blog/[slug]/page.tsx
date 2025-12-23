import type { Metadata } from 'next';
import { InlineTOC } from 'fumadocs-ui/components/inline-toc';
import { ArrowLeft } from 'lucide-react';
import { notFound } from 'next/navigation';
import Link from 'next/link';

import { getMDXComponents } from '@/mdx-components';
import { createMetadata } from '@/lib/metadata';
import { blog } from '@/lib/source';

export async function generateMetadata(props: PageProps<'/blog/[slug]'>): Promise<Metadata> {
  const params = await props.params
  const page = blog.getPage([params.slug])

  if (!page) notFound()

  return createMetadata({
    title: page.data.title,
    description: page.data.description ?? '',
  })
}

export function generateStaticParams(): { slug: string }[] {
  return blog.getPages().map((page) => ({
    slug: page.slugs[0],
  }))
}

async function Page(props: PageProps<'/blog/[slug]'>) {
  const params = await props.params
  const page = blog.getPage([params.slug])

  if (!page) notFound()

  const { body: Mdx, toc } = await page.data.load()

  return (
    <article className="flex flex-col mx-auto w-full max-w-4xl px-4 py-8">
      <div>
        <Link href="/blog" className='inline-flex items-center gap-1 px-2 py-1 text-xs bg-background rounded border hover:bg-muted'>
          <ArrowLeft className='size-3' /> Back
        </Link>

        <h1 className="mt-4 mb-2 text-3xl font-semibold">{page.data.title}</h1>
        <p className="text-fd-muted-foreground mb-8">{page.data.description}</p>
      </div>

      <div className="prose min-w-0 flex-1">
        <InlineTOC items={toc} />
        <Mdx components={getMDXComponents()} />
      </div>
    </article>
  )
}

export default Page
