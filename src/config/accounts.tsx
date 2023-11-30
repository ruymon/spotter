import { FlaskConical, Gem, PencilRuler, Shield, Sparkles } from "lucide-react";

export const userAccountTypes = [
  {
    id: 1,
    name: 'Hobby',
    icon: <Sparkles size={24} />,
    description: 'Conteúdo para streamers que estão começando e não possuem muitos espectadores.',
    price: 0,
    features: [
      {
        isIncluded: true,
        title: 'Quantidade de overlays',
        description: '10',
      },
      {
        isIncluded: false,
        title: 'Quantidade de times',
        description: '0',
      },
      {
        isIncluded: false,
        title: 'Customização de cores de overlays',
        description: 'Não',
      },
      {
        isIncluded: false,
        title: 'QR Code para acesso de espectadores',
        description: 'Não',
      },
      {
        isIncluded: false,
        title: 'Sincronização com Navigraph',
        description: 'Não',
      },
      {
        isIncluded: false,
        title: 'Sincronização com SimBrief',
        description: 'Não',
      },
    ],
  },
  {
    id: 2,
    name: 'Pro',
    icon: <Gem size={24} />,
    description: 'Tudo que um streamer precisa para ter uma experiência completa com o Spotter.',
    price: 25,
    features: [
      {
        isIncluded: true,
        title: 'Quantidade de overlays',
        description: '10',
      },
      {
        isIncluded: true,
        title: 'Quantidade de times',
        description: '0',
      },
      {
        isIncluded: true,
        title: 'Customização de cores de overlays',
        description: 'Não',
      },
      {
        isIncluded: true,
        title: 'QR Code para acesso de espectadores',
        description: 'Não',
      },
      {
        isIncluded: true,
        title: 'Sincronização com Navigraph',
        description: 'Não',
      },
      {
        isIncluded: true,
        title: 'Sincronização com SimBrief',
        description: 'Não',
      },
    ],
  },
  {
    id: 3,
    name: 'Customizado',
    icon: <PencilRuler size={24} />,
    description: 'Não achou o plano que você queria? Entre em contato conosco para criarmos um plano personalizado para você!',
    price: null,
    features: [
      {
        isIncluded: true,
        title: 'Quantidade de overlays',
        description: '10',
      },
      {
        isIncluded: false,
        title: 'Quantidade de times',
        description: '0',
      },
      {
        isIncluded: false,
        title: 'Customização de cores de overlays',
        description: 'Não',
      },
      {
        isIncluded: false,
        title: 'QR Code para acesso de espectadores',
        description: 'Não',
      },
      {
        isIncluded: false,
        title: 'Sincronização com Navigraph',
        description: 'Não',
      },
      {
        isIncluded: false,
        title: 'Sincronização com SimBrief',
        description: 'Não',
      },
    ],
  },
  {
    id: 4,
    name: 'Spotter Staff',
    icon: <Shield size={24} />,
    description: 'Acesso a todos os recursos da plataforma',
    price: null,
    features: [
      {
        isIncluded: true,
        title: 'Quantidade de overlays',
        description: '10',
      },
      {
        isIncluded: true,
        title: 'Quantidade de times',
        description: '0',
      },
      {
        isIncluded: true,
        title: 'Customização de cores de overlays',
        description: 'Não',
      },
      {
        isIncluded: true,
        title: 'QR Code para acesso de espectadores',
        description: 'Não',
      },
      {
        isIncluded: true,
        title: 'Sincronização com Navigraph',
        description: 'Não',
      },
      {
        isIncluded: true,
        title: 'Sincronização com SimBrief',
        description: 'Não',
      },
    ],
  },
  {
    id: 5,
    name: 'Beta Tester',
    icon: <FlaskConical size={24} />,
    description: 'Acesso a todos os recursos da plataforma durante a fase beta',
    price: null,
    features: [
      {
        isIncluded: true,
        title: 'Quantidade de overlays',
        description: 'Ilimitado',
      },
      {
        isIncluded: true,
        title: 'Quantidade de times',
        description: 'Ilimitado',
      },
      {
        isIncluded: true,
        title: 'Customização de cores de overlays',
        description: 'Sim',
      },
      {
        isIncluded: true,
        title: 'QR Code para acesso de espectadores',
        description: 'Sim',
      },
      {
        isIncluded: true,
        title: 'Sincronização com Navigraph',
        description: 'Sim',
      },
      {
        isIncluded: true,
        title: 'Sincronização com SimBrief',
        description: 'Sim',
      },
    ],
  }
];
