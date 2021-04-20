import React from 'react'
import { useHistory } from 'react-router'
import './index.css'
import Layout from '@/renderer/layout'

export default () => {
  const history = useHistory()
  return (
    <Layout>
      <section className="four-zero-four" onClick={() => history.replace('/')}>
        <p className="four">
          <span></span>
          <span></span>
          <span></span>
        </p>
        <p className="zero">
          <span></span>
          <span></span>
          <span></span>
          <span></span>
        </p>
        <p className="four">
          <span></span>
          <span></span>
          <span></span>
        </p>
      </section>
    </Layout>
  )
}
