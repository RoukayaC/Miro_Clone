"use client";
import { memo } from "react";
import { useSelf, useStorage } from "@/liveblocks.config";
import { LayerType, Side, XYWH } from "@/types/canvas";

interface SelectionBoxProps {
  onResizeHandlePointerDown: (corner: Side, initialBounds: XYWH) => void;
}

const HANDLE_WIDTH = 8;

export const SelectionBox = memo(({
    onResizeHandlePointerDown,
}:SelectionBoxProps) => {
    const soleLayerId= useSelf((me) => 
        me.presence.selection.length === 1 ? me.presence.selection[0] : null 
);

const isShowingHandlers = useStorage((root) => 
 soleLayerId && root.layers.get(soleLayerId)?.type !== LayerType.Path
)

    return (
        <div>

        </div>
    );
});
 



SelectionBox.displayName = "SelectionBox";