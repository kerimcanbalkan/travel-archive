'use client'

import { useState } from "react";
import WorldMap from "./ui/world-map";
import { TransformWrapper, TransformComponent } from "react-zoom-pan-pinch";
import SideBar from "./ui/sidebar";

export default function Home() {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
    console.log(isOpen);
  }


  return (
    <div className="container">
      <SideBar isOpen={isOpen} toggleSidebar={toggleSidebar} />
      <TransformWrapper>
        <TransformComponent>
          <WorldMap toggleSidebar={toggleSidebar} />
        </TransformComponent>
      </TransformWrapper>
    </div>
  )
}
