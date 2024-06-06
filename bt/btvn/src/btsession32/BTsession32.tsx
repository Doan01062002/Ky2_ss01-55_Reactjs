import React, { useState, useEffect } from 'react';
import Header from './Header';
import Body from './Body';

type Product = {
  id: number;
  name: string;
  img: string;
  price: number;
  quantity: number;
};

type Cart  = {
  cartId: number;
  product: Product | undefined,
  amount: number
}

export default function BTsession32() {
  // gọi hàm cart
  const [carts,setCarts] = useState<Cart[]>(()=>{
    const cartLocal = localStorage.getItem("carts")

    const carts = cartLocal ? JSON.parse(cartLocal) : []

    return carts
  })

  // hàm gọi local
  const [listProduct, setListProduct] = useState<Product[]>(() => {
    const productLocal = localStorage.getItem('products');
    const products = productLocal ? JSON.parse(productLocal) : [];
    return products;
  });

  console.log("listProduct: ", listProduct);
  

  // lưu dữ liệu lên local
  const saveData = (key: string, value: any) => {
    localStorage.setItem(key, JSON.stringify(value));
    setCarts(value);
  };

  // gọi một mảng sản phẩm ra
  // useEffect(() => {
  //   const products: Product[] = [
  //     {
  //       id: 1,
  //       name: 'iPhone 13',
  //       img: 'https://cdn.hoanghamobile.com/i/preview/Uploads/2021/09/15/image-removebg-preview-12.png',
  //       price: 999,
  //       quantity: 50,
  //     },
  //     {
  //       id: 2,
  //       name: 'Samsung Galaxy S21',
  //       img: 'https://thanhdatmobile.vn/wp-content/uploads/2022/11/samsung-galaxy-s21-ultra-bac-600x600-1-200x200-1.jpg',
  //       price: 799,
  //       quantity: 30,
  //     },
  //     {
  //       id: 3,
  //       name: 'Google Pixel 6',
  //       img: 'https://cdn.tgdd.vn/Products/Images/42/233009/google-pixel-6-600x600.jpg',
  //       price: 699,
  //       quantity: 40,
  //     },
  //     {
  //       id: 4,
  //       name: 'OnePlus 9',
  //       img: 'https://cdn.hoanghamobile.com/i/preview/Uploads/2021/09/15/image-removebg-preview-12.png',
  //       price: 729,
  //       quantity: 25,
  //     },
  //     {
  //       id: 5,
  //       name: 'Xiaomi Mi 11',
  //       img: 'https://cdn.tgdd.vn/Products/Images/42/233009/google-pixel-6-600x600.jpg',
  //       price: 749,
  //       quantity: 35,
  //     },
  //     {
  //       id: 6,
  //       name: 'Sony Xperia 5 II',
  //       img: 'https://cdn.hoanghamobile.com/i/preview/Uploads/2021/09/15/image-removebg-preview-12.png',
  //       price: 949,
  //       quantity: 20,
  //     },
  //     {
  //       id: 7,
  //       name: 'Oppo Find X3 Pro',
  //       img: 'https://cdn.tgdd.vn/Products/Images/42/233009/google-pixel-6-600x600.jpg',
  //       price: 999,
  //       quantity: 15,
  //     },
  //     {
  //       id: 8,
  //       name: 'Huawei P40 Pro',
  //       img: 'https://cdn.tgdd.vn/Products/Images/42/233009/google-pixel-6-600x600.jpg',
  //       price: 899,
  //       quantity: 10,
  //     },
  //   ];

  //   saveData('products', products);
  // }, []); // Run only once on component mount

  // hàm thêm sản phẩm vào giỏ hàng
  const handleAddProduct = (id: number): void => {
    const productItem: Product | undefined = listProduct.find(product => product.id === id);

    
    // Tìm kiếm vị trí của sản phẩm trong giỏ hàng
    const findIndexProductOfCart = carts.findIndex((cart: Cart) => cart?.product?.id === productItem?.id)

    console.log("findIndexProductOfCart: ", findIndexProductOfCart);
    
    
    // Kiểm tra xem sản phẩm đã tồn tại trong giỏ hàng chưa
    if (findIndexProductOfCart !== -1) {
      // Tăng số lượng
    }else{
      const newCart: Cart = {
        cartId: Math.random() * 1000000,
        amount: 1,
        product: productItem
      }
      // Push vào trong mảng
      carts.push(newCart)

      saveData("carts", carts)
    }
  };

  return (
    <>
      <Header lengthCart = {carts.length}></Header>
      <div className="list-products">
        {listProduct.map((product: Product) => (
          <Body key={product.id} product={product} handleAddProduct={handleAddProduct} />
        ))}
      </div>
    </>
  );
}
