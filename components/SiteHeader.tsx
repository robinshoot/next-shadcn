import Link from "next/link";

import { siteConfig } from "@/config/site";
import { Button, buttonVariants } from "@/components/ui/button";
// import { Icons } from "@/components/icons";
import { MainNav } from "@/components/MainNav";
import { ThemeToggle } from "@/components/theme-toggle";
import { SidebarToggle } from "./SidebarToggle";

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-14 items-center">
        <MainNav items={siteConfig.mainNav} />
        <SidebarToggle />
        <div className="flex flex-1 items-center justify-end space-x-4">
          <nav className="flex items-center space-x-1">
            <Link
              href={siteConfig.links.github}
              target="_blank"
              rel="noreferrer"
            >
              <div
                className={buttonVariants({
                  size: "icon",
                  variant: "ghost",
                })}
              >
                IG{/* <Icons.gitHub className="h-5 w-5" /> */}
                <span className="sr-only">GitHub</span>
              </div>
            </Link>
            <Link
              href={siteConfig.links.twitter}
              target="_blank"
              rel="noreferrer"
            >
              <div
                className={buttonVariants({
                  size: "icon",
                  variant: "ghost",
                })}
              >
                IT
                {/* <Icons.twitter className="h-5 w-5 fill-current" /> */}
                <span className="sr-only">Twitter</span>
              </div>
            </Link>
            <ThemeToggle />
          </nav>
        </div>
      </div>
    </header>
  );
}
