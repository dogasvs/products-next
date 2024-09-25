"use client"
import { useState, useEffect } from "react";
import Link from "next/link";

export default async function ProductDetail({ params }) {
  // const { id } = params; 
  // const [product, setProduct] = useState(null);

  // useEffect(() => {
  //   const fetchProduct = async () => {
  //     const res = await fetch(`https://dummyjson.com/products/${id}`);
  //     const data = await res.json();
  //     setProduct(data);
  //   };

  //   fetchProduct();
  // }, [id]); 

  // const [quantity, setQuantity] = useState(0); 

  // const incrementQuantity = () => {
  //   setQuantity(prev => prev + 1); 
  // };

  // const decrementQuantity = () => {
  //   if (quantity > 1) {
  //     setQuantity(prev => prev - 1); 
  //   }
  // };

  return (
    <div className="productDetailContainer">
      <Link href="/categories/allofthem">Back</Link>
      {/* <div className="productContent">
        <div className="productImage">
          <img src={product.images} alt={product.title} />
        </div>
        <div className="productInfo">
          <h1>{product.title}</h1>
          <p>{product.description}</p>
          <strong>💲 {product.price}</strong>
          <div className="quantityControl">
            <button onClick={decrementQuantity}>-</button>
            <span>{quantity}</span>
            <button onClick={incrementQuantity}>+</button>
          </div>
          <button>Sepete Ekle</button>
        </div>
      </div> */}
    </div>
  );
}