import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="flex px-5 py-4 bg-gray-800">
      <h1 className="text-white">Navbar</h1>
      <ul className="flex ml-10 ">
        <Link href="/">
          <li className="mr-5 text-blue-300 cursor-pointer">Home</li>
        </Link>
        <Link href="/about">
          <li className="mr-5 text-blue-300 cursor-pointer">About</li>
        </Link>
        <Link href="/about/profile">
          <li className="mr-5 text-blue-300 cursor-pointer">Profile</li>
        </Link>
      </ul>
      <div className="flex justify-end">
        <Link href="/login">
          <div className="text-blue-300 cursor-pointer ">Login</div>
        </Link>
      </div>
    </nav>
  );
}
