import React from 'react'

const { remote } = require('electron')

const Wrap: React.FC<{ focus: boolean; hover: boolean }> = (props) => {
  const _size = 24
  const [color, setColor] = React.useState('#dcdddd')
  const [isFullScreen, setIsFullScreen] = React.useState(
    remote.getCurrentWindow().isFullScreen()
  )

  const onFunc = () => {
    return !isFullScreen && remote.getCurrentWindow().minimize()
  }
  React.useEffect(() => {
    const resizeHandle = () => {
      setIsFullScreen(remote.getCurrentWindow().isFullScreen())
    }
    remote.getCurrentWindow().on('resize', resizeHandle)
    return () => {
      remote.getCurrentWindow().off('resize', resizeHandle)
    }
  }, [])
  React.useEffect(() => {
    setColor(props.focus && !isFullScreen ? '#ffbd2d' : '#dcdddd')
  }, [props.focus, isFullScreen])
  React.useEffect(() => {
    if (isFullScreen) {
      setColor('#dcdddd')
    } else {
      setColor(props.hover ? '#666' : '#ffbd2d')
    }
  }, [props.hover, isFullScreen])
  return (
    <span
      onClick={onFunc}
      className={`${
        props.focus && !isFullScreen ? 'focus' : 'unfocus'
      } toggle-size-darwin`}
    >
      <svg
        className="icon system-toggle-darwin"
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
          fill={color}
        ></path>
      </svg>
    </span>
  )
}

export default Wrap
