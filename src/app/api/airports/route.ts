import { getAirportsNames } from "@/services/fetchAirports";
import { NextRequest, NextResponse } from "next/server";

const AIRPORTS_LIMIT = 4;

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const airportQuery = searchParams.get("search");

  const airports = await getAirportsNames();

  if (airportQuery) {
    const filteredAirports = airports.filter((airport) => {
      return airport.label.toLowerCase().includes(airportQuery.toLowerCase());
    });

    return NextResponse.json({
      success: true,
      airports: filteredAirports.slice(0, AIRPORTS_LIMIT),
    });
  }

  return NextResponse.json({
    success: true,
    airports: airports.slice(0, AIRPORTS_LIMIT),
  });

  
}