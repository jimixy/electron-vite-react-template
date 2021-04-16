// import { BaseContentProps } from './Content';
// import Nav from './Nav';
import React from 'react'
import { Header } from './Header'

export interface BaseLayoutProps {
  className?: string
  style?: React.CSSProperties
}

export default class extends React.Component<BaseLayoutProps> {
  //   static Content: React.FC<BaseContentProps>;
  //   static Sider: React.FC<BaseSiderProps>

  render() {
    return (
      <section className="">
        <Header />
        <main className="">
          <div className="">
            {React.Children.toArray(this.props.children).map((child) => child)}
          </div>
        </main>
      </section>
    )
  }
}
