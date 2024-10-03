import React from "react";

function layout({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <div className="flex justify-center items-center h-screen">{children}</div>
    </div>
  );
}

export default layout;
