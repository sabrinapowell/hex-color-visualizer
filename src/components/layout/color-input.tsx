import { DragDropContext, Draggable, Droppable, DropResult } from "@hello-pangea/dnd";
import { Trash2Icon } from "lucide-react";
import { useState } from "react";

import clsx from "clsx";

export default function ColorInput({ colors, setColors }: { colors: string[], setColors: React.Dispatch<React.SetStateAction<string[]>> }) {
  const [ newColor, setNewColor ] = useState<string>("");
  const [ showError, setShowError ] = useState<boolean>(false);

  // format the color input value
  const formatColor = (color: string) => {
    const hexColor = color.replaceAll("#", "").toUpperCase();
    return `#${hexColor}`;
  };

  // check if the color is valid
  const validateColor = (color: string) => {
    const validColor = /^#[0-9A-Fa-f]{6}$/i.test(color) ? true : false;
    return validColor;
  };

  // validate and set the new color
  const handleNewColor = (color: string) => {
    if (color.length === 0) {
      setShowError(false);
    } else {
      if (validateColor(color)) {
        setShowError(false);
      } else {
        setShowError(true);
      }
    }
    
    setNewColor(color);
  };

  const onDragEnd = (result: DropResult) => {
    if (!result.destination) return;

    const reorderedColors = Array.from(colors);
    const [movedItem] = reorderedColors.splice(result.source.index, 1);
    reorderedColors.splice(result.destination.index, 0, movedItem);

    setColors(reorderedColors);
  };

  return (
    <div className="flex flex-col gap-3 text-brand-gray">
      <div className={clsx("flex items-center text-sm border-2 bg-white rounded-md overflow-clip", showError ? "border-brand-error" : "border-brand-gray")}>
        <div className="flex gap-1 px-2 text-sm">
          <span className="font-semibold">#</span>
          <input
            className="w-[60px] focus-visible:outline-none"
            type="text"
            placeholder="1E3A5F"
            value={newColor.substring(1)}
            onChange={(e) => handleNewColor(formatColor(e.target.value))}
          />
        </div>
        <button 
          className={clsx("px-2 text-sm text-white", showError ? "bg-brand-error cursor-not-allowed" : "bg-brand-main hover:bg-brand-hover-secondary disabled:cursor-not-allowed disabled:bg-brand-gray/80")}
          disabled={showError || newColor.length === 0 || colors.length === 6}
          onClick={() => { setColors([...colors, newColor]); setNewColor(""); }}
          title={showError ? "Invalid Color" : newColor.length === 0 ? "Empty Input" : colors.length === 6 ? "Max Colors Reached" : "Add Color"}
        >
          ADD
        </button>
      </div>
      <DragDropContext onDragEnd={onDragEnd}>
        <Droppable droppableId="colors">
          {(provided) => (
            <div
              {...provided.droppableProps}
              ref={provided.innerRef}
              className="flex flex-col justify-between gap-2"
            >
              {
                colors.map((color, idx) => (
                  <Draggable key={`${color}-${idx}`} draggableId={`${color}-${idx}`} index={idx}>
                    {(provided) => (
                      <div
                        ref={provided.innerRef}
                        {...provided.draggableProps}
                        className="flex items-center gap-2 pr-2 text-sm border-2 border-brand-gray rounded-md"
                      >
                        <span {...provided.dragHandleProps} className="px-2 text-sm text-white bg-brand-gray cursor-grab">☰</span>
                        <span className="w-[60px]">{color}</span>
                        <button
                          className={clsx("place-content-end text-sm hover:text-brand-error", colors.length === 1 ? "cursor-not-allowed" : "cursor-pointer")}
                          onClick={() => setColors(colors.filter((_, i) => i !== idx))}
                          disabled={colors.length === 1}
                        >
                          <Trash2Icon className="h-4 w-4" />
                        </button>
                      </div>
                    )}
                  </Draggable>
                ))
              }
              {provided.placeholder}
            </div>
          )}
        </Droppable>
      </DragDropContext>
    </div>
  );
}
