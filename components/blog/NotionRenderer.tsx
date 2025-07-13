"use client";

import { NotionRenderer as ReactNotionRenderer } from "react-notion-x";
import dynamic from "next/dynamic";
import { useState, useEffect } from "react";

// Import CSS for notion rendering
import "react-notion-x/src/styles.css";

const Code = dynamic(() =>
  import("react-notion-x/build/third-party/code").then(async (m) => {
    return m.Code;
  }),
);

interface NotionRendererProps {
  recordMap: any; // eslint-disable-line @typescript-eslint/no-explicit-any
  fullWidth?: boolean;
  className?: string;
}

export default function NotionRenderer({
  recordMap,
  fullWidth = false,
  className,
}: NotionRendererProps) {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient || !recordMap) {
    return (
      <div className="animate-pulse">
        <div className="h-4 bg-gray-200 rounded w-3/4 mb-4"></div>
        <div className="h-4 bg-gray-200 rounded w-1/2 mb-4"></div>
        <div className="h-4 bg-gray-200 rounded w-5/6 mb-4"></div>
      </div>
    );
  }

  return (
    <div className={`notion-renderer ${className || ""}`}>
      <ReactNotionRenderer
        recordMap={recordMap}
        fullPage={fullWidth}
        darkMode={true}
        disableHeader={true}
        components={{
          Code,
        }}
        className="notion-page"
      />
    </div>
  );
}
