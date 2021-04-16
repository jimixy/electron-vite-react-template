import React from 'react'
import { useHistory } from 'react-router-dom'
import Layout from '@/renderer/layout'

const Wrap: React.FC = () => {
  const history = useHistory()
  return <Layout.Content>记录管理</Layout.Content>
}

export default Wrap
