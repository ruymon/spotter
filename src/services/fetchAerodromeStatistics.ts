const VATSIM_LIVE_DATA_URL = "https://data.vatsim.net/v3/vatsim-data.json";

export async function fetchVatsimLiveData() {
  const response = await fetch(VATSIM_LIVE_DATA_URL, {
    cache: "no-cache",
  });

  const data = await response.json();
  return data;
}

export async function getVatsimAerodromeInboundCount(icao: string) {
  const liveData = await fetchVatsimLiveData();
  const inboundFlightsCount = liveData.pilots
    .map((flight: any) => flight.flight_plan)
    .filter((flightPlan: any) => flightPlan?.arrival === icao.toUpperCase()).length;

  return inboundFlightsCount;
}

export async function getVatsimAerodromeOutboundCount(icao: string) {
  const liveData = await fetchVatsimLiveData();
  const outboundFlightsCount = liveData.pilots
    .map((flight: any) => flight.flight_plan)
    .filter((flightPlan: any) => flightPlan?.departure === icao.toUpperCase()).length;

  return outboundFlightsCount;
}