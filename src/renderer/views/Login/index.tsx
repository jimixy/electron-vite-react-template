import React from 'react'
import Test1 from '@/renderer/components/test1'
import { useHistory } from 'react-router-dom'
const fs = require('fs');
const electron = require('electron');
console.log(111, electron);

const Login: React.FC = () => {
  const history = useHistory()
  return (
    <div>
      登录页
      <br />
      <Test1 />
      <button className="btn" onClick={() => history.push('/home')}>
        去首页
      </button>
      <div className="flex flex-col items-center justify-center h-full pb-0 text-dark1 bg-gray-50 pt-10px rounded-10px border border-type1">
        <div className="color-100">1</div>
        <div>2</div>
        <div>3</div>
      </div>
      <div className="test">
        sfsf
        <p className="dd">sss</p>
      </div>
      <div className="btn2">test2</div>
    </div>
  )
}

export default Login
