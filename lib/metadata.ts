import { Page } from 'fumadocs-core/source';
import type { Metadata } from 'next/types';

import { basic } from './data';

export function createMetadata(override: Metadata): Metadata {
  return {
    ...override,
    openGraph: {
      title: override.title ?? undefined,
      description: override.description ?? undefined,
      url: basic.url,
      // images: '/banner.png',
      siteName: basic.appName,
      ...override.openGraph,
    },
    twitter: {
      card: 'summary_large_image',
      creator: basic.xId,
      title: override.title ?? undefined,
      description: override.description ?? undefined,
      // images: '/banner.png',
      ...override.twitter,
    },
    alternates: {
      types: {
        'application/rss+xml': [
          {
            title: 'Glrk Blog',
            url: `${basic.url}/blog/rss.xml`,
          },
        ],
      },
      ...override.alternates,
    },
  };
}

export function getPageImage(page: Page) {
  const segments = [...page.slugs, 'image.webp'];

  return {
    segments,
    url: `/og/${segments.join('/')}`,
  };
}

export const baseUrl =
  process.env.NODE_ENV === 'development' ||
    !process.env.VERCEL_PROJECT_PRODUCTION_URL
    ? new URL('http://localhost:3000')
    : new URL(`https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`);
