import React from 'react'
import { useHistory } from 'react-router-dom'
import Layout, { Footer } from '@/renderer/layout'

const fs = require('fs')
const electron = require('electron')

console.log(111, electron)

const Login: React.FC = () => {
  const history = useHistory()
  return (
    <Layout footer={<Footer />}>
      登录页
      <br />
      <button onClick={() => history.push('/home')}>去首页</button>
    </Layout>
  )
}

export default Login
