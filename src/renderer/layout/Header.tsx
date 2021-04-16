import { Dropdown, Menu, Modal, message } from 'antd'
import React, { useEffect } from 'react'
import SystemController from '@/renderer/components/SystemController'

console.log('process', process)

export const Header: React.FC = () => {
  return (
    <header>
      <div>智能会议系统</div>
      <div></div>
      <section className="system-controller">
        <SystemController os={process.platform} />
      </section>
    </header>
  )
}
