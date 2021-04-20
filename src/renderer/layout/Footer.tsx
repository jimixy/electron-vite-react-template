import React from 'react'
import Logo from '@/renderer/assets/img/icon.png'
import pkj from '@/root/package.json'

export interface FooterProps {}

export const Footer: React.FC = ({ children }) => {
  return (
    <footer className="flex items-center justify-between h-80px mx-10px">
      <div>
        <div>终端编号: xxxxx</div>
        <div>系统版本: V{pkj.version}</div>
      </div>
      <img className="w-80px" src={Logo} alt="" />
      <div className="flex">
        <img className="w-20px mr-10px" src={Logo} alt="" />
        <div>
          <div>有问题，请致电</div>
          <div>400-000-0000</div>
        </div>
      </div>
    </footer>
  )
}
