"use client";

import { useQRCode } from 'next-qrcode';
import { useTheme } from 'next-themes';
import { Card, CardContent, CardHeader } from '../ui/card';

interface OverlayQrCodeProps {
  qrCodeUrl: string;
  title: string;
  label: string;
};

const getColorVariants = (theme: string | undefined) => {
  const black = '#000000FF';
  const white = '#FFFFFFFF';

  switch (theme) {
    case 'dark':
      return {
        dark: white,
        light: black,
      };
    case 'light':
      return {
        dark: black,
        light: white,
      };
    default:
      return {
        dark: black,
        light: white,
      };
  }
}

export function OverlayQrCode({ qrCodeUrl, title, label }: OverlayQrCodeProps) {
  const { SVG } = useQRCode();
  const { theme } = useTheme();


  return (
    <Card className='absolute top-10 right-10 w-40 gap-4'>
      <CardContent>
        <SVG
          text={qrCodeUrl}
          options={{
            margin: 0,
            color: {
              dark: getColorVariants(theme).dark,
              light: getColorVariants(theme).light,
            }
          }}
        />
      </CardContent>

      <CardHeader className='gap-1'>
        <span className='text-secondary-foreground text-xl font-semibold leading-tight'>{title}</span>
        <span className='text-muted-foreground'>{label}</span>
      </CardHeader>
    </Card >
  );
};
