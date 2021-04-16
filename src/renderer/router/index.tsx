import React from 'react'
import { ConfigProvider, message } from 'antd'

import { Router } from 'react-router-dom'
import { RecoilRoot } from 'recoil'

import zh_CN from 'antd/lib/locale-provider/zh_CN'
import { createHashHistory } from 'history'
import { SwitchViewRoot } from './SwitchRouter'

message.config({ top: '50%' as any, duration: 2 })

const history = createHashHistory()

const Main = () => {
  return (
    <RecoilRoot>
      <ConfigProvider locale={zh_CN}>
        <Router history={history}>
          <SwitchViewRoot />
        </Router>
      </ConfigProvider>
    </RecoilRoot>
  )
}

export default Main
