import React from 'react'
import Mac from './Darwin'
import Win from './Win32'
import './index.css'

const Wrap: React.FC<{ os?: NodeJS.Platform }> = (props) => {
  const os = props.os || 'darwin'
  console.log(222, os)
  return (
    <div className="no-drag systemController">
      {os === 'darwin' ? <Mac /> : <Win />}
      <Win />
    </div>
  )
}

export default Wrap
