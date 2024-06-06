import React from 'react'

type Cart = {
  lengthCart: number
}

export default function Header({lengthCart}: Cart) {
  return (
    <>
        <div className='header'>
            <div className='tools'>
                <span>Trang chủ</span>
                <span>Danh sách sản phẩm</span>
            </div>
            <div>
                <span className="material-symbols-outlined">shopping_cart</span>
                <button className='count-cart'>{lengthCart}</button>
            </div>
            
        </div>
    </>
  )
}
