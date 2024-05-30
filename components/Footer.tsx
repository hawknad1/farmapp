import { accountLinks, companyLinks, paymentLinks } from "@/constants";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white p-8">
      <div className="container mx-auto flex flex-col md:flex-row justify-between">
        <div>
          <div className="text-2xl font-bold">ZoroFarms</div>
          <p className="text-sm text-neutral-400">3 Beach Nook, Hovefort</p>
          <p className="text-sm text-neutral-400">zorofarms@gmail.com</p>
          <p className="text-sm text-neutral-400">10:00 - 18:00, Mon - Sat</p>
        </div>
        <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-8 gap-12">
          <div className="flex flex-col gap-2">
            <h4 className="font-medium">Account</h4>
            {accountLinks.map((acc) => (
              <div key={acc.id}>
                <Link href={acc.href} className="text-sm text-neutral-400">
                  {acc.title}
                </Link>
              </div>
            ))}
          </div>

          <div className="flex flex-col gap-2">
            <h4 className="font-medium">Company</h4>
            {companyLinks.map((com) => (
              <div key={com.id}>
                <Link href={com.href} className="text-sm text-neutral-400">
                  {com.title}
                </Link>
              </div>
            ))}
          </div>

          <div className="flex flex-col gap-2">
            <h4 className="font-medium">Company</h4>
            <div className="flex flex-col gap-2">
              {paymentLinks.map((pay) => (
                <div
                  key={pay.id}
                  className="border-slate-500 border rounded-md w-20 "
                >
                  <Image
                    src={pay.image}
                    width={100}
                    height={100}
                    alt="Payment Logo"
                    className="h-9 w-full object-contain"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
