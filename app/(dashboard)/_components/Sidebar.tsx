import Logo from "@/components/ui/Logo";
import React from "react";

function Sidebar() {
  return (
    <div className="h-full border-r flex flex-col overflow-y-auto bg-white shadow-sm">
      <div className="p-6">
        <Logo />
      </div>
      <div>CategoryButton</div>
    </div>
  );
}

export default Sidebar;
