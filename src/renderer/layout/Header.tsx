import React from 'react'
import SystemController from '@/renderer/components/SystemController'
import pkj from '@/root/package.json'

const Header: React.FC = () => {
  return (
    <header className="drag flex items-center justify-between h-80px">
      <div>{pkj.build.productName}</div>
      <div>jimi</div>
      <section className="system-controller">
        <SystemController os={process.platform} />
      </section>
    </header>
  )
}
export default Header
