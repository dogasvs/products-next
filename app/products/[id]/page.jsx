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
        <img src={product.images} alt={product.title} />
      </div>
      <div className="productInfo">
        <h1>{product.title}</h1>
        <p>{product.description}</p>
        <p>Price: ${product.price}</p>
        <p>Rating: ⭐️{product.rating}</p>
      </div>
    </div>
  </div>
  );
}