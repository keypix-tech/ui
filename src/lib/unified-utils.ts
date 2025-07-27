// Unified utilities for Keypix UI Library
// Provides consistent utility functions for component development

import { cn } from './utils'
import type { 
  Size, 
  Variant, 
  Color, 
  Status,
  IconPosition,
  BorderRadius,
  Shadow
} from '../types/unified'

// ============================================================================
// CLASS NAME UTILITIES
// ============================================================================

/**
 * Generate unified class names for components
 */
export function createComponentClasses(
  baseClass: string,
  options: {
    size?: Size
    variant?: Variant
    color?: Color
    status?: Status
    rounded?: boolean
    elevated?: boolean
    bordered?: boolean
    fullWidth?: boolean
    disabled?: boolean
    loading?: boolean
    error?: boolean
  }
) {
  const {
    size,
    variant,
    color,
    status,
    rounded,
    elevated,
    bordered,
    fullWidth,
    disabled,
    loading,
    error
  } = options

  return cn(
    baseClass,
    size && `${baseClass}-${size}`,
    variant && `${baseClass}-${variant}`,
    color && `${baseClass}-${color}`,
    status && `${baseClass}-${status}`,
    rounded && `${baseClass}-rounded`,
    elevated && `${baseClass}-elevated`,
    bordered && `${baseClass}-bordered`,
    fullWidth && `${baseClass}-full-width`,
    disabled && `${baseClass}-disabled`,
    loading && `${baseClass}-loading`,
    error && `${baseClass}-error`
  )
}

/**
 * Generate size-specific class names
 */
export function getSizeClasses(baseClass: string, size?: Size) {
  if (!size) return ''
  return `${baseClass}-${size}`
}

/**
 * Generate variant-specific class names
 */
export function getVariantClasses(baseClass: string, variant?: Variant) {
  if (!variant) return ''
  return `${baseClass}-${variant}`
}

/**
 * Generate color-specific class names
 */
export function getColorClasses(baseClass: string, color?: Color) {
  if (!color) return ''
  return `${baseClass}-${color}`
}

/**
 * Generate state-specific class names
 */
export function getStateClasses(baseClass: string, states: {
  disabled?: boolean
  loading?: boolean
  error?: boolean
  active?: boolean
  hover?: boolean
  focus?: boolean
}) {
  const classes: string[] = []
  
  if (states.disabled) classes.push(`${baseClass}-disabled`)
  if (states.loading) classes.push(`${baseClass}-loading`)
  if (states.error) classes.push(`${baseClass}-error`)
  if (states.active) classes.push(`${baseClass}-active`)
  if (states.hover) classes.push(`${baseClass}-hover`)
  if (states.focus) classes.push(`${baseClass}-focus`)
  
  return classes.join(' ')
}

// ============================================================================
// STYLE UTILITIES
// ============================================================================

/**
 * Generate unified style objects for components
 */
export function createComponentStyles(options: {
  size?: Size
  variant?: Variant
  color?: Color
  borderRadius?: BorderRadius
  shadow?: Shadow
  fullWidth?: boolean
  customStyles?: React.CSSProperties
}) {
  const {
    size,
    variant,
    color,
    borderRadius,
    shadow,
    fullWidth,
    customStyles
  } = options

  const styles: React.CSSProperties = {
    ...customStyles
  }

  // Size styles
  if (size) {
    const sizeMap: Record<Size, { fontSize: string; padding: string }> = {
      xs: { fontSize: '0.75rem', padding: '0.25rem 0.5rem' },
      sm: { fontSize: '0.875rem', padding: '0.375rem 0.75rem' },
      md: { fontSize: '1rem', padding: '0.5rem 1rem' },
      lg: { fontSize: '1.125rem', padding: '0.75rem 1.5rem' },
      xl: { fontSize: '1.25rem', padding: '1rem 2rem' },
      '2xl': { fontSize: '1.5rem', padding: '1.25rem 2.5rem' }
    }
    Object.assign(styles, sizeMap[size])
  }

  // Border radius styles
  if (borderRadius) {
    const radiusMap: Record<BorderRadius, string> = {
      none: '0',
      sm: '0.125rem',
      md: '0.375rem',
      lg: '0.5rem',
      xl: '0.75rem',
      full: '9999px'
    }
    styles.borderRadius = radiusMap[borderRadius]
  }

  // Shadow styles
  if (shadow) {
    const shadowMap: Record<Shadow, string> = {
      none: 'none',
      sm: '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
      md: '0 4px 6px -1px rgba(0, 0, 0, 0.1)',
      lg: '0 10px 15px -3px rgba(0, 0, 0, 0.1)',
      xl: '0 20px 25px -5px rgba(0, 0, 0, 0.1)',
      '2xl': '0 25px 50px -12px rgba(0, 0, 0, 0.25)'
    }
    styles.boxShadow = shadowMap[shadow]
  }

  // Full width
  if (fullWidth) {
    styles.width = '100%'
  }

  return styles
}

/**
 * Get color values for components
 */
export function getColorValues(color?: Color) {
  if (!color) return {}
  
  const colorMap: Record<Color, { 
    background: string
    text: string
    border: string
    hover: string
  }> = {
    primary: {
      background: 'rgb(59 130 246)',
      text: 'rgb(255 255 255)',
      border: 'rgb(59 130 246)',
      hover: 'rgb(37 99 235)'
    },
    secondary: {
      background: 'rgb(107 114 128)',
      text: 'rgb(255 255 255)',
      border: 'rgb(107 114 128)',
      hover: 'rgb(75 85 99)'
    },
    success: {
      background: 'rgb(34 197 94)',
      text: 'rgb(255 255 255)',
      border: 'rgb(34 197 94)',
      hover: 'rgb(22 163 74)'
    },
    warning: {
      background: 'rgb(245 158 11)',
      text: 'rgb(255 255 255)',
      border: 'rgb(245 158 11)',
      hover: 'rgb(217 119 6)'
    },
    error: {
      background: 'rgb(239 68 68)',
      text: 'rgb(255 255 255)',
      border: 'rgb(239 68 68)',
      hover: 'rgb(220 38 38)'
    },
    info: {
      background: 'rgb(59 130 246)',
      text: 'rgb(255 255 255)',
      border: 'rgb(59 130 246)',
      hover: 'rgb(37 99 235)'
    },
    muted: {
      background: 'rgb(156 163 175)',
      text: 'rgb(255 255 255)',
      border: 'rgb(156 163 175)',
      hover: 'rgb(107 114 128)'
    }
  }

  return colorMap[color]
}

// ============================================================================
// VALIDATION UTILITIES
// ============================================================================

/**
 * Validate component props
 */
export function validateComponentProps<T extends Record<string, any>>(
  props: T,
  schema: Record<keyof T, {
    type: 'string' | 'number' | 'boolean' | 'object' | 'array'
    required?: boolean
    validator?: (value: any) => string | undefined
  }>
): Record<keyof T, string> {
  const errors: Partial<Record<keyof T, string>> = {}

  Object.entries(schema).forEach(([key, config]) => {
    const value = props[key as keyof T]
    const fieldKey = key as keyof T

    // Check required fields
    if (config.required && (value === undefined || value === null || value === '')) {
      errors[fieldKey] = `${key} is required`
      return
    }

    // Skip validation for undefined values
    if (value === undefined || value === null) {
      return
    }

    // Check type
    const actualType = Array.isArray(value) ? 'array' : typeof value
    if (actualType !== config.type) {
      errors[fieldKey] = `${key} must be of type ${config.type}`
      return
    }

    // Run custom validator
    if (config.validator) {
      const validationError = config.validator(value)
      if (validationError) {
        errors[fieldKey] = validationError
      }
    }
  })

  return errors as Record<keyof T, string>
}

/**
 * Common validation rules
 */
export const validationRules = {
  required: (value: any) => {
    if (value === undefined || value === null || value === '') {
      return 'This field is required'
    }
  },
  
  email: (value: string) => {
    if (value && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) {
      return 'Please enter a valid email address'
    }
  },
  
  minLength: (min: number) => (value: string) => {
    if (value && value.length < min) {
      return `Must be at least ${min} characters`
    }
  },
  
  maxLength: (max: number) => (value: string) => {
    if (value && value.length > max) {
      return `Must be no more than ${max} characters`
    }
  },
  
  min: (min: number) => (value: number) => {
    if (value !== undefined && value < min) {
      return `Must be at least ${min}`
    }
  },
  
  max: (max: number) => (value: number) => {
    if (value !== undefined && value > max) {
      return `Must be no more than ${max}`
    }
  },
  
  pattern: (regex: RegExp, message: string) => (value: string) => {
    if (value && !regex.test(value)) {
      return message
    }
  }
}

// ============================================================================
// ACCESSIBILITY UTILITIES
// ============================================================================

/**
 * Generate accessibility attributes
 */
export function createAccessibilityProps(options: {
  'aria-label'?: string
  'aria-describedby'?: string
  'aria-live'?: 'off' | 'polite' | 'assertive'
  'aria-busy'?: boolean
  'aria-expanded'?: boolean
  'aria-selected'?: boolean
  'aria-checked'?: boolean
  'aria-pressed'?: boolean
  'aria-current'?: boolean
  role?: string
  tabIndex?: number
}) {
  const ariaProps: Record<string, any> = {}
  
  Object.entries(options).forEach(([key, value]) => {
    if (value !== undefined) {
      ariaProps[key] = value
    }
  })
  
  return ariaProps
}

/**
 * Generate unique IDs for accessibility
 */
export function generateId(prefix = 'keypix') {
  return `${prefix}-${Math.random().toString(36).substr(2, 9)}`
}

/**
 * Create accessible label
 */
export function createAccessibleLabel(
  label?: string,
  description?: string,
  id?: string
) {
  const labelId = id || generateId('label')
  const descriptionId = description ? generateId('description') : undefined
  
  return {
    'aria-label': label,
    'aria-describedby': description ? descriptionId : undefined,
    id: labelId,
    descriptionId,
    labelProps: {
      htmlFor: labelId,
      id: labelId
    },
    descriptionProps: description ? {
      id: descriptionId
    } : undefined
  }
}

// ============================================================================
// EVENT UTILITIES
// ============================================================================

/**
 * Create unified event handlers
 */
export function createEventHandlers(options: {
  onClick?: (event: React.MouseEvent) => void
  onFocus?: (event: React.FocusEvent) => void
  onBlur?: (event: React.FocusEvent) => void
  onChange?: (event: React.ChangeEvent) => void
  onKeyDown?: (event: React.KeyboardEvent) => void
  onKeyUp?: (event: React.KeyboardEvent) => void
  onMouseEnter?: (event: React.MouseEvent) => void
  onMouseLeave?: (event: React.MouseEvent) => void
  disabled?: boolean
  loading?: boolean
}) {
  const {
    onClick,
    onFocus,
    onBlur,
    onChange,
    onKeyDown,
    onKeyUp,
    onMouseEnter,
    onMouseLeave,
    disabled,
    loading
  } = options

  const isDisabled = disabled || loading

  return {
    onClick: isDisabled ? undefined : onClick,
    onFocus: isDisabled ? undefined : onFocus,
    onBlur: isDisabled ? undefined : onBlur,
    onChange: isDisabled ? undefined : onChange,
    onKeyDown: isDisabled ? undefined : onKeyDown,
    onKeyUp: isDisabled ? undefined : onKeyUp,
    onMouseEnter: isDisabled ? undefined : onMouseEnter,
    onMouseLeave: isDisabled ? undefined : onMouseLeave
  }
}

/**
 * Debounce function calls
 */
export function debounce<T extends (...args: any[]) => any>(
  func: T,
  wait: number
): (...args: Parameters<T>) => void {
  let timeout: NodeJS.Timeout | null = null
  
  return (...args: Parameters<T>) => {
    if (timeout) {
      clearTimeout(timeout)
    }
    timeout = setTimeout(() => func(...args), wait)
  }
}

/**
 * Throttle function calls
 */
export function throttle<T extends (...args: any[]) => any>(
  func: T,
  limit: number
): (...args: Parameters<T>) => void {
  let inThrottle: boolean = false
  
  return (...args: Parameters<T>) => {
    if (!inThrottle) {
      func(...args)
      inThrottle = true
      setTimeout(() => inThrottle = false, limit)
    }
  }
}

// ============================================================================
// ICON UTILITIES
// ============================================================================

/**
 * Process icon props consistently
 */
export function processIconProps(options: {
  leftIcon?: React.ReactNode
  rightIcon?: React.ReactNode
  icon?: React.ReactNode
  iconPosition?: IconPosition
}) {
  const { leftIcon, rightIcon, icon, iconPosition = 'left' } = options
  
  return {
    leftIcon: leftIcon || (iconPosition === 'left' ? icon : undefined),
    rightIcon: rightIcon || (iconPosition === 'right' ? icon : undefined)
  }
}

/**
 * Render icon with consistent styling
 */
export function renderIcon(
  icon: React.ReactNode,
  size?: Size,
  className?: string
) {
  if (!icon) return null
  
  const sizeClasses = {
    xs: 'w-3 h-3',
    sm: 'w-4 h-4',
    md: 'w-5 h-5',
    lg: 'w-6 h-6',
    xl: 'w-8 h-8',
    '2xl': 'w-10 h-10'
  }
  
  const iconClassName = cn(
    'inline-block',
    size && sizeClasses[size],
    className
  )
  
  if (typeof icon === 'string') {
    return <span className={iconClassName}>{icon}</span>
  }
  
  if (React.isValidElement(icon)) {
    return React.cloneElement(icon, {
      className: cn(icon.props.className, iconClassName)
    })
  }
  
  return icon
}

// ============================================================================
// RESPONSIVE UTILITIES
// ============================================================================

/**
 * Get responsive value based on breakpoint
 */
export function getResponsiveValue<T>(
  value: T | Record<string, T>,
  breakpoint: string = 'md'
): T {
  if (typeof value === 'object' && value !== null) {
    return (value as Record<string, T>)[breakpoint] || 
           (value as Record<string, T>).md || 
           Object.values(value as Record<string, T>)[0]
  }
  return value as T
}

/**
 * Create responsive class names
 */
export function createResponsiveClasses(
  baseClass: string,
  responsiveValues: Record<string, any>
) {
  const classes: string[] = []
  
  Object.entries(responsiveValues).forEach(([breakpoint, value]) => {
    if (value !== undefined && value !== null) {
      if (breakpoint === 'default') {
        classes.push(`${baseClass}-${value}`)
      } else {
        classes.push(`${breakpoint}:${baseClass}-${value}`)
      }
    }
  })
  
  return classes.join(' ')
} 