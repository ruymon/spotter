"use client";

import { cn } from "@/lib/utils";
import { useEffect, useState } from "react";

interface OverlayClockProps {
  className?: string;
};

export function OverlayClock({className}: OverlayClockProps) {
  const [zuluTime, setZuluTime] = useState(getZuluTime());

  function getZuluTime() {
    const now = new Date();
    const hours = now.getUTCHours().toString().padStart(2, "0");
    const minutes = now.getUTCMinutes().toString().padStart(2, "0");
    const seconds = now.getUTCSeconds().toString().padStart(2, "0");

    return `${hours}:${minutes}:${seconds}`;
  }

  useEffect(() => {
    const interval = setInterval(() => {
      setZuluTime(getZuluTime());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex items-end">
      <span className={cn('leading-none', className)}>{zuluTime}</span>
      <span className="h-full">UTC</span>
    </div>
  );
};
