// import { BaseContentProps } from './Content';
// import Nav from './Nav';
import React from 'react'
import { Header } from './Header'
import './index.css'

export interface BaseLayoutProps {
  className?: string
  style?: React.CSSProperties
}

export default class extends React.Component<BaseLayoutProps> {
  //   static Content: React.FC<BaseContentProps>;
  //   static Sider: React.FC<BaseSiderProps>

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
