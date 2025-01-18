"use client";

import ColorRow from "@/components/layout/color-row";
import { useState } from "react";

export default function DisplayRows() {
  const palette_1 = ["#355C7D", "#6C5B7B", "#F8B195", "#C06C84", "#99B898", "#F67280" ];
  const palette_2 = ["#33B5E5", "#C70039", "#FFC300", "#FF5733", "#8E44AD", "#28B463" ];

  const [ firstPalette, setFirstPalette ] = useState(palette_1);
  const [ secondPalette, setSecondPalette ] = useState(palette_2);
  const [ showPalette, setShowPalette ] = useState(false);

  return (
    <div className="flex flex-col gap-6">
      <ColorRow colors={firstPalette} setColors={setFirstPalette} />
      <div>
        {
          showPalette ? 
            <div className="flex flex-col gap-6">
              <ColorRow colors={secondPalette} setColors={setSecondPalette} />
              <div className="flex place-content-center">
                <button className="px-3 py-2 text-white bg-brand-accent hover:bg-brand-main rounded" onClick={() => setShowPalette(false)}>Hide Palette</button>
              </div>
            </div> :
            <div className="flex place-content-center">
              <button className="px-3 py-2 text-white bg-brand-accent hover:bg-brand-main rounded" onClick={() => setShowPalette(true)}>Compare Palettes</button>
            </div>
        }
      </div>
    </div>
  );
}
