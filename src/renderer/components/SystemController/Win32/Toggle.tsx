import React from 'react'

const { remote } = require('electron')

/** 满屏 ===> 非满屏 */
const WrapFullToNormal: React.FC = () => {
  const size = 24
  const color = '#00D4E9'
  return (
    <svg
      className="icon"
      viewBox="0 0 1024 1024"
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      p-id="16676"
      width={size}
      height={size}
    >
      <path
        d="M255.13 382.7h425.11v382.65h-425.1l-0.01-382.65z m42.64 340.17l340.09-0.09V425.34H297.77v297.53z m382.46-85.1h42.64V340.32H382.7v42.38h-42.38v-85.02h425l0.04 382.47h-85.21l0.08-42.38z"
        p-id="16677"
        fill={color}
      ></path>
    </svg>
  )
}

/** 非满屏 ===> 满屏 口 图标 */
const WrapNormalToFull: React.FC = (): React.ReactElement => {
  const size = 15
  const color = '#00D4E9'
  return (
    <svg
      className="icon"
      viewBox="0 0 1024 1024"
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      p-id="7442"
      width={size}
      height={size}
    >
      <path
        d="M832 832H192V192h640v640z m50-690H142v740h740V142z"
        p-id="7443"
        fill={color}
      ></path>
    </svg>
  )
}

const Wrap: React.FC = () => {
  const [isMaximized, setMaximized] = React.useState(
    remote.getCurrentWindow().isMaximized()
  )
  React.useEffect(() => {
    const resizeHandle = () => {
      setMaximized(remote.getCurrentWindow().isMaximized())
    }
    remote.getCurrentWindow().on('resize', resizeHandle)
    return () => {
      remote.getCurrentWindow().off('resize', resizeHandle)
    }
  }, [])
  const onFunc = () => {
    return isMaximized
      ? remote.getCurrentWindow().restore()
      : remote.getCurrentWindow().maximize()
  }
  return (
    <span onClick={onFunc} className="toggle-size">
      {isMaximized ? <WrapFullToNormal /> : <WrapNormalToFull />}
    </span>
  )
}

export default Wrap
