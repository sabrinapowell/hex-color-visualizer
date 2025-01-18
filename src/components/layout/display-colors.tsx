"use client";

import clsx from "clsx";
import { useEffect, useState } from "react";

function ShowColor({ color }: { color: string }) {
  const [ isCopied, setIsCopied ] = useState(false);

  // copy color to clipboard
  const handleCopyColor = () => {
    navigator.clipboard.writeText(color);
    setIsCopied(true);
  };

  // show copied message
  useEffect(() => {
    if (isCopied) {
      setTimeout(() => {
        setIsCopied(false);
      }, 2000);
    }
  }, [isCopied]);

  return (
    <div className={clsx("w-[100px] h-[100px] overflow-clip rounded-full flex place-content-center items-end")} style={{ backgroundColor: color }}>
      <div className="text-white w-full text-center text-xs bg-gray-500/50 px-2 pt-1 pb-[6px] cursor-pointer" onClick={handleCopyColor} title="Copy to Clipboard">
        {
          isCopied ? "Copied!" : color
        }
      </div>
    </div>
  );
}

export default function DisplayColors({ colors }: { colors: string[] }) {
  return (
    <div className="flex flex-wrap gap-3 min-w-[324px] max-w-[324px]">
      {
        colors.map((color, index) => (
          <ShowColor key={index} color={color} />
        ))
      }
    </div>
  );
}
