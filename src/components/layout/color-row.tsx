import ColorInput from "@/components/layout/color-input";
import DisplayColors from "@/components/layout/display-colors";
import DisplayComponents from "@/components/layout/display-components";

export default function ColorRow({ colors, setColors }: { colors: string[], setColors: React.Dispatch<React.SetStateAction<string[]>> }) {
  return (
    <div className="flex items-center justify-between h-[240px]">
      <ColorInput colors={colors} setColors={setColors} />
      <DisplayColors colors={colors} />
      <div className="w-[300px]">
        <DisplayComponents colors={colors} />
      </div>
    </div>
  );
}