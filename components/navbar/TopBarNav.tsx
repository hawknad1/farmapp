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

const TopBarNav = () => {
  return (
    <nav className="bg-[#003545] justify-between py-1 px-4 hidden md:inline-flex md:w-full">
      <Popover className="flex space-x-6">
        <a
          href="/"
          className="text-sm font-semibold leading-6 text-white data-[active]:text-slate-200 data-[hover]:text-slate-200"
        >
          Home
        </a>
        <a
          href="/shop"
          className="text-sm font-semibold leading-6 text-white data-[active]:text-slate-200 data-[hover]:text-slate-200"
        >
          Shop
        </a>
        <PopoverButton className="text-sm/6 font-semibold text-white focus:outline-none data-[active]:text-slate-200 data-[hover]:text-white data-[focus]:outline-1 data-[focus]:outline-white">
          Category
        </PopoverButton>

        <Transition
          as={Fragment}
          enter="transition ease-out duration-200"
          enterFrom="opacity-0 translate-y-1"
          enterTo="opacity-100 translate-y-0"
          leave="transition ease-in duration-150"
          leaveFrom="opacity-100 translate-y-0"
          leaveTo="opacity-0 translate-y-1"
        >
          <PopoverPanel
            anchor="bottom"
            className="divide-y divide-white/5 rounded-xl bg-white text-sm/6 [--anchor-gap:var(--spacing-5)]"
          >
            <div className="p-4">
              {categoryCard.map((item) => (
                <div
                  key={item.id}
                  className="group relative flex items-center px-2 gap-x-4 rounded-lg text-sm leading-6 hover:bg-gray-100"
                >
                  <div className="flex h-11 w-11 flex-none items-center justify-center">
                    <Image
                      src={item.image}
                      width={100}
                      height={100}
                      className="h-6 w-6"
                      alt="Image"
                    />
                  </div>
                  <div className="flex-auto">
                    <a href={item.href}>
                      {item.title}
                      <span className="absolute insert-0" />
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </PopoverPanel>
        </Transition>
        <a href="/blog" className="text-sm font-semibold leading-6 text-white">
          Blog
        </a>
      </Popover>

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
