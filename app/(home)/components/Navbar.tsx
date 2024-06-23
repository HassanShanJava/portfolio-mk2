import Link from "next/link";
import React from "react";
import { socials } from "@/lib/constants";

const Navbar = () => {
  return (
    <nav className="py-10 flex justify-between items-center">
      <h1 className="text-white text-2xl font-bold underline underline-offset-8 decoration-green-500 -rotate-2">Hassan Shan 💻</h1>

      <div className="flex items-center gap-4">
        {socials.map((item, i) => (
          <Link key={i} href={item.link} aria-label={item.label} className="hover:scale-110 transition-all">
            <i className={`fa-brands ${item.icon}  text-white text-4xl `}></i>
          </Link>
        ))}
      </div>
    </nav>
  );
};

export default Navbar;
