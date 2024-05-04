'use client'

import { useState } from "react";
import WorldMap from "./ui/world-map";
import { TransformWrapper, TransformComponent } from "react-zoom-pan-pinch";
import SideBar from "./ui/sidebar";

export default function Home() {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [countryName, setCountryName] = useState<string>("");

  const toggleSidebar = (name: string) => {
    setIsOpen(!isOpen);
    setCountryName(name)
  }


  return (
    <div className="container">
      <SideBar isOpen={isOpen} toggleSidebar={toggleSidebar} countryName={countryName} />
      <TransformWrapper>
        <TransformComponent>
          <WorldMap toggleSidebar={toggleSidebar} />
        </TransformComponent>
      </TransformWrapper>
    </div>
  )
}
