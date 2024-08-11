"use client";

import { Hint } from "@/components/hint";
import { Button } from "@/components/ui/button";
import { useMutation, useSelf } from "@/liveblocks.config";
import { Camera, Color } from "@/types/canvas";
import { BringToFront, SendToBack, Trash2 } from "lucide-react";
import { memo } from "react";

interface SelectionToolsProps {
  camera: Camera;
  setLastUsedColor: (color: Color) => void;

};


export const SelectionTools = memo(({
  camera,
  setLastUsedColor,
}:SelectionToolsProps) => {
  return (
    <div>
      SelectionTools
    </div>
  )
});
