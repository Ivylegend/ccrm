import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"
import { toast } from "sonner";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export const copyToClipboard = (text: string, label: string) => {
  navigator.clipboard.writeText(text);
  toast(`${label} has been copied to your clipboard.`);
};