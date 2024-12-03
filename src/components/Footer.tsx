import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <div className="w-fit lg:w-full">
      <div className="flex justify-between text-xl flex-col md:flex-row leading-[25.2px] my-20 mx-40  lg:my-10 lg:mx-20 font-[500]">
        <div className="lg:m-0 my-9 w-full">
          <h1 className="text-[#2429AF]  text-2xl ">Ayesha Aziz - 2024</h1>
        </div>
        <ul className="flex gap-20 lg:gap-10 ">
          <li>
            <Link href={""}>Github</Link>
          </li>
          <li>
            <Link href={""}>Linkedin</Link>
          </li>
          <li>
            <Link href={""}>Twitter</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Footer;
