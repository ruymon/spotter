const METAR_BASE_URL = 'https://metar.vatsim.net/';

export async function fetchMetar(icao: string): Promise<string> {
  const metar =  fetch(`${METAR_BASE_URL}${icao}`).then((response) => response.text())
  return metar;
};