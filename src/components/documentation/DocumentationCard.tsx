import Link from "next/link";
import { Card, CardFooter, CardHeader } from "../ui/card";

type DocumentationCardColor = 'violet' | 'blue' | 'orange';

interface DocumentationCardProps {
  href: string;
  title: string;
  description: string;
  readingTimeInSeconds: number;
  color: DocumentationCardColor;
};

export function DocumentationCard({ href, title, description, readingTimeInSeconds, color }: DocumentationCardProps) {
  return (
    <Link href={href}>
      <Card className="w-96 bg-gradient-to-br from-violet-700 to-purple-600 rounded-xl">
        <CardHeader className="gap-1">
          <span className="text-2xl font-semibold text-violet-50">{title}</span>
          <span className="text-violet-200">{description}</span>
        </CardHeader>

        <CardFooter className="flex items-center flex-row gap-1 text-sm text-violet-200">
          <span>5 minutos de leitura</span>
        </CardFooter>
      </Card>
    </Link>
  );
};
