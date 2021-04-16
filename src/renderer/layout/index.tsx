import React from 'react'
import Header from './Header'
import Aside, { AsideProps } from './Aside'
import Content, { ContentProps } from './Content'

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
      <div className="layout flex flex-col min-h-screen">
        <Header />
        <main className="main flex flex-1 flex-col">
          {React.Children.toArray(this.props.children).map((child) => child)}
        </main>
        {footer || null}
      </div>
    )
  }
}

Layout.Aside = Aside
Layout.Content = Content

export default Layout
export { Footer } from './Footer'
