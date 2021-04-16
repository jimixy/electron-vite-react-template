import React from 'react'

export interface ContentProps {}

const Content: React.FC = ({ children }) => {
  return (
    <section className="flex items-center justify-between h-80px leading-80">
      主内容
      {children}
    </section>
  )
}
export default Content
