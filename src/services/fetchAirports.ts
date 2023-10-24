const AIRPORTS_API_BASE_URL = "https://raw.githubusercontent.com/mwgg/Airports/master/airports.json";

export async function fetchAirports() {
  const response = await fetch(AIRPORTS_API_BASE_URL);
  const airports = await response.json();
  return airports;  
}

export async function getAirportsNames() {
  const airports = await fetchAirports();
  const airportsArr = Object.keys(airports).map((key) => {
    const airport = airports[key];

    return {
      icao: key,
      name: airport.name,
      city: airport.city,
    };
  });

  return airportsArr;
}

export async function getAirportByIcao(icao: string) {
  const airports = await fetchAirports();
  const airport = airports[icao];

  return airport;
}