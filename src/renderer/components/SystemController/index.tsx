import React from 'react'
import Mac from './Darwin'
import Win from './Win32'

const Wrap: React.FC<{ os?: NodeJS.Platform }> = (props) => {
  const os = props.os || 'darwin'
  return (
    <div className="no-drag systemController">
      {os === 'darwin' ? <Mac /> : <Win />}
    </div>
  )
}

export default Wrap
