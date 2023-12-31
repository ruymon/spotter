'use client'

import { FormItemHeader } from '@/components/dashboard/NewOverlayForm/FormItemHeader'
import { Button } from '@/components/ui/button'
import { Form, FormControl, FormField, FormItem, FormMessage } from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { useToast } from '@/hooks/useToast'
import { createSupabaseClient } from '@/lib/database/client'
import { zodResolver } from '@hookform/resolvers/zod'
import { Session } from '@supabase/supabase-js'
import { useState } from 'react'
import { useForm } from 'react-hook-form'
import * as z from "zod"

class AccountError extends Error {
  constructor(message: string, public readonly details: string, public readonly hint: string, public readonly code: string) {
    super(message)
    this.name = 'AccountError'
    this.details = details
    this.hint = hint
    this.code = code
  }
}

const accountSettingsFormSchema = z.object({
  username: z.coerce.string().max(15, {
    message: "Nome de usuário deve ter no máximo 15 caracteres.",
  }).min(2, {
    message: "Nome de usuário deve ter no mínimo 2 caracteres.",
  }).regex(new RegExp(/^[a-z0-9._]+$/), {
    message: "Nome de usuário deve ser composto por apenas letras minúsculas, números, pontos ou underscores.",
  }),
  fullName: z.coerce.string().min(2, {
    message: "Nome completo deve ter no mínimo 2 caracteres.",
  }),
  bio: z.coerce.string().max(160, {
    message: "Biografia deve ter no máximo 160 caracteres.",
  }).refine((value) => {
    if (value.trim().length === 0) {
      return true
    }

    if (value.trim().length <= 2) {
      return false
    }

    return true
  }, {
    message: "Biografia deve ter no mínimo 2 caracteres.",
  }).optional(),
  avatarUrl: z.coerce.string().refine((value) => {
    const urlRegEx = new RegExp(/^https?:\/\/(?:www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b(?:[-a-zA-Z0-9()@:%_\+.~#?&\/=]*)$/);

    if (value.trim().length === 0) {
      return true
    }

    return urlRegEx.test(value)
  }, {
    message: "Avatar deve ser uma url válida.",
  }).optional(),
})

type Account = z.infer<typeof accountSettingsFormSchema>;

export function AccountSettingsForm({ session }: { session: Session | null }) {
  const { toast } = useToast()
  const [isLoading, setIsLoading] = useState(true)
  const supabase = createSupabaseClient()
  const user = session?.user;

  const accountSettingsForm = useForm<Account>({
    resolver: zodResolver(accountSettingsFormSchema),
    defaultValues: async (): Promise<Account> => {
      try {
        setIsLoading(true)

        const { data, error, status } = await supabase
          .from('profiles')
          .select(`full_name, username, bio, avatar_url`)
          .eq('id', user?.id)
          .single()

        if (error && status !== 406) {
          throw error
        }

        if (!data) {
          throw new AccountError(
            'Account not found',
            'The user account could not be found.',
            'Check in the database dashboard if the account really exists.',
            '404'
          )
        }

        const userAccount: Account = {
          fullName: data.full_name ?? '',
          username: data.username ?? '',
          bio: data.bio ?? '',
          avatarUrl: data.avatar_url ?? '',
        };

        return userAccount
      } catch (error) {
        console.error('Error loading user data!', error);

        return {
          fullName: '',
          username: '',
          bio: '',
          avatarUrl: '',
        }
      } finally {
        setIsLoading(false)
      }
    }
  })

  function onSubmit(values: Account) {
    if (accountSettingsForm.formState.isDirty === false) {
      toast({
        variant: 'alert',
        title: "Nada para atualizar!",
        description: "Você não alterou nenhum dado do seu perfil.",
      })

      return
    }

    updateProfile(values)
  }

  async function updateProfile({ username, fullName, bio, avatarUrl }: Account) {
    try {
      setIsLoading(true)

      const { error } = await supabase.from('profiles').upsert({
        id: user?.id as string,
        full_name: fullName,
        username,
        bio,
        avatar_url: avatarUrl,
        updated_at: new Date().toISOString(),
      })

      if (error) {
        throw error
      }

      toast({
        variant: 'success',
        title: "Perfil atualizado!",
        description: "Seu perfil foi atualizado com sucesso.",
      })
    } catch (error) {
      toast({
        variant: 'destructive',
        title: "Eita, pô!",
        description: "Ocorreu um erro ao atualizar o seu perfil. Tente novamente mais tarde.",
      })
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <Form {...accountSettingsForm}>
      <form onSubmit={accountSettingsForm.handleSubmit(onSubmit)} className="flex flex-col gap-8">

        <FormField
          control={accountSettingsForm.control}
          name="username"
          render={({ field }) => (
            <FormItem>
              <FormItemHeader
                title="Nome de usuário"
                description="Escolha um nome de usuário para o seu perfil. Ele será usado para gerar o link do seu perfil."
              />
              <FormControl>
                <Input type="text" placeholder="joaofrango123" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={accountSettingsForm.control}
          name="fullName"
          render={({ field }) => (
            <FormItem>
              <FormItemHeader
                title="Nome completo"
                description="Seu nome completo será usado para identificar você em todo o site."
              />
              <FormControl>
                <Input type="text" placeholder="João Frango" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <div className="space-y-4">
          <FormItemHeader
            title="Email"
            description="O email utilizado para criar a sua conta. Ele não pode ser alterado."
          />
          <Input type="email" placeholder="João Frango" value={session?.user.email} disabled />
        </div>

        <FormField
          control={accountSettingsForm.control}
          name="avatarUrl"
          render={({ field }) => (
            <FormItem>
              <FormItemHeader
                title="Foto de perfil"
                description="Escolha uma foto que combine com a sua identidade! Ela será exibida no seu perfil."
              />
              <FormControl>
                <Input type="text" placeholder="https://" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={accountSettingsForm.control}
          name="bio"
          render={({ field }) => (
            <FormItem>
              <FormItemHeader
                title="Biografia"
                description="Escolha um texto que combine com o seu perfil. Ele será exibido publicamente."
              />
              <FormControl>
                <Input type="text" placeholder="Gosto de cavalos!" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <Button
          type="submit"
          disabled={isLoading}
        >
          {isLoading ? 'Carregando ...' : 'Atualizar'}
        </Button>
      </form>
    </Form>
  )
}