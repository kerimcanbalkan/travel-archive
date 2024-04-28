'use client'

import { ComposableMap, Geographies, Geography, ZoomableGroup } from "react-simple-maps"

const geoUrl = "https://cdn.jsdelivr.net/npm/world-atlas@2/countries-110m.json"

const handleClick = function (e: any) {
  console.log(e)
}

export default function MapChart() {
  return (
    <ComposableMap >
      <Geographies geography={geoUrl} onClick={(e) => {
        handleClick(e)
      }}>
        {({ geographies }) =>
          geographies.map((geo) => (
            <Geography key={geo.rsmKey} geography={geo} className="fill-light-accent" stroke="#000000" />
          ))
        }
      </Geographies>
    </ComposableMap>
  )
}
