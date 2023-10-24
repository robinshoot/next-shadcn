import * as React from "react";
import Link from "next/link";

import { NavItemType } from "@/types/nav";
import { siteConfig } from "@/config/site";
import { cn } from "@/lib/utils";
import { Icons } from "@/components/icons";
import SideMenu from "./Sidebar";

interface MainNavProps {
  items?: NavItemType[];
}

export function MainNav({ items }: MainNavProps) {
  return (
    <div className="mr-4 hidden md:flex">
      <Link href="/" className="mr-6 flex items-center space-x-2">
        <Icons.logo className="h-6 w-6" />
        <span className="hidden font-bold sm:inline-block">
          {siteConfig.name}
        </span>
      </Link>
    </div>
  );
}
