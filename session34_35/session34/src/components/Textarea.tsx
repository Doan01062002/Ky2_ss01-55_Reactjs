import React, { useState } from 'react'

export default function Textarea() {
    const [text, setText] = useState<string>("")

    const handleChange = (e:React.ChangeEvent<HTMLTextAreaElement>)=>{
        setText(e.target.value)
    }

    console.log(text);
    
  return (
    <div>Textarea
        <textarea value={text} name="" id="" onChange={handleChange}></textarea>
    </div>
  )
}
