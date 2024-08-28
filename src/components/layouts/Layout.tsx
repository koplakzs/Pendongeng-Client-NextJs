import React, { ReactNode } from "react";
import Navbar from "../utils/Navbar";
import { Poppins } from "next/font/google";

interface layoutInterface {
  children: ReactNode;
}

const poppins = Poppins({
  weight: ["400"],
  subsets: ["latin"],
  variable: "--font-poppins",
});
const poppinsBold = Poppins({
  weight: ["600"],
  subsets: ["latin"],
  variable: "--font-poppins-bold",
});

const Layout: React.FC<layoutInterface> = ({ children }) => {
  return (
    <main
      className={` ${poppinsBold.variable} ${poppins.variable} font-poppins  relative bg-gray-100`}
    >
      <Navbar />
      <main className="px-5 md:px-20">{children}</main>
    </main>
  );
};

export default Layout;
