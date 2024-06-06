import React, { useState } from 'react'

export default function BT01() {
  const [name, setName] = useState<string>("Nguyễn Minh Sơn")
  return (
    <div>Họ và tên: {name}</div>
  )
}
