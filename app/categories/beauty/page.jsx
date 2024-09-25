import Link from "next/link";

export default async function Beauty() {
  const res = await fetch("https://dummyjson.com/products/category/beauty");
  const { products } = await res.json(); // Sadece beauty kategorisindeki ürünler

  console.log(products); // Beauty kategorisindeki ürünleri konsola yazdır

  return (
    <div className="productContainer">
      {products.map((x) => (
        <div className="productItem" key={x.id}>
          <img src={x.thumbnail} alt={x.title} />
          <span>⭐️{x.rating}</span> <br />
          <strong>{x.title}</strong>
          <p>${x.price}</p>
          <Link href={`/products/${x.id}`}>Detail</Link>
        </div>
      ))}
    </div>
  );
}
