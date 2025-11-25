"use client";

import { NeynarFeedList, useNeynarContext } from "@neynar/react";

export default function Home() {
  const { user } = useNeynarContext();

  return (
    <main className="flex min-h-screen p-16">
      <div className="ml-40 flex flex-col gap-6">
        <NeynarFeedList
          feedType={user?.fid ? "following" : "filter"}
          fid={user?.fid}
          filterType="global_trending"
        />
      </div>
    </main>
  );
}