"use client"

import { Button } from "./button";
import { Menu } from "lucide-react";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";
import Sidebar from "./Sidebar";
import { useEffect, useState } from "react";

const MobileSidebar = () => {
  const [isMounted ,setIsMounted]= useState(false);

  useEffect(()=>{
    setIsMounted(true)
  },[]);

  if(!isMounted){
    return null;
  }

  return (
    <Sheet>
      <SheetTrigger>
        <Button variant="ghost" size="icon" className="md:hidden">
          <Menu />
        </Button>
      </SheetTrigger>
      <SheetContent side="right" className="p-0">
        <Sidebar/>
      </SheetContent>
    </Sheet>
  );
};

export default MobileSidebar;
