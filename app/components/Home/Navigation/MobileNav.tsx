import React from "react";
import { FaXmark } from "react-icons/fa6";
import Link from "next/link";

type Props = {
  nav: boolean;
  closeNav: () => void;
};
const MobileNav = ({ closeNav, nav }: Props) => {
  const navOpenStyle = nav ? "translate-x-0" : "translate-x-[-100%]";
  return (
    <div
      className={`transform ${navOpenStyle} transition-all duration-500 fixed top-0 left-0 z-[200] h-screen right-0 bottom-0 bg-[#29207f]`}
    >
      {/* close icon */}

      <FaXmark
        onClick={closeNav}
        className="w-8 h-8 text-white absolute top-8 z-[202] right-8"
      />
      {/* nav links */}
      <ul className="relative z-[201] space-y-10 flex flex-col items-center justify-center h-full">
        <li className="text-[22px] font-semibold cursor-pointer transition-all duration-200 text-white hover:text-yellow-400">
          <Link href="/"> Home </Link>
        </li>
        <li className="text-[22px] font-semibold cursor-pointer transition-all duration-200 text-white hover:text-yellow-400">
          <Link href="/"> About </Link>
        </li>
        <li className="text-[22px] font-semibold cursor-pointer transition-all duration-200 text-white hover:text-yellow-400">
          <Link href="/"> Investment </Link>
        </li>
        <li className="text-[22px] font-semibold cursor-pointer transition-all duration-200 text-white hover:text-yellow-400">
          <Link href="/"> Services </Link>
        </li>
        <li className="text-[22px] font-semibold cursor-pointer transition-all duration-200 text-white hover:text-yellow-400">
          <Link href="/"> Blog </Link>
        </li>
        <li className="text-[22px] font-semibold cursor-pointer transition-all duration-200 text-white hover:text-yellow-400">
          <Link href="/"> Contact </Link>
        </li>
      </ul>
    </div>
  );
};

export default MobileNav;
