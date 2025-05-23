"use client";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Poppins } from "next/font/google";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { NavbarSidebar } from "./navbar-sidebar";
import { useState } from "react";
import { MenuIcon } from "lucide-react";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["700"],
});

interface navbarItemProps {
  href: string;
  children: React.ReactNode;
  isActive?: boolean;
}

const NavbarItem = ({ href, children, isActive }: navbarItemProps) => {
  return (
    <Button
      asChild
      variant="outline"
      className={cn(
        "bg-transparent hover:bg-transparent rounded-full hover:border-primary border-transparent px-3.5 text-lg",
        isActive && "bg-black text-white hover:bg-blcak hover:text-white"
      )}
    >
      <Link href={href}>{children}</Link>
    </Button>
  );
};

const NavbarItems = [
  {
    href: "/",
    children: "Home",
  },
  {
    href: "/about",
    children: "About",
  },
  {
    href: "/features",
    children: "Features",
  },
  {
    href: "/pricing",
    children: "Pricing",
  },
  {
    href: "/contact",
    children: "Contact",
  },
];
export const Navbar = () => {
  const pathname = usePathname();
  const [sidebarOpen, setSidebarOpen] = useState(false);
  return (
    <nav className="h-20 flex border-b justify-between font-medium bg-white">
      <Link href="/" className="pl-6 flex items-center">
        <span className={cn("text-5xl font-semibold", poppins.className)}>
          funroad
        </span>
      </Link>
      <NavbarSidebar
        items={NavbarItems}
        open={sidebarOpen}
        onOpenChange={setSidebarOpen}
      />

      <div className="items-center gap-4 hidden lg:flex">
        {NavbarItems.map((item) => (
          <NavbarItem
            key={item.href}
            href={item.href}
            isActive={pathname === item.href}
          >
            {item.children}
          </NavbarItem>
        ))}
      </div>

      <div className="hidden lg:flex">
        <Button
          asChild
          variant="secondary"
          className="border-l border-t-0 border-r-0 border-b-0 px-12 h-full rounded-none bg-white hover:bg-pink-400 transition-colors text-lg"
        >
          <Link href="sign-in"> Log In</Link>
        </Button>
        <Button
          asChild
          variant="secondary"
          className="border-l border-t-0 border-r-0 border-b-0 px-12 h-full rounded-none bg-black text-white  hover:bg-pink-400 hover:text-black transition-colors text-lg"
        >
          <Link href="sign-up">Start Selling</Link>
        </Button>
      </div>

      <div className="flex lg:hidden justify-center items-center">
        <Button
          variant="ghost"
          className="size-12 border-transparent bg-white"
          onClick={() => setSidebarOpen(true)}
        >
          <MenuIcon />
        </Button>
      </div>
    </nav>
  );
};
