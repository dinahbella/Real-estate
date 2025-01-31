"use client";
import React from "react";
import { GiVikingLonghouse } from "react-icons/gi";
import { FaSearch } from "react-icons/fa";
import Link from "next/link";

const Header = () => {
  return (
    <header className="bg-slate-200 shadow-md">
      <div className="flex justify-between items-center max-w-6xl mx-auto p-3">
        <Link href="/">
          <div className="items-center">
            <GiVikingLonghouse className="text-5xl font-extrabold ml-5 text-blue-300" />
            <h1 className="font-bold text-sm sm:text-xl flex flex-wrap">
              <span className="text-slate-500">Dinah</span>
              <span className="text-slate-700">Estate</span>
            </h1>
          </div>
        </Link>
        <form className="bg-slate-100 p-3 rounded-lg items-center flex">
          <input
            type="text"
            placeholder="search.."
            className="bg-transparent focus:outline-none w-24 sm:w-64"
          />
          <FaSearch className="text-slate-500" />
        </form>
        <ul className="flex gap-4">
          <Link
            href="/"
            className="hidden sm:inline hover:underline transition-all duration-300"
          >
            Home
          </Link>
          <Link
            href="/about"
            className="hidden sm:inline hover:underline transition-all duration-300"
          >
            About
          </Link>

          <Link
            href="/sign-in"
            className="hidden sm:inline hover:underline transition-all duration-300"
          >
            Sign In
          </Link>
        </ul>
      </div>
    </header>
  );
};

export default Header;
