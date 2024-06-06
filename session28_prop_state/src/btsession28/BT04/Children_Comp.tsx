import React from 'react'

interface Parent{
    nameParent:string
}
export default function Children_Comp(parent:Parent) {
    const nameChildren = "Nguyễn Văn Con"
    const {nameParent} = parent
  return (
    <div>
        <h4>In họ tên cha con</h4>
        <p>Họ và tên cha: {nameParent}</p>
        <p>Họ và tên con: {nameChildren}</p>
    </div>
  )
}
