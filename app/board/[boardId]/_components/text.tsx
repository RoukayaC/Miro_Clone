import { cn, colorToCss } from "@/lib/utils";
import { useMutation } from "@/liveblocks.config";
import { TextLayer } from "@/types/canvas";
import { Kalam } from "next/font/google";

const font = Kalam({
  subsets: ["latin"],
  weight: ["400"],
});

interface TextProps {
  id: string;
  layer: TextLayer;
  onPointerDown: (e: React.PointerEvent, id: string) => void;
  selectionColor?: string;
}

const calculateFontSize = (width: number, height: number) => {
  const maxFontSize = 96;
  const scaleFactor = 0.5;
  const fontSizeBasedOnHeight = height * scaleFactor;
  const fontSizeBasedOnWidth = width * scaleFactor;

  return Math.min(maxFontSize, fontSizeBasedOnHeight, fontSizeBasedOnWidth);
};

export const Text = ({
  id,
  layer,
  onPointerDown,
  selectionColor,
}: TextProps) => {
  const { x, y, width, height, fill, value } = layer;

  const updateValue = useMutation(({ storage }, newValue: string) => {
    const liveLayers = storage.get("layers");

    liveLayers.get(id)?.set("value", newValue);
  }, []);



  return (
    <foreignObject
      x={x}
      y={y}
      height={height}
      width={width}
      onPointerDown={(e) => onPointerDown(e, id)}
      style={{
        outline: selectionColor ? `1px solid ${selectionColor}` : "none",
      }}
    >
      
    </foreignObject>
  );
};