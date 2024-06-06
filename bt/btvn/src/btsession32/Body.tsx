import React from 'react'

type ProductItem = {
  id:number
  name: string
  img:string
  price:number
  quantity:number
}

type Products = {
  handleAddProduct: (id:number) =>void
  product:ProductItem
}

export default function Body({handleAddProduct, product}:Products) {
  return (
    <div className='product'>
      <img id='img-product' src={product.img} alt="" />
      <h4>{product.name}</h4>
      <p>{product.price}đ</p>
      <button onClick={()=> handleAddProduct(product.id)} className='addProduct'> <span className="material-symbols-outlined">shopping_cart</span> Thêm vào giỏ hàng</button>
    </div>
  )
}


