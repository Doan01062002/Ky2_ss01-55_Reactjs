import React, { useEffect, useRef } from 'react'

export default function BT04() {

    const FocusInput = useRef<HTMLInputElement>(null)

    useEffect(()=>{
        FocusInput.current?.focus()
    })
  return (
    <div>BT04:
        <input ref={FocusInput} type="text" placeholder='Focus me...'/>
    </div>
  )
}
