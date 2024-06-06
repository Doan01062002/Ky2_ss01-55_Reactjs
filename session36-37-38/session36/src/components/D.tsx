import React, { useContext } from 'react'
import { SetUseContext } from './UseContext'


export default function D() {

    const getName = useContext(SetUseContext)
  return (
    <div>D
        <p>Name:{getName}</p>
    </div>
  )
}

