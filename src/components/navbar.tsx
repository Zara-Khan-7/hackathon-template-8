import Image from "next/image";
import Link from "next/link";
import { AiOutlineExclamationCircle } from "react-icons/ai";
import { RiArrowDropDownLine } from "react-icons/ri";
import { IoCartOutline } from "react-icons/io5";

export default function Navbar() {
  return (
    <div className="flex flex-col text-white">
      {/* First Section */}
      <div className="flex flex-col sm:flex-row justify-between items-center px-6 sm:px-12 md:px-16 lg:px-28 bg-purple-950 text-slate-300 py-2 text-xs sm:text-sm">
        <h1 className="text-center sm:text-left mb-2 sm:mb-0">✔ Free Shipping On All Orders $50+</h1>
        <ul className="flex gap-4 justify-center sm:justify-end items-center">
          <li className="flex items-center">
            Eng <RiArrowDropDownLine className="text-2xl ml-1" />
          </li>
          <li>
            <Link href={"/Faq"}>Faqs</Link>
          </li>
          <li className="flex items-center">
            <AiOutlineExclamationCircle className="text-xl mr-1" />
            Need Help
          </li>
        </ul>
      </div>

      {/* Second Section */}
      <div className="flex justify-between items-center px-6 sm:px-12 md:px-16 lg:px-28 bg-slate-50 text-black py-2 flex-wrap">
        <div className="flex items-center gap-4">
          <Image
            src="/Logo.png"
            alt="logo"
            width={50}
            height={50}
            className="h-8 w-8 sm:h-10 sm:w-10"
          />
          <h1 className="text-sm sm:text-base font-semibold">
            <Link href={"/"}>Comforty</Link>
          </h1>
        </div>
        <div className="flex items-center gap-4">
          <Link href={"/Card"}>
            <IoCartOutline className="w-6 h-6 sm:w-8 sm:h-8 text-slate-800" />
          </Link>
          <span className="rounded-full text-white bg-emerald-600 px-2 py-1 text-xs">2</span>
          <Link href={"/Card"} className="text-sm sm:text-base">
            Cart
          </Link>
        </div>
      </div>

      {/* Third Section */}
      <div className="flex flex-col md:flex-row justify-between items-center px-6 sm:px-12 md:px-16 lg:px-28 py-4 gap-3">
        <ul className="flex flex-wrap justify-center gap-4 text-xs sm:text-sm md:text-base text-black">
          <li><Link href={"/"}>Home</Link></li>
          <li><Link href={"/Card"}>Shop</Link></li>
          <li><Link href={"/Product"}>Product</Link></li>
          <li><Link href={"/Pages"}>Pages</Link></li>
          <li><Link href={"/About"}>About</Link></li>
          <li><Link href={"/Contact"}>Contact</Link></li>
        </ul>
        <h1 className="text-xs sm:text-sm md:text-base text-center md:text-right text-black">
          Contact: (808) 555-0111
        </h1>
      </div>
    </div>
  );
}
