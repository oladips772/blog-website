/** @format */
import React from "react";
import Link from "next/link";

function Header() {
  return (
    <div className="flex items-center h-[70px] justify-between border-b border-gray-200">
      <Link href="/" className="font-mono font-[600] cursor-pointer">
        My Blog website
      </Link>
      <div className="flex items-center space-x-3">
        <Link href="/create-blog">New Blog</Link>
        <Link href="/login">Sign in</Link>
        <Link href="/register">Sign up</Link>
      </div>
    </div>
  );
}

export default Header;
