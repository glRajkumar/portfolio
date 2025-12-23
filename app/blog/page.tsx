import Link from 'next/link';

import { blog } from '@/lib/source';

function Page() {
  const posts = blog.getPages()

  return (
    <main className="px-4 pb-12 pt-8">
      {posts
        .filter(post => !post.data.draft)
        .map((post) => (
          <Link
            key={post.url}
            href={post.url}
            className="flex flex-col mb-4 px-6 py-3 border transition-colors hover:bg-muted/50 rounded-md"
          >
            <p className="font-medium">{post.data.title}</p>
            <p className="text-sm text-fd-muted-foreground">
              {post.data.description}
            </p>

            {
              post.data.date &&
              <p className="pt-2 text-xs">
                {new Date(post.data.date).toDateString()}
              </p>
            }
          </Link>
        ))}
    </main>
  )
}

export default Page
