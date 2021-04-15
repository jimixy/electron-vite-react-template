import React from 'react'
import { RecoilRoot } from 'recoil'
// import TopBar from './components/top-bar'
// import Test from './components/test1'
// import TodoList from './components/todoList'
const path = require('path')
const electron = require('electron')

console.log(11, path, electron)
console.log(33)
function App() {
  return (
    <RecoilRoot>
      <div tw="w-screen flex flex-col pt-12 h-full">哈哈哈</div>
    </RecoilRoot>
  )
}

export default App
