"use client";
import Link from "next/link";
import React, { useState } from "react";
import { MdOutlineMenu } from "react-icons/md";
import { MdCancel } from "react-icons/md";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  return (
    <div className="w-full h-16 md:h-20 flex items-center justify-between">
      <div className="flex items-center gap-4 text-2xl font-bold">
        <img src="/logo.png" alt="logo" className="w-8 h-8" />
        <span>Demure</span>
      </div>
      {/* mobile menu */}
      <div className="md:hidden">
        <div
          className="cursor-pointer text-4xl"
          onClick={() => setOpen((prev) => !prev)}
        >
          {open ? <MdCancel /> : <MdOutlineMenu />}
        </div>
        <div
          className={`w-full h-screen flex flex-col gap-4 items-center font-medium
         justify-center absolute top-16 transition-all ease-in-out ${
           open ? "-right-0" : "-right-[100%]"
         }`}
        >
          <Link href="/">Home </Link>
          <Link href="/">Trending </Link>
          <Link href="/">Most Popular </Link>
          <Link href="/">About </Link>
          <Link href="/">
            <button className="py-2 px-4 text-white rounded-2xl bg-blue-600">
              Login
            </button>
          </Link>
        </div>

        {/* mobile link list */}
      </div>
      {/* desktop menu */}
      <div className="hidden md:flex items-center font-medium gap-8 xl:gap-12">
        <Link href="/">Home </Link>
        <Link href="/">Trending </Link>
        <Link href="/">Most Popular </Link>
        <Link href="/">About </Link>
        <Link href="/">
          <button className="py-2 px-4 text-white rounded-2xl bg-blue-600">
            Login
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
