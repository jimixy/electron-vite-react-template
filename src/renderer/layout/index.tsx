import React from 'react'
import Header from './Header'
import { Footer } from './Footer'

export interface BaseLayoutProps {
  className?: string
  style?: React.CSSProperties
  footer?: React.ReactElement
}
class Layout extends React.Component<BaseLayoutProps> {
  render() {
    return (
      <section className="layout flex flex-col min-h-screen">
        <Header />
        <main className="layout-main flex flex-1 flex-col">
          {React.Children.toArray(this.props.children).map((child) => child)}
        </main>
        <Footer />
      </section>
    )
  }
}

export default Layout
