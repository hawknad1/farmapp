"use client";
import React from "react";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "../ui/navigation-menu";
import Link from "next/link";
import { MapPinIcon } from "@heroicons/react/24/outline";
import { ClockIcon } from "@heroicons/react/24/outline";
import { PhoneIcon } from "@heroicons/react/24/outline";

const TopBarNav = () => {
  return (
    <nav className="bg-[#003545] justify-between py-1 px-4 hidden md:inline-flex md:w-full">
      <NavigationMenu>
        <NavigationMenuList className="flex gap-4 text-gray-200 text-sm">
          <Link href="/">Home</Link>
          <NavigationMenuItem>
            <NavigationMenuTrigger className="bg-transparent p-0 hover:bg-transparent">
              Shop
            </NavigationMenuTrigger>
            <NavigationMenuContent>
              <NavigationMenuLink>Link</NavigationMenuLink>
            </NavigationMenuContent>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <NavigationMenuTrigger className="bg-transparent p-0 hover:bg-transparent">
              Category
            </NavigationMenuTrigger>
            <NavigationMenuContent>
              <NavigationMenuLink>Link</NavigationMenuLink>
            </NavigationMenuContent>
          </NavigationMenuItem>
          <Link href="/blog">Blog</Link>
        </NavigationMenuList>
      </NavigationMenu>
      <div className="flex items-center gap-10 text-gray-200">
        <div className="flex gap-1">
          <MapPinIcon className="size-4" />
          <p className="font-medium text-xs">Spintex Road</p>
        </div>
        <div className="flex gap-1">
          <ClockIcon className="size-4" />
          <p className="font-medium text-xs">Everyday from 10AM to 08:00PM</p>
        </div>
        <div className="flex gap-1">
          <PhoneIcon className="size-4" />
          <p className="font-medium text-xs">0548332803</p>
        </div>
      </div>
    </nav>
  );
};

export default TopBarNav;
