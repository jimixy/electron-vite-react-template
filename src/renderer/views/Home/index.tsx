import React from 'react'
import { useHistory } from 'react-router-dom'
import Layout from '@/renderer/layout'
import nav_icon2 from '@/renderer/assets/img/icons/nav_icon2.png'
import nav_icon3 from '@/renderer/assets/img/icons/nav_icon3.png'
import nav_icon4 from '@/renderer/assets/img/icons/nav_icon4.png'

export interface MenuNavTypes {
  icon: string
  key: string
  title: string
  href: string
}

const menuList: MenuNavTypes[] = [
  {
    icon: nav_icon2,
    key: 'OnlineMeeting',
    title: '在线会议',
    href: '/navigation/OnlineMeeting'
  },
  {
    icon: nav_icon3,
    key: 'OfflineConversion',
    title: '离线转写',
    href: '/navigation/OfflineConversion'
  },
  {
    icon: nav_icon4,
    key: 'RecordManage',
    title: '记录管理',
    href: '/navigation/RecordManage'
  }
]

const Home: React.FC = () => {
  const { push } = useHistory()
  return (
    <Layout>
      <div className="nav-wrap">
        <div className="nav-list">
          <div className="nav-logo"></div>
          <ul className="no-drag nav flex">
            {menuList.map((item) => (
              <li key={item.key} onClick={() => push(item.href)}>
                <span className="text-20px color-black">
                  <img src={item.icon} alt={item.title} />
                  <span className="ml-12px">{item.title}</span>
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </Layout>
  )
}

export default Home
