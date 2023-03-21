import Link from "next/link";
import { signIn, signOut, useSession } from "next-auth/react";
import Image from "next/image";

function Navbar() {
  const { data: session, status } = useSession();

  const loading = status === "loading";

  console.log(session, status);

  return (
    <nav className='header'>
      <h1 className='logo'>
        <Link href='#'>NextAuth</Link>
      </h1>
      <ul className={`main-nav ${!session && loading ? "loading" : "loaded"}`}>
        <li>
          <Link href='/'>Home</Link>
        </li>
        {status === "authenticated" && (
          <li>
            <Link href='/dashboard-auth'>Dashboard</Link>
          </li>
        )}
        <li>
          <Link href='/blog-auth'>Blog</Link>
        </li>

        {status === "unauthenticated" && (
          <li>
            <Link
              href='/api/auth/signin'
              onClick={(e) => {
                signIn("github");
              }}>
              Sign In
            </Link>
          </li>
        )}
        {status === "authenticated" && (
          <li>
            <Link
              href='/api/auth/signout'
              onClick={(e) => {
                signOut();
              }}>
              Sign Out
            </Link>
          </li>
        )}
        {session?.user?.image && (
          <li>
            <Image
              src={session?.user?.image}
              width={45}
              height={45}
              alt='img not found'
            />
          </li>
        )}
      </ul>
    </nav>
  );
}

export default Navbar;
