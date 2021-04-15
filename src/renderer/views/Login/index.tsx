import React from 'react'
import { useHistory } from 'react-router-dom'

const Login: React.FC = () => {
  const history = useHistory()
  return (
    <div>
      登录页
      <br />
      <button className="bg-blue-500 p-8" onClick={() => history.push('/home')}>
        去首页
      </button>
      <div className="flex flex-col items-center justify-center h-full pb-0">
        <div>1</div>
        <div>2</div>
        <div>3</div>
      </div>
      <div className="text-right mb-10">sfsf</div>
    </div>
  )
}

// const styles = {
//   heading1: css`
//     @tailwind text-right mb-10;
//     line-height: 1.15;
//     text-align: center;
//   `,
//   test: css`
//     @tailwind flex justify-center mr-10;
//   `
// }

export default Login
