import { clsx } from "clsx"
import { twMerge } from "tailwind-merge" // <-- Corregido a twMerge, que es el nombre real de la función

export function cn(...inputs: any[]) {
  return twMerge(clsx(inputs))
}