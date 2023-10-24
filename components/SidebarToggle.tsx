import { Copy, Menu } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Sidebar from "./Sidebar";

import { ScrollArea } from "@/components/ui/scroll-area";

const tags = Array.from({ length: 50 }).map(
  (_, i, a) => `v1.2.0-beta.${a.length - i}`
);

export function SidebarToggle() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline" className="md:hidden">
          <Menu />
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-sm pr-0">
        <Sidebar />
      </DialogContent>
    </Dialog>
  );
}
