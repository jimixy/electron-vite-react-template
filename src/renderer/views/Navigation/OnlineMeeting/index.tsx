import React from 'react'
import { useHistory } from 'react-router-dom'
import Layout from '@/renderer/layout'

const Wrap: React.FC = () => {
  const history = useHistory()
  return <Layout.Content>离线转写</Layout.Content>
}

export default Wrap
