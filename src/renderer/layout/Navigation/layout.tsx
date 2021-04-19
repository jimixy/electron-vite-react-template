import React from 'react'
import Header from '../Header'
import { AsideProps } from './Aside'
import { ContentProps } from './Content'

export interface BaseLayoutProps {
  className?: string
  style?: React.CSSProperties
  footer?: React.ReactElement
}
class Layout extends React.Component<BaseLayoutProps> {
  static Aside: React.FC<AsideProps>
  static Content: React.FC<ContentProps>
  render() {
    const { footer } = this.props
    return (
      <section className="layout flex flex-col min-h-screen">
        <Header />
        {this.props.children}
        {footer || null}
      </section>
    )
  }
}

export default Layout
