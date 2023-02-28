import Link from "next/link";

export default function Home() {
  return (
    <div>
      <h1>Next js pre-rendering</h1>
      <Link href='/users'>Users</Link>
    </div>
  );
}
