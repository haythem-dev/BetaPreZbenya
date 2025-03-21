import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function formatCurrency(amount: number): string {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD'
  }).format(amount);
}

export function formatTimeRemaining(endDate: Date): { days: string, hours: string, minutes: string, seconds: string } {
  const now = new Date();
  const diff = endDate.getTime() - now.getTime();
  
  const days = Math.floor(diff / (1000 * 60 * 60 * 24)).toString().padStart(2, '0');
  const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)).toString().padStart(2, '0');
  const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60)).toString().padStart(2, '0');
  const seconds = Math.floor((diff % (1000 * 60)) / 1000).toString().padStart(2, '0');
  
  return { days, hours, minutes, seconds };
}
