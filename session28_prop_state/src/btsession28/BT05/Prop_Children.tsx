import React from 'react'

interface Product {
    id: number;
    name: string;
    price: number;
    quantity: number;
  }
  
  export default function Prop_Children({ product }: { product: Product }) {
    return (
      <div>
        <h4>In Product</h4>
        <ul>
            <li>id: {product.id}</li>
            <li>Name: {product.name}</li>
            <li>Price: {product.price}</li>
            <li>Quantity: {product.quantity}</li>
        </ul>
      </div>
    )
  }