/** @format */
"use client";
import { useState } from "react";
import blogs from "@/lib/blogs";
import { useParams } from "next/navigation";

function page() {
  const router = useParams();
  const { id } = router;
  const blog = blogs.find((blog) => blog.id === id);
  const [title, setTitle] = useState(blog.title);
  const [text, setText] = useState(blog.text);
  const [author, setAuthor] = useState(blog.author);

  return (
    <div className="max-w-[800px] mx-auto mt-8">
      <h1 className="font-[500]">Blog Details</h1>
      <div className="mt-2">
        <label htmlFor="" className="text-sm">
          Title
        </label>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="h-[45px] border border-gray-300 p-2 rounded w-full text-[14.5px]"
        />
      </div>
      <div className="mt-3">
        <label htmlFor="" className="text-sm">
          Blog text
        </label>
        <textarea
          type="text"
          value={text}
          onChange={(e) => setText(e.target.value)}
          className="border border-gray-300 p-2 rounded w-full text-[14.5px] h-[100px] resize-none"
        ></textarea>
      </div>
      <div className="mt-3">
        <label htmlFor="" className="text-sm">
          Author
        </label>
        <input
          type="text"
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
          className="h-[45px] border border-gray-300 p-2 rounded w-full text-[14.5px]"
        />
      </div>
      {/* button div */}
      <div className="mt-4">
        <button className="flex items-center justify-center h-[45px] w-full bg-[crimson] mb-2 text-white font-[600] text-[13.5px] rounded">
          DELETE
        </button>
        <button className="flex items-center justify-center h-[45px] w-full bg-green-600 text-white font-[600] text-[13.5px] rounded">
          UPDATE
        </button>
      </div>
    </div>
  );
}

export default page;
