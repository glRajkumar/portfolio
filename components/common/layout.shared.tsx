import type { BaseLayoutProps } from 'fumadocs-ui/layouts/shared';
import Image from 'next/image';

import { basic } from '@/lib/data';

import ThemeToggler from '../theme/toggler';

export function baseOptions(): BaseLayoutProps {
  return {
    themeSwitch: {
      component: <ThemeToggler />
    },
    nav: {
      title: (
        <>
          <Image
            alt={basic.name}
            src="/imgs/profile.webp"
            width={32}
            height={32}
            className="size-8 rounded-full border"
            aria-label={basic.name}
          />

          <span className="font-medium in-[.uwu]:hidden">
            {basic.name}
          </span>
        </>
      ),
    },
  }
}
