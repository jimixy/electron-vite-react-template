import React from 'react'
import { useHistory } from 'react-router-dom'

const Home: React.FC = () => {
  const history = useHistory()
  return (
    <div>
      这是首页
      <br />
      <button onClick={() => history.push('/login')}>去登录页</button>
    </div>
  )
}

export default Home
