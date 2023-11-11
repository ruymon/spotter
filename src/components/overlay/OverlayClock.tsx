"use client";

import { cn } from "@/lib/utils";
import { useEffect, useState } from "react";
import { Skeleton } from "../ui/skeleton";

interface OverlayClockProps {
  className?: string;
};

function getZuluTime() {
  const now = new Date();
  const hours = now.getUTCHours().toString().padStart(2, "0");
  const minutes = now.getUTCMinutes().toString().padStart(2, "0");
  const seconds = now.getUTCSeconds().toString().padStart(2, "0");

  return `${hours}:${minutes}:${seconds}`;
}


export function OverlayClock({ className }: OverlayClockProps) {
  const [isMounted, setIsMounted] = useState(false)
  const [zuluTime, setZuluTime] = useState(getZuluTime());

  useEffect(() => {
    setIsMounted(true)
  }, [])

  useEffect(() => {
    const interval = setInterval(() => {
      setZuluTime(getZuluTime());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  if (!isMounted) {
    return <Skeleton className="w-3/4 h-6 bg-white" />
  }


  return (
    <div className="flex items-end">
      <span className={cn('leading-none', className)}>{zuluTime}</span>
      <span className="h-full">UTC</span>
    </div>
  );
};
