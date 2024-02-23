import Link from "next/link";
import "../pages/_app";

export default function Home() {
  return (
    <div>
      <h1>Welcome</h1>
      <Link href="/about">Go to About</Link>
      <Link href="/posts">Go to Posts page</Link>
    </div>
  );
}
