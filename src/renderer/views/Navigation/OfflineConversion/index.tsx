import React from 'react'
import { useHistory } from 'react-router-dom'
import Layout, { Footer } from '@/renderer/layout/Navigation'

const Wrap: React.FC = () => {
  const history = useHistory()
  return (
    <>
      <Layout.Content>离线会议</Layout.Content>
      <Footer></Footer>
    </>
  )
}

export default Wrap
