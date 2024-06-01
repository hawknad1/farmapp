import React from "react";
import { Label } from "../ui/label";
import { Input } from "../ui/input";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "../ui/sheet";
import { Bars3BottomRightIcon } from "@heroicons/react/24/outline";
import { Button } from "../ui/button";
import { menuLinks } from "@/constants";
import Link from "next/link";

const SideSheet = () => {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <button className="p-2 bg-white rounded-full md:hidden cursor-pointer">
          <Bars3BottomRightIcon className="size-5" />
        </button>
      </SheetTrigger>
      <SheetContent>
        <div className="flex flex-col gap-4">
          {menuLinks.map((menu) => (
            <Link key={menu.id} href={menu.href}>
              {menu.title}
            </Link>
          ))}
        </div>
        <SheetFooter>
          <SheetClose asChild>
            <Button type="submit">Sign Out</Button>
          </SheetClose>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  );
};

export default SideSheet;
