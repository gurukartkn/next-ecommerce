import Link from "next/link";
import Image from "next/image";

import {
  AiOutlineInstagram,
  AiOutlineFacebook,
  AiOutlineTwitter,
} from "react-icons/ai";

import BrandImage from "../public/assets/brand-icon.png";

const Footer = () => {
  return (
    <footer className="border-t px-4 divide-y">
      <div className="container flex flex-col justify-between py-10 mx-auto space-y-8 lg:flex-row lg:space-y-0">
        <div className="lg:w-1/3">
          <Link href="/">
            <a className="flex items-center gap-3">
              <Image
                src={BrandImage}
                alt="Dollar Smart Logo"
                width={50}
                height={50}
                layout="fixed"
              />
              <span className="self-center text-xl font-semibold whitespace-nowrap">
                Dollar Smart
              </span>
            </a>
          </Link>
        </div>
        <div className="grid grid-cols-2 text-sm gap-x-3 gap-y-8 lg:w-2/3 sm:grid-cols-4">
          <div className="space-y-3">
            <h3 className="tracking-wide uppercase font-semibold">Product</h3>
            <ul className="space-y-1">
              <li>
                <Link href="/products/Clothes">
                  <a>Clothes</a>
                </Link>
              </li>
              <li>
                <Link href="/products/Electronics">
                  <a>Electronics</a>
                </Link>
              </li>
              <li>
                <Link href="/products/Furniture">
                  <a>Furniture</a>
                </Link>
              </li>
              <li>
                <Link href="/products/Shoes">
                  <a>Shoes</a>
                </Link>
              </li>
              <li>
                <Link href="/products/Others">
                  <a>Others</a>
                </Link>
              </li>
            </ul>
          </div>
          <div className="space-y-3">
            <h3 className="tracking-wide uppercase font-semibold">Company</h3>
            <ul className="space-y-1">
              <li>
                <a>Privacy</a>
              </li>
              <li>
                <a>Terms of Service</a>
              </li>
            </ul>
          </div>
          <div className="space-y-3">
            <h3 className="uppercase font-semibold">Developers</h3>
            <ul className="space-y-1">
              <li>
                <a>Public API</a>
              </li>
              <li>
                <a>Documentation</a>
              </li>
              <li>
                <a>Guides</a>
              </li>
            </ul>
          </div>
          <div className="space-y-3">
            <div className="uppercase font-semibold">Social media</div>
            <div className="flex justify-start space-x-3">
              <AiOutlineInstagram size={20} />
              <AiOutlineFacebook size={20} />
              <AiOutlineTwitter size={20} />
            </div>
          </div>
        </div>
      </div>
      <div className="py-6 text-sm text-center dark:text-gray-400">
        © 2022 Dollar Smart Co. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
