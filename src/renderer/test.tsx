import type * as React from 'react'
import { RecoilRoot } from 'recoil'
import TopBar from './components/top-bar'
// import Test from './components/test1'
import TodoList from './components/todoList'

function App() {
  return (
    <RecoilRoot>
      <div tw="h-screen w-screen flex flex-col pt-12">
        <TopBar />
        {/* <Test /> */}
        <TodoList />
      </div>
    </RecoilRoot>
  )
}

export default App
