"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { Button } from "../ui/button";
import { Form, FormControl, FormField, FormItem, FormMessage } from "../ui/form";
import { Input } from "../ui/input";
import { Label } from "../ui/label";
import { signIn, signUp } from "./auth-actions";

interface AuthLoginFormProps {
  message: string
};

const loginFormSchema = z.object({
  email: z.string().email({
    message: "Email inválido",
  }),
  password: z.string().min(8, {
    message: "Senha deve ter no mínimo 8 caracteres.",
  }),
});

export type Login = z.infer<typeof loginFormSchema>;

export function AuthLoginForm({ message }: AuthLoginFormProps) {
  const [isSigningIn, setIsSigningIn] = useState(false);
  const [isSigningUp, setIsSigningUp] = useState(false);

  const loginForm = useForm<Login>({
    resolver: zodResolver(loginFormSchema)
  })

  async function handleSignIn(values: Login) {
    setIsSigningIn(true);

    try {
      await signIn(values)
    } catch (error) {
      console.error(error)
    } finally {
      setIsSigningIn(false);
    }
  }

  async function handleSignUp(values: Login) {
    setIsSigningUp(true);

    try {
      await signUp(values)
    } catch (error) {
      console.error(error)
    } finally {
      setIsSigningUp(false);
    }
  }

  return (
    <div className="flex flex-col w-full gap-8">
      <div className='flex flex-col'>
        <h1 className='text-xl font-semibold text-foreground'>Welcome back</h1>
        <span className='text-muted-foreground'>Join the Spotter community</span>
      </div>
      <Form {...loginForm}>
        <form
          onSubmit={loginForm.handleSubmit(handleSignIn)}
          className="flex flex-col w-full grow items-center gap-4 text-foreground"
        >

          <FormField
            control={loginForm.control}
            name="email"
            render={({ field }) => (
              <FormItem className="w-full">
                <Label htmlFor="email">Email</Label>
                <FormControl>
                  <Input type="email" autoComplete="email" placeholder="you@example.com" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={loginForm.control}
            name="password"
            render={({ field }) => (
              <FormItem className="w-full">
                <Label htmlFor="password">Password</Label>
                <FormControl>
                  <Input type="password" autoComplete="current-password" placeholder="••••••••" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <div className='mt-4 flex flex-col gap-3 w-full'>
            <Button type="submit" disabled={isSigningIn}>
              {isSigningIn ? 'Loading...' : 'Update'}
            </Button>
            <Button type="button" variant="ghost" onClick={loginForm.handleSubmit(handleSignUp)} disabled={isSigningUp}>
              {isSigningUp ? 'Loading...' : 'Criar conta'}
            </Button>
          </div>

          {message && (
            <span className='text-sm text-muted-foreground'>{message}</span>
          )}
        </form>
      </Form>
    </div>
  )
};
