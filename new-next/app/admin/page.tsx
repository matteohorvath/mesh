"use client";

import { useEffect } from "react";

export default function AdminPage() {
  useEffect(() => {
    // Initialize CMS only on client side
    if (typeof window !== "undefined") {
      import("decap-cms-app").then((CMS) => {
        CMS.default.init();
      });
    }
  }, []);

  return (
    <div style={{ height: "100vh", width: "100vw" }}>
      <div id="nc-root"></div>
    </div>
  );
}
