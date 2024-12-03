"use client";
import React, { useState } from "react";
import Link from "next/link";
import { MdMenu } from "react-icons/md";

const Header = () => {
  const [isMenu, setMenu] = useState(false);

  function toggle() {
    setMenu(!isMenu);
  }

  return (
    <>
      <div className="w-full top-0 left-0   ">
        <span
          onClick={toggle}
          className=" md:hidden absolute top-7 z-20 left-12  "
        >
          <MdMenu size={50} />
        </span>

        <nav
          className={` md:hidden absolute top-0 left-0 shadow-xl shadow-slate-400  bg-[#ffffffea] rounded-lg justify-center items-center
             w-[400px] h-[550px]
            transition-all duration-500 ease-in-out transform ${
              isMenu
                ? "opacity-100 translate-x-0"
                : "opacity-0 translate-x-full"
            }`}
        >
          <ul className="flex gap-16  mt-16 flex-col justify-center font-semibold text-[28px] items-center w-full">
            <li>
              <Link href={"/"} onClick={toggle}>
                Work
              </Link>
            </li>
            <li>
              <Link href={"/about"} onClick={toggle}>
                About
              </Link>
            </li>
            <li>
              <Link href={""} onClick={toggle}>
                Playground
              </Link>
            </li>
            <li>
              <Link href={""} onClick={toggle}>
                Contact
              </Link>
            </li>
          </ul>
        </nav>
      </div>
      {/* Desktop */}
      <nav className="hidden md:flex justify-between px-20 py-10">
        <div className="font-bold text-3xl">AA</div>
        <ul className="flex gap-10 font-semibold text-xl">
          <li>
            <Link href={"/"}>Work</Link>
          </li>
          <li>
            <Link href={"/about"}>About</Link>
          </li>
          <li>
            <Link href={""}>Playground</Link>
          </li>
          <li>
            <Link href={""}>Contact</Link>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Header;
