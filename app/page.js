/** @format */
"use client";
import { useEffect } from "react";
import { BarLoader } from "react-spinners";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();

  useEffect(() => {
    setTimeout(() => {
      router.push("/dashboard");
    }, 2000);
  }, []);

  return (
    <div className="flex flex-col items-center justify-center h-[100vh]">
      <BarLoader color="#000" height={4} />
      <span className="text-sm text-gray-600">Setting up dashboard..</span>
    </div>
  );
}
