"use client";

import { FIVE_MINUTES_IN_MILLISECONDS } from "@/constants/date";
import { getVatsimAerodromeInboundCount } from "@/services/fetchAerodromeStatistics";
import { useEffect, useState } from "react";
import { OverlayAirportMovementStatistics } from "./OverlayAirportMovementStatistics";

interface OverlayInboundWidgetProps {
  icao: string;
};

const AERODROME_INBOUND_REFETCH_TIMEOUT = FIVE_MINUTES_IN_MILLISECONDS;

export function OverlayInboundWidget({ icao }: OverlayInboundWidgetProps) {
  const [ count, setCount ] = useState<number | null>(null);

  useEffect(() => {
    (async () => {
      const count = await getVatsimAerodromeInboundCount(icao);
      setCount(count);
    })();
  }, [icao]);

  useEffect(() => {
    const interval = setInterval(async () => {
      const count = await getVatsimAerodromeInboundCount(icao);
      setCount(count);
    }, AERODROME_INBOUND_REFETCH_TIMEOUT);

    return () => clearInterval(interval);

  }, [icao]);

  return <OverlayAirportMovementStatistics count={count} variant="departures" />
};
