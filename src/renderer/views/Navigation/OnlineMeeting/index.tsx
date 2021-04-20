import React from 'react'
import { useHistory } from 'react-router-dom'
import Layout from '@/renderer/layout/Navigation'

const Wrap: React.FC = () => {
  const history = useHistory()
  return <Layout.Content>在线转写</Layout.Content>
}

export default Wrap
