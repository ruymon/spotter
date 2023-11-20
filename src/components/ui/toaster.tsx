"use client"

import {
  Toast,
  ToastClose,
  ToastDescription,
  ToastProvider,
  ToastTitle,
  ToastVariants,
  ToastViewport,
} from "@/components/ui/toast"
import { useToast } from "@/hooks/useToast"
import { AlertTriangle, Check, Megaphone, XCircle } from "lucide-react"
import { type ReactNode } from "react"

const ToastIconVariants: { [key in ToastVariants ]: ReactNode | null } = {
  default: <Megaphone className="w-4 h-4 shrink-0" />,
  alert: <AlertTriangle className="w-4 h-4 shrink-0" />,
  destructive: <XCircle className="w-4 h-4 shrink-0" />,
  success: <Check className="w-4 h-4 shrink-0" />,
};

export function Toaster() {
  const { toasts } = useToast()

  return (
    <ToastProvider>
      {toasts.map(function ({ id, title, description, action, ...props }) {
        return (
          <Toast key={id} {...props}>
            <div className="flex items-center justify-between">
              {ToastIconVariants[props.variant ?? 'default']}
              <ToastClose />
            </div>

            <div className="flex flex-col">
              {title && <ToastTitle>{title}</ToastTitle>}
              {description && <ToastDescription>{description}</ToastDescription>}
            </div>

            {action}
          </Toast>
        )
      })}
      <ToastViewport />
    </ToastProvider>
  )
}
