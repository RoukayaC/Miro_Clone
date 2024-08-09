"use client";

import { useOthersMapped } from "@/liveblocks.config";
import { shallow } from "@liveblocks/client";
import { memo } from "react";
import { Cursor } from "./cursor";
import { useOthersConnectionIds } from "@liveblocks/react";

const Cursors = () => {
  const ids = useOthersConnectionIds();

  return (
    <>
      {ids.map((id) => (
        <Cursor 
        key={id} 
        connectionId={id} />
      ))}
    </>
  );
};

export const CursorsPresence = memo(() => {
  return (
    <>
      {/* TO DO : dRAFT pENCIL */}
      <Cursors />
    </>
  );
});

CursorsPresence.displayName = "CursorsPresence";
