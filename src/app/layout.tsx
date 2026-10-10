import Link from "next/link";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <nav style={{ display: "flex", gap: "12px", padding: "12px", borderBottom: "1px solid #ccc" }}>
          <Link href="/">Home</Link>
          <Link href="/about">About</Link>
          <Link href="/profile">Profile</Link>
          <Link href="/blogs">Blogs</Link>
          <Link href="/blogs/first">Blog First</Link>
          <Link href="/blogs/second">Blog Second</Link>
          <Link href="/products">Products</Link>
          <Link href="/products/1">Product 1</Link>
          <Link href="/products/1/reviews/1">Review Produk 1</Link>
        </nav>
        {children}
      </body>
    </html>
  );
}