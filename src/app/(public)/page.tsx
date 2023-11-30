import { BrowserWindow } from "@/components/BrowserWindow";
import { FeatureCard } from "@/components/hero/FeatureCard";
import { MaxWidthWrapper } from "@/components/hero/MaxWidthWrapper";
import { buttonVariants } from "@/components/ui/button";
import { featuresConfig } from "@/config/features";
import { siteConfig } from "@/config/site";
import { CURRENT_YEAR } from "@/constants/date";
import { ArrowRight, Github, Sparkle } from "lucide-react";
import Link from "next/link";

export default function HomePage() {
  return (
    <MaxWidthWrapper className="flex flex-col gap-32 items-center w-full relative px-8 sm:px-16">
      <section className="w-full flex flex-col gap-6 items-center text-center">
        <Link
          target="_blank"
          rel="noreferrer"
          href={siteConfig.links.github}
          className="bg-center group rounded-full bg-gradient-to-r bg-[length:420%_420%] brightness-90 contrast-150 from-violet-500 via-violet-200 to-violet-300 to-70% p-[1px] duration-500 hover:bg-left-top hover:shadow-[0_0_2rem_-0.5rem_#eaeaea] dark:from-foreground dark:via-muted dark:to-muted-foreground dark:brightness-125 dark:contrast-100 dark:hover:shadow-[0_0_2rem_-0.5rem_#666]">
          <div className="rounded-full px-3 py-1 bg-white/80 dark:bg-black/90">
            <span className="font-medium bg-center text-sm relative bg-[length:420%_420%] from-muted-foreground via-muted-foreground to-muted-foreground group-hover:from-violet-600 group-hover:via-violet-300 group-hover:to-violet-600 flex items-center bg-gradient-to-r to-70% bg-clip-text text-transparent duration-500 group-hover:bg-left-top dark:from-foreground dark:via-muted-foreground dark:to-muted-foreground dark:group-hover:from-foreground dark:group-hover:via-muted dark:group-hover:to-foreground">
              <Sparkle className="mr-2 h-4 w-4 stroke-violet-400 stroke duration-500 group-hover:rotate-180 group-hover:scale-110 group-hover:stroke-violet-500 group-hover:fill-violet-500 dark:stroke-muted-foreground dark:group-hover:stroke-foreground dark:duration-500 dark:group-hover:fill-foreground" />{' '}
              Apoie com uma estrela no GitHub!
            </span>
          </div>
        </Link>

        <div className="flex flex-col items-center gap-3">
          <h1 className='max-w-prose text-5xl font-bold md:text-6xl lg:text-7xl text-foreground'>Crie overlays em instantes.</h1>
          <span className='max-w-prose text-muted-foreground sm:text-lg'>
            {siteConfig.name} facilita o processo de criar overlays e designs para lives e vídeos. Foque no mais importante: o conteúdo, e deixe o resto com a gente.
          </span>
        </div>


        <Link
          className={buttonVariants({
            size: 'lg',
            className: 'mt-5 font-semibold dark:hover:shadow-[0_0_2rem_-0.5rem_#999] hover:shadow-[0_0_2rem_-0.5rem_#eaeaea] duration-500 transition-shadow',
          })}
          href='/dashboard'
          target='_blank'>
          Vamos lá{' '}
          <ArrowRight className='ml-2 h-4 w-4 shrink-0' />
        </Link>
      </section>

      <section className="flex flex-col w-full text-center gap-16 relative -mt-16 items-center">
        <BrowserWindow className="z-10 md:w-9/12 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
          <span>OI</span>
        </BrowserWindow>

        <figure className="w-full h-96 md:h-[32rem] overflow-clip relative pointer-events-none">
          <figure className="moving-grid w-full absolute h-full" />
          <figure className="shadow-background absolute h-full w-full shadow-[inset_0_0_5rem_3rem]" />
        </figure>

        <figure className="w-80 h-80 pointer-events-none absolute top-0 left-0 -translate-x-1/2 -translate-y-1/2 rounded-full blur-[200px] p-1 bg-violet-300 dark:bg-violet-900" />
        <figure className="w-80 h-80 pointer-events-none absolute bottom-0 translate-y-1/2 right-0 translate-x-1/2 rounded-full blur-[200px] p-1 bg-violet-300 dark:bg-violet-900/75" />
      </section>

      <section className="flex flex-col w-full gap-16">
        <div className='flex flex-col gap-2 max-w-3xl'>
          <div className="flex items-center gap-4 mb-4 h-4">
            <div className="w-px h-full bg-violet-400 p-px" />
            <span className='text-sm text-secondary-foreground'>Tão fácil quanto tirar doce de criança</span>
          </div>
          <h2 className='font-bold text-4xl text-secondary-foreground sm:text-5xl'>Prepare sua live em instantes</h2>
          <span className='text-lg text-muted-foreground w-4/6 leading-relaxed'>É só preencher os campos e pronto! Já pode usar o overlay na sua live.</span>
        </div>

        <ol className='flex gap-16'>
          {featuresConfig.map((props) => <FeatureCard key={props.id} count={props.id} {...props} />)}
        </ol>
      </section>

      <footer className="flex flex-col items-center gap-2 text-sm font-light w-full pb-12 md:py-12 sm:pb-20">
        <div className="flex flex-col-reverse justify-between gap-2 md:flex-row md:items-end w-full">
          <span>Feito com muito carinho e café...</span>
          <Link
            target="_blank"
            rel="noreferrer"
            className="text-primary hover:text-muted-foreground transition-all"
            href={siteConfig.links.github}
          >
            <Github className="shrink-0 w-4 aspect-square" />
          </Link>
        </div>

        <div className="flex flex-col justify-between gap-2 text-muted-foreground md:flex-row md:items-end w-full">
          <div className="flex items-center gap-1">
            <a className="transition-colors duration-300 hover:text-accent-foreground hover:underline" href="/privacy">Política de privacidade</a>
            <span>|</span>
            <a className="transition-colors duration-300 hover:text-accent-foreground hover:underline" href="/tos">Termos de uso</a>
          </div>

          <span>&copy; {CURRENT_YEAR} {siteConfig.name}</span>
        </div>
      </footer>
    </MaxWidthWrapper>
  )
}
