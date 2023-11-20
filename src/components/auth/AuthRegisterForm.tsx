"use client";

import { signUp } from "@/actions/authActions";
import { zodResolver } from "@hookform/resolvers/zod";
import Link from "next/link";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { Button, buttonVariants } from "../ui/button";
import { Form, FormControl, FormField, FormItem, FormMessage } from "../ui/form";
import { Input } from "../ui/input";
import { Label } from "../ui/label";

interface AuthRegisterFormProps {
  message: string
};

const registerFormSchema = z.object({
  email: z.string().email({
    message: "Email inválido",
  }),
  password: z.string().min(8, {
    message: "Senha deve ter no mínimo 8 caracteres.",
  }),
});

export type Register = z.infer<typeof registerFormSchema>;

export function AuthRegisterForm({ message }: AuthRegisterFormProps) {
  const registerForm = useForm<Register>({
    resolver: zodResolver(registerFormSchema)
  })

  async function handleSignUp(values: Register) {
    try {
      await signUp(values)
    } catch (error) {
      console.error(error)
    }
  }

  return (
    <div className="flex flex-col w-full gap-8">
      <div className='flex flex-col'>
        <h1 className='text-xl font-semibold text-foreground'>Seja bem-vindo!</h1>
        <span className='text-muted-foreground'>Junte-se a milhares de usuários e comece a compartilhar suas lives em instantes</span>
      </div>
      <Form {...registerForm}>
        <form
          onSubmit={registerForm.handleSubmit(handleSignUp)}
          className="flex flex-col w-full grow items-center gap-4 text-foreground"
        >

          <FormField
            control={registerForm.control}
            name="email"
            render={({ field }) => (
              <FormItem className="w-full">
                <Label htmlFor="email">E-mail</Label>
                <FormControl>
                  <Input type="email" autoComplete="email" placeholder="voce@exemplo.com" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={registerForm.control}
            name="password"
            render={({ field }) => (
              <FormItem className="w-full">
                <Label htmlFor="password">Senha</Label>
                <FormControl>
                  <Input type="password" autoComplete="current-password" placeholder="••••••••" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <div className='mt-4 flex flex-col gap-3 w-full'>
            <Button type="submit" disabled={registerForm.formState.isSubmitting}>
              {registerForm.formState.isSubmitting ? 'Carregando...' : 'Criar conta'}
            </Button>
            <Link href="/auth/login" className={buttonVariants({variant: "ghost"})}>
              Entrar
            </Link>
          </div>

          {message && (
            <span className='text-sm text-muted-foreground'>{message}</span>
          )}
        </form>
      </Form>
    </div>
  )
};
