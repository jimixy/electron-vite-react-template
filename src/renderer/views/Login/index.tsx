import React from 'react'
import { useHistory } from 'react-router-dom'
import Layout from '@/renderer/layout'

const fs = require('fs')
const electron = require('electron')

console.log(111, fs, electron)

const Login: React.FC = () => {
  const history = useHistory()
  const test = () => {
    history.push('/home')
  }
  return (
    <Layout>
      登录页
      <br />
      <button onClick={() => test()}>去首页</button>
    </Layout>
  )
}

export default Login
