import React from 'react'
import Header from './Header'
import Footer, { FooterProps } from './Footer'
import Aside, { AsideProps } from './Aside'
import Content, { ContentProps } from './Content'

export interface BaseLayoutProps {
  className?: string
  style?: React.CSSProperties
}
class Layout extends React.Component<BaseLayoutProps> {
  static Footer: React.FC<FooterProps>
  static Aside: React.FC<AsideProps>
  static Content: React.FC<ContentProps>
  render() {
    return (
      <div className="layout flex flex-col min-h-screen">
        <Header />
        <main className="main">
          {React.Children.toArray(this.props.children).map((child) => child)}
        </main>
      </div>
    )
  }
}

Layout.Footer = Footer
Layout.Aside = Aside
Layout.Content = Content

export default Layout
