"use client";

import { FIVE_MINUTES_IN_MILLISECONDS } from "@/constants/date";
import { fetchMetar } from "@/services/fetchMetar";
import { useEffect, useState } from "react";
import { Card } from "../ui/card";
import { Skeleton } from "../ui/skeleton";

interface OverlayMetarWidgetProps {
  icao: string;
};

const METAR_REFETCH_TIMEOUT = FIVE_MINUTES_IN_MILLISECONDS;

export function OverlayMetarWidget({ icao }: OverlayMetarWidgetProps) {
  const [metar, setMetar] = useState<string>('');

  useEffect(() => {
    (async () => {
      const metar = await fetchMetar(icao);
      setMetar(metar);
    })();
  }, [icao]);

  useEffect(() => {
    const interval = setInterval(async () => {
      const metar = await fetchMetar(icao);
      setMetar(metar);
    }, METAR_REFETCH_TIMEOUT);

    return () => clearInterval(interval);
  }, [icao]);

  return (
    <Card className="p-3 pt-6 relative">
      <span className="absolute px-2 rounded-b-sm uppercase text-xs font-bold bg-secondary-foreground text-secondary top-0 left-3">metar</span>
      {metar ? (
        <span className="font-mono text-muted-foreground font-semibold tracking-wide">{metar}</span>
      ) : (
        <div className="flex flex-col gap-2 mt-1.5">
          <Skeleton className="w-full h-4" />
          <Skeleton className="w-3/4 h-4" />
        </div>
      )}
    </Card>
  );
};
