import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

// Optimized class name merger with caching
const classCache = new Map<string, string>()

export function cn(...inputs: ClassValue[]): string {
  const key = JSON.stringify(inputs)
  
  if (classCache.has(key)) {
    return classCache.get(key)!
  }
  
  const result = twMerge(clsx(inputs))
  classCache.set(key, result)
  
  return result
}