"use client";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

import {
  Menu,
  ShoppingBasket
} from "lucide-react";
import { Button } from "@/components/ui/button";
import DarkModeToggle from "./dark-mode-toggle";
import Link from "next/link";

interface MenuItem {
  href: string;
  label: string;
  sectionId: string;
}

interface HeaderProps {
  menuItems: MenuItem[];
}

const Header = ({ menuItems }: HeaderProps) => {
  return (
    <div className="custom-container">
      <div className="flex justify-between items-center mx-auto py-4">
        <div className="">
          <p className="dark:text-white text-slate-950">Logo</p>
        </div>

        {/* Menu Web */}
        <div className="hidden md:block">
          <NavigationMenu>
            <NavigationMenuList className="flex items-center space-x-10">
              {menuItems.map((item) => (
                <NavigationMenuItem key={item.label}>
                  <Link href={"/"} className="dark:text-white text-brand">
                    {item.label}
                  </Link>
                </NavigationMenuItem>
              ))}
              <DarkModeToggle />
              <Button>
                <ShoppingBasket /> Cart
              </Button>
            </NavigationMenuList>
          </NavigationMenu>
        </div>

        {/* Menu Mobile */}
        <div className="block md:hidden">
          <Sheet>
            <DarkModeToggle />
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" aria-label="Open menu">
                <Menu className="h-6 w-6 dark:text-gray-200 text-slate-950 hover:text-sky-700 dark:hover:text-sky-400 transition-colors duration-200" />
              </Button>
            </SheetTrigger>

            <SheetContent
              side="left"
              className="dark:bg-gray-950 dark:text-white bg-white text-slate-950"
            >
              <SheetHeader>
                <SheetTitle>Menu</SheetTitle>
                <SheetDescription>
                  <NavigationMenu>
                    <NavigationMenuList className="flex flex-col justify-start items-start space-y-5">
                      {menuItems.map((item) => (
                        <NavigationMenuItem key={item.label}>
                          <Link
                            href={"/"}
                            className="dark:text-white text-slate-950"
                          >
                            {item.label}
                          </Link>
                        </NavigationMenuItem>
                      ))}
                      <Button>
                        <ShoppingBasket /> Cart
                      </Button>
                    </NavigationMenuList>
                  </NavigationMenu>
                </SheetDescription>
              </SheetHeader>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </div>
  );
};

export default Header;
