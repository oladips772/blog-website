import React from 'react'

function page() {
  return (
    <div className="flex items-center justify-center h-[100vh]">
      <div className="w-[500px] p-4 rounded border border-gray-400">
        <h1 className="mb-2 font-[500]">Create your account and start blogging</h1>
        <input
          type="text"
          placeholder="Email"
          className="h-[45px] w-full border border-gray-400 rounded p-2"
        />
        <input
          type="password"
          placeholder="Password"
          className="h-[45px] w-full border border-gray-400 rounded p-2 my-2"
        />
        <button className="flex items-center justify-center h-[45px] w-full bg-green-600 text-white font-[600] text-[13.5px] rounded mt-3">
          REGISTER
        </button>
      </div>
    </div>
  );
}

export default page