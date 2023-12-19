/** @format */
import React from "react";
import Link from "next/link";

function Header() {
  return (
    <div className="flex items-center max-w-[1200px] mx-auto bg-red-500 h-[50px]">
      <h1>My Blog website</h1>
      <div className="flex items-center space-x-2"></div>
    </div>
  );
}

export default Header;
