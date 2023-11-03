import { AttachmentGlyph, ShieldGlyph, ThunderGlyph } from "@/components/hero/Glyphs";
import { FeaturesConfig } from "@/types";

export const featuresConfig: FeaturesConfig = [
  {
    id: 1,
    glyph: <ShieldGlyph />,
    title: 'Vincule sua conta com a Vatsim Brasil',
    description: 'Vincule sua conta com a Vatsim Brasil e tenha acesso a recursos exclusivos.',
  },
  {
    id: 2,
    glyph: <ThunderGlyph />,
    title: 'Escolha os dados e informações que deseja exibir',
    description: 'Vincule sua conta com a Vatsim Brasil e tenha acesso a recursos exclusivos.',
  },
  {
    id: 3,
    glyph: <AttachmentGlyph />,
    title: 'Copie o link e insira na sua transmissão!',
    description: 'Vincule sua conta com a Vatsim Brasil e tenha acesso a recursos exclusivos.',
  }
];