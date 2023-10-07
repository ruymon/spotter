import { VatsimBrasilLogo } from "../VatsimBrasilLogo";
import { VatsimBrasilLogoStars } from "../VatsimBrasilLogoStars";
import { OverlayClock } from "./OverlayClock";

interface OverlayBrandClockProps {};

export function OverlayBrandClock({}: OverlayBrandClockProps) {
  return (
    <div className="relative flex flex-col gap-4 text-secondary rounded-xl p-4 bg-gradient-to-tr from-emerald-400 to-sky-600 max-w-[16rem] justify-center">
      <VatsimBrasilLogo />
      <OverlayClock className="text-2xl font-bold text w-[7.4rem] leading-none text-white" />
      <VatsimBrasilLogoStars className="absolute top-1/2 -translate-y-1/2 right-4 h-4/6" />
    </div>
  );
};
