import React from 'react'
import { useHistory } from 'react-router-dom'

const Login: React.FC = () => {
  const history = useHistory()
  return (
    <div>
      登录页
      <br />
      <button onClick={() => history.push('/home')}>去首页</button>
    </div>
  )
}

export default Login
