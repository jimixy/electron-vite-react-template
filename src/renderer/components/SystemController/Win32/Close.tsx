import * as path from 'path'
import { Modal } from 'antd'
import React from 'react'
import { remote } from 'electron'

// export const entryPath = path.join(process.cwd(), 'package.json')

// console.log('entryPath', entryPath)

const Wrap: React.FC = () => {
  const _size = 16
  const _color = '#00D4E9'
  const [color, setColor] = React.useState<string>(_color)
  const onFunc = () => {
    Modal.confirm({
      title: '提示',
      centered: true,
      content: <p className="ui-ta-c">您确认退出{'智能会议系统'}系统？</p>,
      onOk: remote.getCurrentWindow().close
    })
  }
  const onMouseEnter = () => {
    setColor('#fff')
  }
  const onMouseLeave = () => {
    setColor(_color)
  }
  return (
    <span
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      onClick={onFunc}
      className="system-close-win32"
    >
      <svg
        className="icon"
        viewBox="0 0 1024 1024"
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
        p-id="5512"
        width={_size}
        height={_size}
      >
        <path
          d="M822.003 776.822l0.023-0.022-575.522-575.483c-5.788-5.792-13.786-9.374-22.621-9.374-17.662 0-31.98 14.318-31.98 31.98 0 8.834 3.582 16.832 9.373 22.62L776.112 821.34c5.84 6.278 14.167 10.21 23.417 10.21 17.662 0 31.98-14.318 31.98-31.98 0-8.901-3.638-16.949-9.506-22.747z"
          p-id="5513"
          fill={color}
        ></path>
        <path
          d="M776.784 201.448l-0.023-0.022-575.483 575.521c-5.792 5.788-9.374 13.786-9.374 22.621 0 17.663 14.318 31.98 31.98 31.98 8.834 0 16.832-3.582 22.62-9.373L821.301 247.34c6.278-5.839 10.21-14.166 10.21-23.416 0-17.662-14.318-31.98-31.98-31.98-8.902 0-16.95 3.637-22.747 9.505z"
          p-id="5514"
          fill={color}
        ></path>
      </svg>
    </span>
  )
}

export default Wrap
