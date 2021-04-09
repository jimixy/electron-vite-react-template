import type * as React from 'react'
import { motion } from 'framer-motion'
import { RecoilRoot } from 'recoil'
import TopBar from './components/top-bar'
import logo from './logo.png'
// import Test from './components/test1'
import TodoList from './components/todoList'

const containerMotion = {
  initial: 'hidden',
  animate: 'visible',
  variants: {
    hidden: { opacity: 1, scale: 0 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2
      }
    }
  }
}

function App() {
  return (
    <RecoilRoot>
      <div tw="h-screen w-screen flex flex-col pt-12">
        <TopBar />
        {/* <Test /> */}
        <TodoList />
        <motion.div tw="h-full" {...containerMotion}>
          <div tw="flex flex-col items-center justify-center h-full pb-0">
            <img tw="h-48 ml-5" src={logo} draggable="false" />
          </div>
        </motion.div>
      </div>
    </RecoilRoot>
  )
}

export default App
