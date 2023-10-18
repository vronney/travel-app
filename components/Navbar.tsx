"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { NAV_LINKS } from "@/constants";
import Button from "./Button";

const Navbar = () => {
  const [isMenuVisible, setIsMenuVisible] = useState(false);

  const toggleMenu = () => {
    setIsMenuVisible(!isMenuVisible);
    if (!isMenuVisible) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  };

  return (
    <nav className="flexBetween max-container padding-container relative z-30 py-5">
      <Link href="/">
        <Image src="/TrekNest_Logo.svg" alt="logo" width={74} height={29} />
      </Link>
      <ul className="hidden h-full gap-12 md:flex">
        {NAV_LINKS.map((link) => (
          <Link
            href={link.href}
            key={link.key}
            className="regular-10 md:regular-12 lg:regular-16 text-gray-50 flexCenter cursor-pointer pb-1.5 transition-all hover:font-bold"
          >
            {link.label}
          </Link>
        ))}
      </ul>
      <div className="md:flexCenter hidden">
        <Button
          type="button"
          title="Login"
          icon="/user.svg"
          variant="btn_dark_green"
        />
      </div>
      <Image
        src="/menu.svg"
        alt="menu"
        width={32}
        height={32}
        className="inline-block cursor-pointer md:hidden"
        onClick={toggleMenu}
      />
      {/* Side Menu */}
      {isMenuVisible && (
        <div
          className="fixed inset-0 bg-black opacity-50 z-10"
          onClick={toggleMenu}
        ></div>
      )}
      <div
        className={`fixed right-0 top-0 h-full w-64 bg-green-90 transition-all duration-300 transform z-20 ${
          isMenuVisible ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <span
          className="text-white text-2xl cursor-pointer p-4 absolute right-0 top-0"
          onClick={toggleMenu}
        >
          X
        </span>
        <ul className="flex flex-col items-start p-4">
          {NAV_LINKS.map((link) => (
            <Link
              href={link.href}
              key={link.key}
              className="regular-16 text-white flexCenter cursor-pointer pb-5 transition-all hover:font-bold"
            >
              {link.label}
            </Link>
          ))}
        </ul>
        <div className="absolute bottom-0 left-0 p-4">
          <Button
            type="button"
            title="Login"
            icon="/user.svg"
            variant="btn_dark_green filter invert"
          />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
