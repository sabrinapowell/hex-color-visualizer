"use client";

import { useState } from "react";

const generateColorNames = (colors: string[]) => {
  const colorNames = ["primary", "secondary", "tertiary", "quaternary", "quinary", "senary"];
  const defaultColor = colors[0];

  return colorNames.reduce((acc: { [key: string]: string }, name, index) => {
    acc[`${name}_color`] = colors[index] || defaultColor;
    return acc;
  }, {});
};

// convert hex to rgb
const hexToRGBa = (color: string, opacity: number) => {
  const bigint = parseInt(color.replace("#", ""), 16);
  const r = (bigint >> 16) & 255;
  const g = (bigint >> 8) & 255;
  const b = bigint & 255;

  return `rgba(${r}, ${g}, ${b}, ${opacity})`
}

export default function DisplayComponents({ colors }: { colors: string[] }) {
  const namedColors = generateColorNames(colors);
  const [ userInput, setUserInput ] = useState("");
  
  return (
    <div className="w-full h-full flex flex-col gap-3 bg-brand-white shadow-lg">
      <div className="w-full h-[30px] flex items-center place-content-center text-white" style={{ backgroundColor: namedColors.primary_color }}>
        <div className="flex gap-2">
          <div className="cursor-pointer">Home</div>
          <div className="cursor-pointer">Menu</div>
          <div className="cursor-pointer">Blog</div>
        </div>
      </div>
      <div className="px-6 flex flex-col gap-3">
        <div>
          <div className="text-lg" style={{ color: namedColors.tertiary_color }}>Live Preview</div>
          <div className="text-sm" style={{ color: namedColors.primary_color, opacity: "50%" }}>A preview of your palette on a page.</div>
        </div>
        <div className="flex flex-col gap-2">
          <div className="text-base" style={{ color: namedColors.secondary_color }}>Body</div>
          <div>
            <input 
              className="text-sm py-1 px-3 w-full rounded border text-black border-gray-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2" 
              placeholder="Type something..." 
              value={userInput}
              onChange={(e) => setUserInput(e.target.value)}
              onFocus={(e) => e.target.style.boxShadow = `0 0 0 2px ${hexToRGBa(namedColors.primary_color, 0.5)}`}
              onBlur={(e) => e.target.style.boxShadow = "none"}
            />
          </div>
          <div className="flex justify-between">
            <button style={{ backgroundColor: namedColors.quaternary_color }} className="px-2 py-1 text-white rounded">Button 1</button>
            <button style={{ backgroundColor: namedColors.quinary_color }} className="px-2 py-1 text-white rounded">Button 2</button>
            <button style={{ backgroundColor: namedColors.senary_color }} className="px-2 py-1 text-white rounded">Button 3</button>
          </div>
        </div>
      </div>
      <div className="w-full h-[20px] text-sm flex items-center place-content-center text-white" style={{ backgroundColor: namedColors.secondary_color, opacity: "25%" }}>
        <div className="flex gap-2">
          ©{new Date().getFullYear()} Visualizer
        </div>
      </div>
    </div>
  );
}