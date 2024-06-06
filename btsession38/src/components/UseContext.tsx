import React, { createContext, useState } from 'react'
import A from './A'

export const SetUseContext = createContext("")
export default function UseContext() {
  const [name,setName] = useState<string>("minh thu")
  return (
    <div>UseContext
      
      <SetUseContext.Provider value='name'>
        <A></A>
      </SetUseContext.Provider>
      {/*
           
       */}
    </div>
  )
}
