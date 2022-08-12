import Image from "next/image";
import Link from "next/link";

import { AiOutlineShoppingCart, AiOutlineUser } from "react-icons/ai";

import BrandImage from "../public/assets/brand-icon.png";

const Navbar = () => {
  const user = {};
  return (
    <nav className="bg-white border-gray-200 px-2 md:px-4 py-2.5 ">
      <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
        <Link href="/">
          <a className="flex items-center gap-3">
            <Image
              src={BrandImage}
              alt="Dollar Smart Logo"
              width={50}
              height={50}
              layout="fixed"
            />
            <span className="hidden md:block self-center text-xl font-semibold whitespace-nowrap">
              Dollar Smart
            </span>
          </a>
        </Link>
        {!user.id && (
          <div className="flex items-center md:order-2">
            <Link href="/auth/login">
              <a className="text-gray-800 hover:bg-gray-50 focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-4 py-2 md:px-5 md:py-2.5 mr-1 md:mr-2 focus:outline-none ">
                Login
              </a>
            </Link>
            <Link href="/auth/register">
              <a className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 md:px-5 md:py-2.5 mr-1 md:mr-2 focus:outline-none ">
                Sign up
              </a>
            </Link>
          </div>
        )}
        {user.id && (
          <div className="flex gap-5 items-center md:order-2">
            <Link href="/cart">
              <a>
                <AiOutlineShoppingCart size={25} />
              </a>
            </Link>
            <Link href="/profile">
              <a>
                <AiOutlineUser size={25} />
              </a>
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
