"use client";
import {
  ShoppingCartIcon,
  MagnifyingGlassIcon,
} from "@heroicons/react/24/outline";
import React from "react";
import { Button } from "../ui/button";

import TopBarNav from "./TopBarNav";

const Navbar = () => {
  return (
    <header className="">
      <TopBarNav />
      <div className="bg-gray-100 p-4">
        <nav className="flex flex-wrap justify-between items-center container mx-auto">
          <div className="flex items-center space-x-4">
            <div className="text-2xl font-bold">Growcer</div>
            <div className="flex items-center w-[400px] border px-2 border-gray-300 rounded-3xl">
              <MagnifyingGlassIcon className="size-5" />
              <input
                type="text"
                placeholder="Search here..."
                className="w-full outline-none p-2 bg-transparent"
              />
            </div>
          </div>
          <div className="flex items-center space-x-6">
            <Button>Sign In</Button>
            <div className="p-2 bg-white rounded-full cursor-pointer">
              <ShoppingCartIcon className="size-5" />
            </div>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
