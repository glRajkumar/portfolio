import { HomeLayout } from 'fumadocs-ui/layouts/home';

import { baseOptions } from '@/components/common/layout.shared';

function Layout({ children }: LayoutProps<'/'>) {
  return (
    <HomeLayout
      {...baseOptions()}
      className='[--fd-layout-width:none] [&_nav]:px-4 [&_nav]:sm:px-6 bg-background'
    >
      {children}
    </HomeLayout>
  )
}

export default Layout
