import React, { useState } from 'react'
import { charCountState, textState } from '@/renderer/store'
import { useRecoilState, useRecoilValue } from 'recoil'

export default function Test() {
  const [text, setText] = useRecoilState(textState)
  const [data, setData] = useState(1)
  const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setText(event.target.value)
  }
  const count = useRecoilValue(charCountState)
  return (
    <>
      <div onClick={() => setData(data + 1)}>{data}</div>
      <div>
        <input type="text" value={text} onChange={onChange} />
        <br />
        Echo: {text}
        <br />
        Character Count: {count}
      </div>
    </>
  )
}
