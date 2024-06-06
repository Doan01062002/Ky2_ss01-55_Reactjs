import React from 'react'
import Children_Comp from './Children_Comp'

export default function Parent_Comp() {
    const nameParent:string = "Nguyễn Văn Bố"
  return (
    <div>
        <Children_Comp nameParent = {nameParent}></Children_Comp>
    </div>
  )
}
