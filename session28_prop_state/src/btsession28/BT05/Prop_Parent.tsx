import React from 'react'
import Prop_Children from './Prop_Children'

export default function Prop_Parent() {
    const product = { id: 1, name: "Nguyễn Minh Sơn", price: 1000, quantity: 10 };
    return (
      <div>
        <Prop_Children product={product} />
      </div>
    )
  }
