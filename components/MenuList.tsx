"use client";
import { MenuItemType } from "@/types/nav";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuIndicator,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuViewport,
} from "@/components/ui/navigation-menu";
import Link from "next/link";
import { navigationMenuTriggerStyle } from "@/components/ui/navigation-menu";
import { Button } from "./ui/button";
import { usePathname } from "next/navigation";

interface MenuItemProps {
  menus: MenuItemType[];
}

export default function MenuList({ menus }: MenuItemProps) {
  return (
    <div className="grid grid-flow-row auto-rows-max text-sm">
      {menus.map((menu, index) => (
        <Button
          className="items-start justify-start"
          key={menu.id}
          variant="ghost"
        >
          <Link href={menu.path}>{menu.name}</Link>
        </Button>
      ))}

      {/* {menus.map((menu, index) => (
        <Link
          key={menu.id}
          href={menu.path}
          className="group flex w-full items-center rounded-md border border-transparent px-2 py-1 hover:underline text-muted-foreground"
        >
          {menu.name}
        </Link>
      ))} */}
    </div>
  );
}
