/** @format */
"use client"
import React, { useState } from "react";

function page() {
  const [title, setTitle] = useState("");
  const [text, setText] = useState("");
  const [author, setAuthor] = useState("");

  return (
    <div className="max-w-[800px] mx-auto mt-8">
      <h1 className="font-[500]">Create new blog</h1>
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
      <button className="flex items-center justify-center h-[45px] w-full bg-green-600 text-white font-[600] text-[13.5px] rounded mt-3">
        CREATE
      </button>
    </div>
  );
}

export default page;
