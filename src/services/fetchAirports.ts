import { Airport } from "@/types";

const AIRPORTS_API_BASE_URL = "https://raw.githubusercontent.com/mwgg/Airports/master/airports.json";

export async function fetchAirports() {
  const response = await fetch(AIRPORTS_API_BASE_URL, {
    cache: "no-cache"
  });
  const airports: Airport[] = await response.json();
  return airports;
}

function sanitizeAirportsObjectToNameArray(airports: Airport[]) {
  const airportsArr = Object.keys(airports).map((icao) => {
    return {
      icao: airports[icao as any].icao,
      label: `${icao} - ${airports[icao as any].name} - ${airports[icao as any].city}`,
    };
  });

  return airportsArr;
}

export async function getAirportsNames() {
  const airports = await fetchAirports();
  const airportsArr = sanitizeAirportsObjectToNameArray(airports);
  return airportsArr;
}