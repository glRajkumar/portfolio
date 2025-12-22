import { HomeLayout } from 'fumadocs-ui/layouts/home';

import { baseOptions } from '@/components/common/layout.shared';

function Layout({ children }: LayoutProps<'/'>) {
  return (
    <HomeLayout
      {...baseOptions()}
    >
      {children}
    </HomeLayout>
  )
}

export default Layout
