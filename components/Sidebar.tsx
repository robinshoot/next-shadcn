import { ScrollArea } from "@/components/ui/scroll-area";
import MenuList from "./MenuList";
import prisma from "@/lib/prisma";

const getAllMenus = async () => {
  const res = await prisma.side_menu.findMany({
    select: {
      id: true,
      name: true,
      path: true,
    },
  });
  return res;
};

export default async function Sidebar() {
  const menu = await getAllMenus();
  return (
    <>
      <ScrollArea className="h-full py-6 pl-8 pr-6 lg:py-8">
        <div className="w-full">
          <div className="pb-4">
            <MenuList menus={menu} />
          </div>
        </div>
      </ScrollArea>
    </>
  );
}
