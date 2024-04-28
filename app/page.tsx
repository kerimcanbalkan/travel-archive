'use client'

import WorldMap from "./ui/world-map";
import { TransformWrapper, TransformComponent } from "react-zoom-pan-pinch";


export default function Home() {
  return (
    <TransformWrapper>
      <TransformComponent>
        <WorldMap />
      </TransformComponent>
    </TransformWrapper>
  )
}
