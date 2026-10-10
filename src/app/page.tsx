import Link from "next/link";

export default function Home() {
  return (
    <div>
      <h1>Home</h1>
      <p>Selamat datang di halaman utama.</p>
      <nav>
        <ul>
          <li><Link href="/profile">Profile</Link></li>
          <li><Link href="/about">About</Link></li>
        </ul>
      </nav>
    </div>
  );
}