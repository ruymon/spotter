import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { getInitials } from "@/lib/utils";
import Link from "next/link";

interface TeamCardProps {
  id: string;
  name: string;
  logo_url: string;
};

export function TeamCard({ id, name, logo_url }: TeamCardProps) {
  const teamInitials = getInitials(name);

  return (
    <Link href={`/dashboard/teams/${id}`} className="group">
      <Card className="group-hover:bg-muted transition-colors p-4 gap-6">
        <Avatar>
          <AvatarImage src={logo_url} alt="Logo do time" />
          <AvatarFallback>{teamInitials}</AvatarFallback>
        </Avatar>

        <CardHeader className="gap-1.5">
          <CardTitle>{name}</CardTitle>
          <CardDescription className="leading-tight">Acesso compartilhado a todos os arquivos entre os participantes do time.</CardDescription>
        </CardHeader>
      </Card>
    </Link>
  );
};
