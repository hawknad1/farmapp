"use client";
import React, { Fragment } from "react";
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
import {
  Dialog,
  Popover,
  PopoverButton,
  PopoverPanel,
  Transition,
} from "@headlessui/react";
import { categoryCard, productCard } from "@/constants";
import Image from "next/image";
import MenuBar from "./MenuBar";

const TopBarNav = () => {
  return (
    <nav className="bg-[#003545] justify-between py-1 px-4 hidden md:inline-flex md:w-full">
      <MenuBar />

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
