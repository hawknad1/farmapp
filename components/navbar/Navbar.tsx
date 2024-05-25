"use client";
import {
  ShoppingCartIcon,
  MagnifyingGlassIcon,
  Bars3BottomRightIcon,
} from "@heroicons/react/24/outline";
import React from "react";
import { Button } from "../ui/button";

import TopBarNav from "./TopBarNav";

const Navbar = () => {
  return (
    <header className="">
      <TopBarNav />
      <div className="bg-gray-100 p-4 w-full">
        <nav className=" ">
          <div className="flex relative items-center justify-between w-full mx-auto space-x-4">
            <div className="text-2xl font-bold">Growcer</div>
            <div className="flex absolute left-24 md:left-36 md:w-96 items-center border px-2 border-gray-300 rounded-3xl">
              <MagnifyingGlassIcon className="size-5 text-gray-400" />
              <input
                type="text"
                placeholder="Search here..."
                className="text-sm outline-none p-2 bg-transparent"
              />
            </div>
            <div className="flex items-center space-x-4 md:space-x-6">
              <Button className="hidden md:inline-flex">Sign In</Button>
              <div className="p-2 bg-white rounded-full cursor-pointer">
                <ShoppingCartIcon className="size-5 " />
              </div>
              <div className="p-2 bg-white rounded-full md:hidden cursor-pointer">
                <Bars3BottomRightIcon className="size-5" />
              </div>
            </div>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
