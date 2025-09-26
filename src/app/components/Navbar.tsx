"use client";

import Link from "next/link";
import { cn } from "../lib/utils";
import React from "react";
import { usePathname } from "next/navigation";

const navLinks = [
  {
    name: "Home",
    href: "/",
  },
  { name: "Projects", href: "/projects" },
  { name: "About", href: "/about" },
  { name: "Contact", href: "/contact" },
];

const Navbar = () => {
  const pathname = usePathname();

  return (
    <div className="flex justify-center items-center relative top-3">
      <nav className="flex p-1 gap-1 border border-white/15 rounded-full bg-white/10 backdrop-blur">
        {navLinks.map((link, index) => (
          <Link
            key={index}
            href={link.href}
            className={cn(
              "px-4 py-1.5 rounded-full text-white/70 text-sm font-semibold hover:bg-white/10 hover:text-white transition duration-300",
              pathname === link.href
                ? "bg-white text-gray-900 hover:bg-white/70 hover:text-gray-900"
                : ""
            )}
          >
            {link.name}
          </Link>
        ))}
      </nav>
    </div>
  );
};

export default Navbar;
