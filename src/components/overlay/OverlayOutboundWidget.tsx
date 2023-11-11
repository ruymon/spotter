"use client";

import { FIVE_MINUTES_IN_MILLISECONDS } from "@/constants/date";
import { getVatsimAerodromeOutboundCount } from "@/services/fetchAerodromeStatistics";
import { useEffect, useState } from "react";
import { OverlayAirportMovementStatistics } from "./OverlayAirportMovementStatistics";

interface OverlayOutboundWidgetProps {
  icao: string;
};

const AERODROME_OUTBOUND_REFETCH_TIMEOUT = FIVE_MINUTES_IN_MILLISECONDS;

export function OverlayOutboundWidget({ icao }: OverlayOutboundWidgetProps) {
  const [ count, setCount ] = useState<number | null >(null);

  useEffect(() => {
    (async () => {
      const count = await getVatsimAerodromeOutboundCount(icao);
      setCount(count);
    })();
  }, [icao]);

  useEffect(() => {
    const interval = setInterval(async () => {
      const count = await getVatsimAerodromeOutboundCount(icao);
      setCount(count);
    }, AERODROME_OUTBOUND_REFETCH_TIMEOUT);

    return () => clearInterval(interval);

  }, [icao]);

  return <OverlayAirportMovementStatistics count={count} variant="arrivals" />
};
