"use client";

import { usePathname } from "next/navigation";
import { useEffect } from "react";

type GtagConfig = {
  page_path?: string;
};

type Gtag = (command: "config", targetId: string, config?: GtagConfig) => void;

declare global {
  interface Window {
    gtag?: Gtag;
  }
}

export default function Analytics({
  measurementId,
}: {
  measurementId: string;
}) {
  const pathname = usePathname();

  useEffect(() => {
    window.gtag?.("config", measurementId, { page_path: pathname });
  }, [measurementId, pathname]);

  return null;
}
