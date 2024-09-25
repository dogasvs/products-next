import Shopping from "@/svgs/shopping/page";
import Link from "next/link";

export default async function ProductDetail({ params }) {
  const { id } = params; 
  const res = await fetch(`https://dummyjson.com/products/${id}`);
  const product = await res.json();

  return (
    <div className="productDetailContainer">
    <Link href="/categories/allofthem">Back</Link>
    <div className="productContent">
      <div className="productImage">
        <img src={product.thumbnail} alt={product.title} />
      </div>
      <div className="productInfo">
        <h1>{product.title}</h1>
        <p>{product.description}</p>
        <strong>💲 {product.price}</strong>
      <div className="quantityControl">
        <input type="number" />
      <button className="addtoCard"> <Shopping /> Add to cart</button>
      </div>
      </div>
    </div>
  </div>
  );
}