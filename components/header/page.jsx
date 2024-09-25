import Shopping from "@/svgs/shopping/page";
import Link from "next/link";

export default function Header() {
  return (
    <div className="header">
      <h1>Products</h1>
      <div className="category">
        <Link href="/categories/allofthem">All of Them</Link>
        <Link href="/categories/beauty">Beauty</Link>
        <Link href="/categories/fragrances">Fragrances</Link>
        <Link href="/categories/furniture">Furniture</Link>
        <Link href="/categories/groceries">Groceries</Link>
      </div>
      <div className="headerShoppingDetail">
        <Shopping />
        <img src="/img/user.png" alt="user" />
      </div>
    </div>
  )
}