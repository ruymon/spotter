"use client"

import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import { useDebounce } from "@/hooks/useDebounce";

import { Bird, TowerControl } from "lucide-react";
import { ChangeEvent, useEffect, useState } from "react";
import { AirportOptionButton } from "./AirportOptionButton";
import { AirportOptionSkeleton } from "./AirportOptionSkeleton";

const INPUT_DEBOUNCE_TIME = 250;

export type AirportValue = {
  icao: string;
  label: string;
};

interface AirportsNamesComboBoxProps {
  onChange: (value: AirportValue | null) => void;
  onBlur: () => void;
  value: AirportValue | null;
}

export function AirportsSearchInput({ onChange, onBlur, value }: AirportsNamesComboBoxProps) {
  const [airportsNames, setAirportsNames] = useState<{ icao: string, label: string }[]>([]);
  const [inputValue, setInputValue] = useState("");
  const [isFetching, setIsFetching] = useState(true);
  const { debouncedValue: debouncedInputValue, loading: isDebounceLoading } = useDebounce<string>(inputValue, INPUT_DEBOUNCE_TIME);


  function fetchAirportsNames(search?: string) {
    fetch(`/api/airports?search=${search}`)
      .then(res => res.json())
      .then(data => {
        setAirportsNames(data.airports)
        setIsFetching(false)
      })
  }

  useEffect(() => {
    fetchAirportsNames()
  }, []);

  useEffect(() => {
    fetchAirportsNames(debouncedInputValue)
  }, [debouncedInputValue])

  function handleInputChange(event: ChangeEvent<HTMLInputElement>) {
    setInputValue(event.target.value)
  }

  function handleAirportNameClick(airport: AirportValue) {
    setInputValue("")
    onChange(airport)
    onBlur()
  }

  return (
    <div className="flex flex-col gap-6">
      <Input
        placeholder="Pesquise pelo código ICAO, nome ou cidade do aeródromo."
        value={inputValue}
        onChange={handleInputChange}
      />

      {value && (
        <div className="flex flex-col gap-3">
          <span className="text-secondary-foreground font-medium">Aeródromo selecionado:</span>

          <div className="flex gap-3 items-center w-full rounded-md border border-input bg-background px-3 py-2">
            <TowerControl className="text-muted-foreground" size={20} />
            <div className="flex flex-col w-full gap-0.5" >
              <span className="font-semibold text-secondary-foreground">{value.icao}</span>
              <span className="text-xs text-muted-foreground">{value.label}</span>
            </div>
          </div>

          <Separator className="mt-3" />
        </div>
      )}

      <div className="flex flex-col gap-3">
        {isDebounceLoading || isFetching ? (
          <>
            <AirportOptionSkeleton />
            <AirportOptionSkeleton />
            <AirportOptionSkeleton />
          </>
        ) : airportsNames.length === 0 ? (
          <div className="flex flex-col w-full items-center justify-center gap-4 text-muted-foreground mt-4">
            <Bird className="w-24 aspect-square shrink-0" />
            <div className="flex flex-col gap-1 items-center">
              <span className="text-secondary-foreground">Nenhum resultado encontrado.</span>
              <span className="text-sm">Tente novamente ou mude os termos da pesquisa</span>
            </div>
          </div>
        ) :
          airportsNames.map((airport) =>
            <AirportOptionButton key={airport.icao} onClick={() => handleAirportNameClick(airport)} airport={airport} />
          )
        }
      </div>
    </div>
  )
}

