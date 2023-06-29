"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import scss from "./Navigation.module.scss";

type NavLink = {
  label: string;
  href: string;
};
type Props = {
  navLinks: NavLink[];
};

const Navigation = ({ navLinks }: Props) => {
  const pathname = usePathname();
  return (
    <>
      {navLinks.map((link) => {
        const isActive = pathname === link.href;

        return (
          <Link
            key={link.label}
            href={link.href}
            className={isActive ? scss.active : ""}
          >
            {link.label}
          </Link>
        );
      })}
    </>
  );
};

export default Navigation;
