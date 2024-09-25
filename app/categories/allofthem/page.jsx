import Link from "next/link";

export default async function AllofThem() {
  const {products} = await fetch("https://dummyjson.com/products").then(res => res.json());
  return (
      <div className="productContainer">
        {products.map(x => (
          <div className="productItem" key={x.id}>
            <img src={x.thumbnail} alt="" />
            <span>⭐️{x.rating}</span> <br />
            <strong>{x.title}</strong>
            <p>${x.price}</p>
            <Link href={`/products/${x.id}`}>detail</Link>
          </div>
        ))}
      </div>
  )
}