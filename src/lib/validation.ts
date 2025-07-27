// Validation utilities for Keypix UI Library

import type { ValidationRule } from '../types'

// Common validation rules
export const required: ValidationRule = (value) => {
  if (value === null || value === undefined || value === '') {
    return 'This field is required'
  }
  return undefined
}

export const email: ValidationRule = (value) => {
  if (!value) return undefined
  
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  if (!emailRegex.test(String(value))) {
    return 'Please enter a valid email address'
  }
  return undefined
}

export const minLength = (min: number): ValidationRule => (value) => {
  if (!value) return undefined
  
  const stringValue = String(value)
  if (stringValue.length < min) {
    return `Must be at least ${min} characters long`
  }
  return undefined
}

export const maxLength = (max: number): ValidationRule => (value) => {
  if (!value) return undefined
  
  const stringValue = String(value)
  if (stringValue.length > max) {
    return `Must be no more than ${max} characters long`
  }
  return undefined
}

export const pattern = (regex: RegExp, message: string): ValidationRule => (value) => {
  if (!value) return undefined
  
  if (!regex.test(String(value))) {
    return message
  }
  return undefined
}

export const number: ValidationRule = (value) => {
  if (!value) return undefined
  
  if (isNaN(Number(value))) {
    return 'Must be a valid number'
  }
  return undefined
}

export const min = (minValue: number): ValidationRule => (value) => {
  if (!value) return undefined
  
  const numValue = Number(value)
  if (isNaN(numValue) || numValue < minValue) {
    return `Must be at least ${minValue}`
  }
  return undefined
}

export const max = (maxValue: number): ValidationRule => (value) => {
  if (!value) return undefined
  
  const numValue = Number(value)
  if (isNaN(numValue) || numValue > maxValue) {
    return `Must be no more than ${maxValue}`
  }
  return undefined
}

export const url: ValidationRule = (value) => {
  if (!value) return undefined
  
  try {
    new URL(String(value))
  } catch {
    return 'Please enter a valid URL'
  }
  return undefined
}

export const phone: ValidationRule = (value) => {
  if (!value) return undefined
  
  const phoneRegex = /^[\+]?[1-9][\d]{0,15}$/
  const cleanValue = String(value).replace(/[\s\-\(\)]/g, '')
  
  if (!phoneRegex.test(cleanValue)) {
    return 'Please enter a valid phone number'
  }
  return undefined
}

export const password: ValidationRule = (value) => {
  if (!value) return undefined
  
  const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/
  if (!passwordRegex.test(String(value))) {
    return 'Password must contain at least 8 characters, one uppercase letter, one lowercase letter, one number, and one special character'
  }
  return undefined
}

// Composite validation rules
export const compose = (...rules: ValidationRule[]): ValidationRule => (value) => {
  for (const rule of rules) {
    const error = rule(value)
    if (error) return error
  }
  return undefined
}

// Common validation combinations
export const requiredEmail = compose(required, email)
export const requiredPassword = compose(required, password)
export const requiredMinLength = (min: number) => compose(required, minLength(min))
export const requiredMaxLength = (max: number) => compose(required, maxLength(max))
export const requiredNumber = compose(required, number)
export const requiredUrl = compose(required, url)
export const requiredPhone = compose(required, phone)

// Validation helpers
export const validateField = (value: unknown, rules: ValidationRule | ValidationRule[]): string | undefined => {
  const ruleArray = Array.isArray(rules) ? rules : [rules]
  
  for (const rule of ruleArray) {
    const error = rule(value)
    if (error) return error
  }
  
  return undefined
}

export const validateForm = <T extends Record<string, unknown>>(
  data: T,
  schema: Record<keyof T, ValidationRule | ValidationRule[]>
): Record<keyof T, string | undefined> => {
  const errors: Record<keyof T, string | undefined> = {} as Record<keyof T, string | undefined>
  
  for (const [field, rules] of Object.entries(schema)) {
    const value = data[field as keyof T]
    errors[field as keyof T] = validateField(value, rules)
  }
  
  return errors
}

export const hasErrors = (errors: Record<string, string | undefined>): boolean => {
  return Object.values(errors).some(error => error !== undefined)
}

export const getFirstError = (errors: Record<string, string | undefined>): string | undefined => {
  return Object.values(errors).find(error => error !== undefined)
} 