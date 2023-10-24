"use client";

import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { getAirportsNames } from "@/services/fetchAirports";
import { useEffect, useState } from "react";
import { FormItemHeader } from "./FormItemHeader";
import { FormStepHeader } from "./FormStepHeader";

interface LocationDetailsStepProps {};

type AirportName = {
  icao: string;
  name: string;
  city: string;
}

export function LocationDetailsStep({}: LocationDetailsStepProps) {
  const [airportsNames, setAirportsNames] = useState<AirportName[]>([]);

  useEffect(() => {
    getAirportsNames().then(setAirportsNames);
  }, []);

  console.log(airportsNames);



  return (
    <>
      <FormStepHeader title="Aeródromos e localidades" description="Escolha as localidades para exibir" />

      <div className="flex flex-col gap-8">
        <div className="flex flex-col gap-4">
          <FormItemHeader
            title="Localidade"
            description="Código ICAO do aeródromo, com base no código ICAO, o sistema irá exibir as informações do aeródromo ou localidade (METAR / TAF)."
          />

          <Select>
            <SelectTrigger>
              <SelectValue placeholder="Selecione o aeródromo" />
            </SelectTrigger>
            <SelectContent>
              {
                airportsNames.map((airport: AirportName) => (
                  <SelectItem key={airport.icao} value={airport.icao}>
                    {airport.name}
                  </SelectItem>
                ))
              }
            </SelectContent>
          </Select>
        </div>
      </div>
    </>
  );
};
