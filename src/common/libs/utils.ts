import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

// tailwind css merge util function
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}
