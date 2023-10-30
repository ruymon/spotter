import { NewOverlayFormData } from "@/components/dashboard/NewOverlayForm/NewOverlayForm";
import { siteConfig } from "@/config/site";

export function generateOverlayUrl({eventDetails, locationDetails, overlaySettings }: NewOverlayFormData) {
  const baseUrl = process.env.NODE_ENV === "production" ? siteConfig.url : "http://localhost:3000";
  const overlayUrl = new URL(baseUrl);
  overlayUrl.pathname = "/overlay";

  overlayUrl.searchParams.set("label", eventDetails.label);
  overlayUrl.searchParams.set("title", eventDetails.title);
  overlayUrl.searchParams.set("subtitle", eventDetails.subtitle);

  overlayUrl.searchParams.set("locationIcao", locationDetails.icao);
  overlayUrl.searchParams.set("locationLabel", locationDetails.label);

  overlayUrl.searchParams.set("showZuluTime", overlaySettings.showZuluTime.toString());
  overlayUrl.searchParams.set("showLocalTime", overlaySettings.showLocalTime.toString());
  overlayUrl.searchParams.set("showMetar", overlaySettings.showMetar.toString());
  overlayUrl.searchParams.set("showInboundFlightsCount", overlaySettings.showInboundFlightsCount.toString());
  overlayUrl.searchParams.set("showOutboundFlightsCount", overlaySettings.showOutboundFlightsCount.toString());

  return overlayUrl.toString();
}
