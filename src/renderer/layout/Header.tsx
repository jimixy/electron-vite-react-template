import React from 'react'
import SystemController from '@/renderer/components/SystemController'

const Header: React.FC = () => {
  return (
    <header className="flex items-center justify-between h-80px leading-80">
      <div>智能会议系统</div>
      <div>jimi</div>
      <section className="system-controller">
        <SystemController os={process.platform} />
      </section>
    </header>
  )
}
export default Header
