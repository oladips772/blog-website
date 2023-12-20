/** @format */
"use client";
import React from "react";
import blogs from "@/lib/blogs";
import { useParams } from "next/navigation";

function page() {
  const router = useParams();
  const { id } = router;
  const blog = blogs.find((blog) => blog.id === id);

  return (
    <div>
      blog details <h1>{id}</h1>
      <span>{blog.title}</span>
    </div>
  );
}

export default page;
