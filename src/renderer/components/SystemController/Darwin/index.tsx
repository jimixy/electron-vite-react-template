/**
 * @Author yejiang1015
 * @Date 2020-06-19 22:38:32
 * @Last Modified by: yejiang1015
 * @Last Modified time: 2020-08-25 14:12:28
 * @Message Mac 系统
 */

import React from 'react'
import { remote } from 'electron'
import Close from './Close'
import Mini from './Mini'
import Toggle from './Toggle'

const Wrap: React.FC = () => {
  const [focus, setFocus] = React.useState(
    remote.getCurrentWindow().isFocused()
  )
  const [hover, setHover] = React.useState(false)
  React.useEffect(() => {
    const focusHandle = () => {
      setFocus(true)
    }
    const blurHandle = () => {
      setFocus(false)
    }
    remote.getCurrentWindow().on('focus', focusHandle)
    remote.getCurrentWindow().on('blur', blurHandle)
    return () => {
      remote.getCurrentWindow().off('focus', focusHandle)
      remote.getCurrentWindow().off('blur', blurHandle)
    }
  }, [])
  const onMouseEnter = () => {
    /** 失去焦点hover */
    if (!remote.getCurrentWindow().isFocused()) {
      setFocus(true)
      setHover(true)
    } else {
      setHover(true)
    }
  }
  const onMouseLeave = () => {
    if (!remote.getCurrentWindow().isFocused()) {
      setFocus(false)
      setHover(false)
    } else {
      setHover(false)
    }
  }
  return (
    <>
      <div
        className="ctl-box"
        onMouseEnter={onMouseEnter}
        onMouseLeave={onMouseLeave}
      >
        <Close focus={focus} hover={hover} />
        <Mini focus={focus} hover={hover} />
        <Toggle focus={focus} hover={hover} />
      </div>
    </>
  )
}

export default Wrap
