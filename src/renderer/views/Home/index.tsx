import React from 'react'
import { useHistory } from 'react-router-dom'
import Layout from '@/renderer/layout'

const Home: React.FC = () => {
  const history = useHistory()
  return (
    <Layout>
      这是首页
      <br />
      <button onClick={() => history.push('/login')}>去登录页</button>
      <Layout.Footer>3423</Layout.Footer>
    </Layout>
  )
}

export default Home
