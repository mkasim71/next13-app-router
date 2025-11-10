import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";

export default function Navbar() {
  const pathname = usePathname();
  const router = useRouter();

  return (
    <nav className="fixed w-full flex justify-between px-5 py-5 bg-gray-800">
      <div className="flex">
        <h1 className="text-white">Navbar</h1>
        <ul className="flex ml-10 ">
          <Link href="/">
            <li
              className={`mr-5 ${
                pathname === "/" ? "text-blue-300" : "text-white"
              } cursor-pointer hover:bg-gray-600 rounded-md`}
            >
              Home
            </li>
          </Link>
          <Link href="/about">
            <li
              className={`mr-5 ${
                pathname === "/about" ? "text-blue-300" : "text-white"
              } cursor-pointer hover:bg-gray-600 rounded-md`}
            >
              About
            </li>
          </Link>
          <Link href="/about/profile">
            <li
              className={`mr-5 ${
                pathname === "/about/profile" ? "text-blue-300" : "text-white"
              } cursor-pointer hover:bg-gray-600 rounded-md`}
            >
              Profile
            </li>
          </Link>
          <Link href="/product">
            <li
              className={`mr-5 ${
                pathname === "/product" ? "text-blue-300" : "text-white"
              } cursor-pointer hover:bg-gray-600 rounded-md`}
            >
              Product
            </li>
          </Link>
          <Link href="/dashboard/product">
            <li
              className={`mr-5 ${
                pathname === "/dashboard/product"
                  ? "text-blue-300"
                  : "text-white"
              } cursor-pointer hover:bg-gray-600 rounded-md`}
            >
              Dashboard
            </li>
          </Link>
        </ul>
      </div>
      <div>
        <button
          className="px-3 text-sm bg-white rounded-md h-7 hover:bg-blue-300"
          onClick={() => router.push("/login")}
        >
          Login
        </button>
      </div>
    </nav>
  );
}
