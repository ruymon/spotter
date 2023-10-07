# Spotter
A simple Next.js project to act as overlay for VATSIM live streams.

# Features
- [ ] Display Event Name
- [ ] Display Current Time
- [ ] Display Current Date
- [ ] Display Current Zulu Time
- [ ] Display Current Local Time
- [ ] Display Location Metar and TAF (maybe ATIS)
- [ ] Display Current ATC
- [ ] Display Current ATC Frequency
- [ ] Let the user configure the overlay's color scheme
- [ ] Let the user configure the overlay's font
- [ ] Let the user configure the overlay's font size


# Route Parameters

## Event details
- [ ] `?title=` - Sets the title of the overlay
- [ ] `?subtitle=` - Sets the subtitle of the overlay
- [ ] `?locationIcao` - Sets the current airport and fetches the METAR and TAF accordingly

## Style and customization
- [ ] `?logo=` - Sets a custom logo for the overlay
- [ ] `?backgroundColor=` - Sets the color scheme of the overlay
- [ ] `?accentColor=` - Sets the accent color of the overlay
- [ ] `?textColor=` - Sets the font of the overlay

## Display options
- [ ] `?hideInboundFlights=` - Hides the inbound flights
- [ ] `?hideOutboundFlights=` - Hides the outbound flights
- [ ] `?hideTime=` - Hides the time
- [ ] `?hideMetar=` - Hides the METAR


## Running the project locally

First, install the dependencies:

```bash
npm install
# or
yarn
# or
pnpm
# or
bun
```
Then, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```