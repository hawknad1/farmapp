import { SearchIcon, ShoppingCartIcon } from "lucide-react";
import Image from "next/image";
import React from "react";
import MenuBar from "./navbar/MenuBar";
import SignInPopUp from "./SignInPopUp";
import SideSheet from "./navbar/SideSheet";
import Link from "next/link";
import UserAvatar from "./UserAvatar";

const Header = () => {
  return (
    <div className="flex items-center mx-auto p-2 space-x-1 lg:space-x-4 px-4">
      <Link href="/">
        <Image
          src="/images/sowgreen.png"
          alt="logo"
          width={80}
          height={80}
          className="object-contain w-24"
        />
      </Link>

      <div className="flex-1 ">
        <form className="flex items-center space-x-1 bg-gray-100 p-2 rounded-md flex-1 max-w-96">
          <SearchIcon className="h-4 text-gray-600" />
          <input
            type="text"
            placeholder="Search"
            className="bg-transparent flex-1 outline-none"
          />
        </form>
      </div>

      <div className=" flex items-center">
        <div className="hidden lg:flex">
          <MenuBar />
        </div>
        <div className="md:flex md:items-center md:gap-12">
          <nav aria-label="Global" className="hidden md:block"></nav>

          <div className="flex items-center gap-4">
            <div className="flex items-center space-x-4 md:space-x-6">
              <SignInPopUp />
              <div className="p-2 h-10 w-10 flex items-center justify-center rounded-full cursor-pointer bg-accent">
                <ShoppingCartIcon className="size-5 " />
              </div>

              <SideSheet />
            </div>
          </div>
        </div>
      </div>
      <UserAvatar />
    </div>
  );
};

export default Header;
