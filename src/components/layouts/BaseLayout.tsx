import { ReactNode } from 'react'

const BaseLayout = ({ children }: { children: ReactNode }) => {
  return <main className="my-10 flex flex-col items-center">{children}</main>
}

export default BaseLayout
