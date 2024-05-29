"use client";
import {
  ShoppingCartIcon,
  MagnifyingGlassIcon,
  Bars3BottomRightIcon,
} from "@heroicons/react/24/outline";
import React, { useState } from "react";
import { Button } from "../ui/button";

import TopBarNav from "./TopBarNav";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "../ui/dialog";
import { FormInputIcon } from "lucide-react";
import { Label } from "../ui/label";
import { Input } from "../ui/input";
// import { Dialog, DialogPanel } from "@headlessui/react";

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  return (
    <header className="">
      <TopBarNav />
      <nav className="bg-gray-100 p-4 w-full">
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

            <button className="p-2 bg-white rounded-full md:hidden cursor-pointer">
              <Bars3BottomRightIcon className="size-5" />
            </button>
          </div>
        </div>
      </nav>
      {/* <Dialog
        as="div"
        className="lg:hidden"
        open={mobileMenuOpen}
        onClose={() => setMobileMenuOpen(false)}
      >
        <div className="fixed insert-0 z-10" />
        <DialogPanel
          className="fixed insert-y-0 right-0 z-10 w-full overflow-y-auto bg-blue-800
         px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10"
        >
          <p>HELLOOOOOO</p>
        </DialogPanel>
      </Dialog> */}
    </header>
  );
};

export default Navbar;
