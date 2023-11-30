import { MaxWidthWrapper } from "@/components/hero/MaxWidthWrapper";
import { Card, CardFooter, CardHeader } from "@/components/ui/card";
import { siteConfig } from "@/config/site";

interface DocumentationPageProps {};

export default function DocumentationPage({}: DocumentationPageProps) {
  return (
    <MaxWidthWrapper className="flex flex-col gap-16 w-full relative px-8 sm:px-16">
      <header className="flex flex-col gap-2.5">
        <h1 className="text-5xl font-bold text-secondary-foreground">Guias e tutoriais</h1>
        <span className="text-muted-foreground text-xl font-medium">Seu lar para entender tudo e conseguir extrair o melhor do  {siteConfig.name}!</span>
      </header>

      <section className="flex flex-col gap-4">
        <div>
          <h2 className="text-3xl font-semibold text-secondary-foreground">Introdução</h2>
          <p className="text-muted-foreground text-lg font-medium">Comece por aqui!</p>
        </div>

        <div className="flex items-center gap-8">
          <Card className="w-96 bg-gradient-to-br from-violet-700 to-purple-600 rounded-xl">
            <CardHeader className="gap-1">
              <span className="text-2xl font-semibold text-violet-50">Criando uma conta</span>
              <span className="text-violet-200">Passo a passo para criar e verificar sua conta na plataforma.</span>
            </CardHeader>

            <CardFooter className="flex items-center flex-row gap-1 text-sm text-violet-200">
              <span>5 minutos de leitura</span>
            </CardFooter>
          </Card>

          <Card className="w-96 bg-gradient-to-br from-blue-700 to-sky-600 rounded-xl">
            <CardHeader className="gap-1">
              <span className="text-2xl font-semibold text-blue-50">Criando uma conta</span>
              <span className="text-blue-200">Passo a passo para criar e verificar sua conta na plataforma.</span>
            </CardHeader>

            <CardFooter className="flex items-center flex-row gap-1 text-sm text-blue-200">
              <span>5 minutos de leitura</span>
            </CardFooter>
          </Card>

          <Card className="w-96 bg-gradient-to-br from-orange-400 to-yellow-700 rounded-xl">
            <CardHeader className="gap-1">
              <span className="text-2xl font-semibold text-violet-50">Criando uma conta</span>
              <span className="text-violet-200">Passo a passo para criar e verificar sua conta na plataforma.</span>
            </CardHeader>

            <CardFooter className="flex items-center flex-row gap-1 text-sm text-violet-200">
              <span>5 minutos de leitura</span>
            </CardFooter>
          </Card>



        </div>

      </section>


    </MaxWidthWrapper>
  );
};
