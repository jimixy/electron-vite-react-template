import React from 'react'

export interface ContentProps {}

const Content: React.FC = ({ children }) => {
  return (
    <main className="layout-main flex flex-1 flex-col">
      <section className="flex items-center justify-between h-80px leading-80">
        主内容
        {children}
      </section>
    </main>
  )
}
export default Content
