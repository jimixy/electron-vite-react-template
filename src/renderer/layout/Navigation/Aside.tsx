import React from 'react'

export interface AsideProps {}

const Aside: React.FC = ({ children }) => {
  return (
    <aside className="flex items-center justify-between h-80px leading-80">
      左侧布局
      {children}
    </aside>
  )
}
export default Aside
