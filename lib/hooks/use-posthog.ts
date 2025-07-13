"use client";

import { useEffect, useState } from "react";
import { posthog } from "@/lib/posthog";

export function usePostHog() {
  const [isInitialized, setIsInitialized] = useState(false);

  useEffect(() => {
    if (typeof window !== "undefined" && posthog.__loaded) {
      setIsInitialized(true);
    }
  }, []);

  const capture = (event: string, properties?: Record<string, any>) => {
    if (isInitialized) {
      posthog.capture(event, properties);
    }
  };

  const identify = (distinctId: string, properties?: Record<string, any>) => {
    if (isInitialized) {
      posthog.identify(distinctId, properties);
    }
  };

  const reset = () => {
    if (isInitialized) {
      posthog.reset();
    }
  };

  return {
    capture,
    identify,
    reset,
    isInitialized,
    posthog: isInitialized ? posthog : null,
  };
}
