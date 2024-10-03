"use client";

import { Button } from "@/components/ui/button";
import { useAuth, UserButton } from "@clerk/nextjs";
import { LogOut } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

function NavbarRoutes() {
  const { userId } = useAuth();
  const pathname = usePathname();

  const IsAdminPage = pathname?.startsWith("/admin");

  return (
    <div className="flex gap-x-2 ml-auto">
      {IsAdminPage ? (
        <Link href={"/"}>
          <Button size={"sm"} variant={"ghost"}>
            <LogOut className="h-4 w-4 mr-2" />
            Exit
          </Button>
        </Link>
      ) : (
        <Link href={"/admin"}>
          <Button size={"sm"} variant={"ghost"}>
            Administracion
          </Button>
        </Link>
      )}

      <UserButton afterSwitchSessionUrl="/" />
    </div>
  );
}

export default NavbarRoutes;
