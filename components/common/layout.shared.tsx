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
            className="size-10 rounded-full object-cover border shrink-0"
            src="/imgs/profile.webp"
            alt={`${basic.name} picture`}
            width={40}
            height={40}
            aria-label={basic.name}
          />

          <span className="font-normal in-[.uwu]:hidden">{basic.name}</span>
        </>
      ),
    },
  }
}
