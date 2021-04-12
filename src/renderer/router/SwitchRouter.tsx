import React, { Suspense, lazy } from 'react'

import { Redirect, Route, Switch } from 'react-router-dom'
import { Spin } from 'antd'
import Login from '@/renderer/views/Login'
import Home from '@/renderer/views/Home'

const RouterWrapNotFound = () => {
  return <div>Not Fount</div>
}

/**
 * @private
 *
 * @全局路由包装组件
 */
const PackingWithAuth: React.FC = ({ children }) => {
  return (
    <Suspense fallback={<Spin />}>
      <Switch>
        {children}
        <Route path="*" component={RouterWrapNotFound}></Route>
      </Switch>
    </Suspense>
  )
}

/**
 * @public
 *
 * @全局一级路由
 */
export const SwitchViewRoot = () => (
  <PackingWithAuth>
    <Route path="/" exact component={Login}></Route>
    <Route path="/login" component={Login}></Route>
    <Route path="/home" component={Home}></Route>
    {/* <Route
      path="/"
      exact
      component={lazy(() => import('@/renderer/views/Login'))}
    ></Route>
    <Route
      path="/login"
      component={lazy(() => import('@/renderer/views/Login'))}
    ></Route>
    <Route
      path="/home"
      component={lazy(() => import('@/renderer/views/Home'))}
    ></Route> */}
  </PackingWithAuth>
)
