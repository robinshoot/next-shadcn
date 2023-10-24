import Link from "next/link";

import { siteConfig } from "@/config/site";
import { buttonVariants } from "@/components/ui/button";

import { Separator } from "@/components/ui/separator";
import SideMenu from "@/components/Sidebar";

export default function Home() {
  return (
    <>
      <main className="relative py-6 lg:gap-10 lg:py-8 xl:grid xl:grid-cols-[1fr_300px]">
        <div className="mx-auto w-full min-w-0">
          <div className="space-y-2">
            <div className="scroll-m-20 text-4xl font-bold tracking-tight">
              Home Page
            </div>
            <div className="text-lg text-muted-foreground">Description</div>
          </div>
          <div className="flex items-center space-x-2 pt-4">gak dipakai</div>
          <div className="pb-12 pt-8">
            <div className="mdx">
              <div className="group relative my-4 flex flex-col space-y-2 [&_.preview>[data-orientation=vertical]]:sm:max-w-[70%]"></div>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Necessitatibus consequatur veritatis deserunt, et saepe quaerat in
              earum dignissimos optio ratione, alias officiis? Nostrum inventore
              ullam nihil beatae!
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
