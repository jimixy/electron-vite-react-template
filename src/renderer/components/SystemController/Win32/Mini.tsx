import React from 'react'

const { remote } = require('electron')

const Wrap: React.FC = () => {
  const _size = 16
  const _color = '#00D4E9'
  const onFunc = () => {
    remote.getCurrentWindow().minimize()
  }
  return (
    <span onClick={onFunc} className="toggle-size">
      <svg
        className="icon"
        viewBox="0 0 1024 1024"
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
        p-id="6887"
        width={_size}
        height={_size}
      >
        <path
          d="M128 512h768a25.6 25.6 0 1 1 0 51.2h-768a25.6 25.6 0 1 1 0-51.2z"
          p-id="6888"
          fill={_color}
        ></path>
      </svg>
    </span>
  )
}

export default Wrap
