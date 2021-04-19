import React, { Suspense, lazy } from 'react'

import { Redirect, Route, Switch } from 'react-router-dom'
import { Spin } from 'antd'

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
    <Route
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
    ></Route>
    <Route
      path="/navigation"
      component={lazy(() => import('@/renderer/views/Navigation'))}
    ></Route>
  </PackingWithAuth>
)

/**
 * @public
 *
 * @Todo二级级路由
 */
export const SwitchViewNavigation = () => (
  <PackingWithAuth>
    <Route
      path="/navigation/"
      exact
      component={() => <Redirect to="/navigation/OnlineMeeting" />}
    ></Route>
    <Route
      path="/navigation/OnlineMeeting"
      component={lazy(
        () => import('@/renderer/views/Navigation/OnlineMeeting')
      )}
    ></Route>
    <Route
      path="/navigation/OfflineConversion"
      component={lazy(
        () => import('@/renderer/views/Navigation/OfflineConversion')
      )}
    ></Route>
    <Route
      path="/navigation/RecordManage"
      component={lazy(() => import('@/renderer/views/Navigation/RecordManage'))}
    ></Route>
  </PackingWithAuth>
)
