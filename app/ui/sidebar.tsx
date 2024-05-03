'use client'

import { IoIosCloseCircleOutline } from "react-icons/io";

export default function SideBar() {

  return (
    <div id="sidebar" className="w-2/5 h-lvh bg-white fixed top-0 left-0 z-50 p-10 rounded-md hidden">
      <div className="container flex justify-end">
        <button className="" onClick={() => {
          document.getElementById("sidebar")?.classList.add("hidden")
        }}><IoIosCloseCircleOutline className="fill-light-accent text-xl" /></button>
      </div>
      <h1 className="">[Country name]</h1>
    </div>
  );
}
export function toggleSidebar() {
  const sidebar = document.getElementById("sidebar");
  sidebar?.classList.remove("hidden");
}
