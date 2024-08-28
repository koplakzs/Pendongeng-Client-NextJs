import Link from "next/link";
import React from "react";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "../ui/sheet";
import { FaBarsStaggered } from "react-icons/fa6";

const Navbar = () => {
  return (
    <nav className="fixed z-10 px-5 py-5 bg-gray-100 w-full border-b-2 border-gray-400 item-center flex md:px-20 md:justify-between md:py-7 duration-500 transition-all ease-out">
      <p className="text-2xl font-poppinsBold  text-center md:text-3xl ">
        Pendongeng
      </p>
      <section className="hidden gap-20 text-lg md:flex md:justify-end md:text-xl self-center">
        <Link
          href={"/"}
          className="hover:scale-110 duration-300 ease-out transition-all"
        >
          Home
        </Link>
        <Link
          href={"/dongeng"}
          className="hover:scale-110 duration-300 ease-out transition-all"
        >
          Pendongeng
        </Link>
      </section>
      <section className="self-center ms-auto md:hidden">
        <Sheet>
          <SheetTrigger asChild>
            <FaBarsStaggered className="text-2xl cursor-pointer hover:scale-125 duration-500 transition-all ease-out" />
          </SheetTrigger>
          <SheetContent className="w-8/12">
            <div className="flex flex-col gap-5 mt-10 ">
              <Link
                href={"/"}
                className="p-4 rounded-xl duration-500 ease-out transition-all hover:bg-primary hover:text-primary-foreground "
              >
                Home
              </Link>
              <Link
                href={"/dongeng"}
                className="p-4 rounded-xl duration-500 ease-out transition-all hover:bg-primary hover:text-primary-foreground"
              >
                Pendongeng
              </Link>
            </div>
          </SheetContent>
        </Sheet>
      </section>
    </nav>
  );
};

export default Navbar;
