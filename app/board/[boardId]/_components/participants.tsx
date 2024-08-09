"use client";
import { useOthers, useSelf } from "@liveblocks/react";
import { UseAvatar } from "./user-avatar";
import { connectionIdToColor } from "@/lib/utils";

const MAX_SHOWN_USER = 2;

export const Participants = () => {
  const users = useOthers();
  const currentUser = useSelf();
  const hasMoreUsers = users.length > MAX_SHOWN_USER;
  return (
    <div className="absolute h-12 top-2 right-2 bg-white rounded-md p-flex items-center shadow-md">
      <div className="flex gap-x-2">
        {users.slice(0, MAX_SHOWN_USER).map(({ connectionId, info }) => {
          return (
            <UseAvatar
              borderColor={connectionIdToColor(connectionId)}
              key={connectionId}
              src={info?.picture}
              name={info?.name}
              fallback={info?.name?.[0] || "T"}
            />
          );
        })}

        {currentUser && (
          <UseAvatar
            borderColor={connectionIdToColor(currentUser.connectionId)}
            src={currentUser.info?.picture}
            name={`${currentUser.info?.name} (You)`}
            fallback={currentUser.info?.name?.[0]}
          />
        )}

        {hasMoreUsers && (
          <UseAvatar
            name={`${users.length - MAX_SHOWN_USER} more`}
            fallback={`+${users.length - MAX_SHOWN_USER} `}
          />
        )}
      </div>
    </div>
  );
};

export const ParticipantsSkeleton = () => {
  return (
    <div className="absolute h-12 top-2 right-2 bg-white rounded-md p-3 flex items-center shadow-md w-[100px]" />
  );
};
