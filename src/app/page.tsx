import { BrowserWindow } from "@/components/BrowserWindow";
import { FeatureCard } from "@/components/FeatureCard";
import { MaxWidthWrapper } from "@/components/MaxWidthWrapper";
import { Navbar } from "@/components/Navbar";
import { Badge } from "@/components/ui/badge";
import { buttonVariants } from "@/components/ui/button";
import { featuresConfig } from "@/config/features";
import { siteConfig } from "@/config/site";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

export default function HomePage() {
  return (
    <main className="relative">
      <MaxWidthWrapper className="flex flex-col gap-32 items-center w-full relative">
        <Navbar />

        <section className="w-full flex flex-col gap-2 items-center text-center">
          <Badge variant="secondary">{siteConfig.name} finalmente está público!</Badge>
          <h1 className='max-w-4xl text-5xl font-bold md:text-6xl lg:text-7xl text-foreground'>
            Crie overlays em instantes.
          </h1>
          <p className='mt-5 max-w-prose text-muted-foreground sm:text-lg'>
            {siteConfig.name} facilita o processo de criar overlays e designs para lives e vídeos. Foque no mais importante: o conteúdo, e deixe o resto com a gente.
          </p>

          <Link
            className={buttonVariants({
              size: 'lg',
              className: 'mt-5',
            })}
            href='/dashboard'
            target='_blank'>
            Vamos lá{' '}
            <ArrowRight className='ml-2 h-5 w-5' />
          </Link>
        </section>

        <section className="flex flex-col w-full text-center gap-16 relative -mt-16">
          <BrowserWindow className="z-10">
            <span>OI</span>
          </BrowserWindow>

          <figure className="w-80 h-80 absolute top-0 left-0 -translate-x-1/2 -translate-y-1/2 rounded-full blur-[200px] p-1 bg-violet-300 dark:bg-violet-900" />
          <figure className="w-80 h-80 absolute bottom-0 translate-y-1/2 right-0 translate-x-1/2 rounded-full blur-[140px] p-1 bg-violet-300 dark:bg-purple-900/50" />
        </section>

        <section className="flex flex-col gap-16 w-full">
          <div className='flex flex-col gap-2 text-center'>
            <h2 className='font-bold text-4xl text-secondary-foreground sm:text-5xl'>Prepare sua live em instantes</h2>
            <p className='text-lg text-muted-foreground'>É só preencher os campos e pronto! Já pode usar o overlay na sua live.</p>
          </div>

          <ol className='flex flex-col gap-8 md:flex-row'>

            {featuresConfig.map(({ description, id, title }) => <FeatureCard count={id} title={title} description={description} key={id} />)}
          </ol>
        </section>


      </MaxWidthWrapper>


    </main>
  )
}
