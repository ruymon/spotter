import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { userAccountTypes } from "@/config/accounts";
import { CheckIcon, X } from "lucide-react";

interface AccountTypeCardProps {
  accountType: number;
};

export function AccountTypeCard({ accountType }: AccountTypeCardProps) {
  const account = userAccountTypes[accountType];

  return (
    <Card className='gap-8'>
      <CardHeader className='flex-row gap-4'>
        <figure className="p-3 rounded-md bg-gradient-to-tr from-background to-muted flex items-center justify-center text-secondary-foreground">
          {account.icon}
        </figure>

        <div className='flex flex-col gap-0.5'>
          <CardTitle>{account.name}</CardTitle>
          <CardDescription>{account.description}</CardDescription>
        </div>
      </CardHeader>

      <CardContent className="grid grid-cols-2 gap-8">
        {userAccountTypes[accountType].features.map(({ title, description, isIncluded }, index) => (
          <div
            key={index}
            className="flex gap-2 basis-56"
          >
            {isIncluded ? <CheckIcon className="h-4 w-4 translate-y-1 text-secondary-foreground shrink-0" /> : <X className="h-4 w-4 translate-y-1 shrink-0" />}
            <div className="flex flex-col text-muted-foreground gap-0.5">
              <span className="text-sm font-medium">{title}</span>
              <span className="text-xs opacity-75">{description}</span>
            </div>
          </div>
        ))}
      </CardContent>
    </Card>
  );
};
