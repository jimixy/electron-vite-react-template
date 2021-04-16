import React from 'react'
import { useHistory } from 'react-router-dom'

const Login: React.FC = () => {
  const history = useHistory()
  return (
    <div>
      登录页
      <br />
      <button className="btn" onClick={() => history.push('/home')}>
        去首页
      </button>
      <div className="flex flex-col items-center justify-center h-full pb-0">
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
