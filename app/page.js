/** @format */
"use client";
import Link from "next/link";
import blogs from "@/lib/blogs";
import { useState } from "react";

export default function Home() {
  const [blogList, setBlogList] = useState(blogs);

  const deleteBlog = (id) => {
    const updatedBlogs = blogList.filter((blog) => blog.id !== id);
    setBlogList(updatedBlogs);
  };
  return (
    <div className="mt-8 max-w-[900px] mx-auto grid grid-cols-2 gap-4">
      {blogList.map((blog) => (
        <div
          key={blog.id}
          className="p-4 rounded shadow flex flex-col items-start"
        >
          <h1 className="font-[500]">{blog.title}</h1>
          <span className="text-gray-700 my-3">{blog.text}</span>
          <div className="flex items-center justify-between w-full">
            <span>{blog.author}</span>
            <div className="flex items-center space-x-3">
              <button
                className="bg-[crimson] text-white px-3 py-1 rounded uppercase text-[12px] font-[600]"
                onClick={() => deleteBlog(blog.id)}
              >
                Delete
              </button>
              <Link
                href={`/blogs/${blog.id}`}
                className="bg-green-600 text-white px-3 py-1 rounded uppercase text-[12px] font-[600]"
              >
                View
              </Link>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
