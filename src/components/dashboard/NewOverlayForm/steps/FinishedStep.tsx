"use client";

import { Button } from "@/components/ui/button";
import { useCopyToClipboard } from "@/hooks/useCopyToClipboard";
import { generateOverlayUrl } from "@/services/generateOverlay";
import { Check, Copy, PartyPopper } from "lucide-react";
import { useEffect, useState } from "react";
import { useNewOverlayFormContext } from "../NewOverlayForm";
import { OverlaySyncStatusCard } from "../SyncStatusCard";

const COPIED_TIMEOUT = 1 * 1000; // 1s in ms

export function FinishedStep() {
  const { data, dataSyncedStatus } = useNewOverlayFormContext();
  const [value, copy] = useCopyToClipboard();
  const [copied, setCopied] = useState(false);
  const overlayUrl = generateOverlayUrl(data);

  useEffect(() => {
    if (copied) {
      const timer = setTimeout(() => {
        setCopied(false);
      }, COPIED_TIMEOUT)

      return () => {
        clearTimeout(timer)
      }
    }
  }, [copied]);

  function handleCopyUrl() {
    copy(overlayUrl);
    setCopied(true);
  }

  return (
    <div className="flex flex-col gap-24 flex-1 justify-center items-center">
      <section className="flex flex-col gap-12 items-center max-w-md text-center">
        <figure className="p-3 rounded-md flex items-center justify-center border w-fit bg-card text-card-foreground">
          <PartyPopper />
        </figure>

        <div className="flex flex-col gap-1.5 items-center">
          <h2 className="text-2xl font-semibold text-secondary-foreground">Tudo pronto!</h2>
          <div className="text-muted-foreground flex flex-col items-center gap-0.5">
            <span>Tudo pronto por aqui, agora é com você!</span>
            <span>Copie o link gerado e insira na sua transmissão</span>
          </div>
        </div>

        <div className="flex flex-col gap-4 w-full items-center">
          <Button
            onClick={handleCopyUrl}
            data-copied={copied}
            className="dark:font-semibold flex items-center gap-3 w-full data-[copied=true]:bg-green-600 data-[copied=true]:text-white transition-all" size="lg"
          >
            {copied === true ? <Check className="shrink-0 w-4" /> : <Copy className="shrink-0 w-4" />}
            {copied === true ? <span>Copiado!</span> : <span>Copiar URL do Overlay</span>}
          </Button>

          <div className="text-sm flex items-center text-muted-foreground w-full gap-4">
            <div className="w-full h-[1px] bg-border" />
            <span>ou</span>
            <div className="w-full h-[1px] bg-border" />
          </div>

          <Button variant="outline" className="text-muted-foreground w-full">Voltar ao dashboard</Button>
        </div>

        <OverlaySyncStatusCard syncStatus={dataSyncedStatus} />
      </section>
    </div>
  );
};
