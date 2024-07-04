import { Sheet, SheetContent } from "@/components/ui/sheet";
import React from "react";

interface SidebarProps {
  isOpen: boolean;
  close: () => void;
  children: React.ReactNode;
}
function Sidebar({ isOpen, close, children }: SidebarProps) {
  return (
    <Sheet open={isOpen} onOpenChange={close}>
      <SheetContent className="bg-white">{children}</SheetContent>
    </Sheet>
  );
}

export default Sidebar;
