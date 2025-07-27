// Unified hooks for Keypix UI Library
// Provides consistent hooks for component state management

import * as React from 'react'
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
// BASE HOOKS
// ============================================================================

/**
 * Hook for managing component state with unified defaults
 */
export function useComponentState<T extends Record<string, any>>(
  initialState: T,
  options?: {
    /** Persist state to localStorage */
    persist?: boolean
    /** Storage key for persistence */
    storageKey?: string
    /** Reset state on unmount */
    resetOnUnmount?: boolean
  }
) {
  const [state, setState] = React.useState<T>(() => {
    if (options?.persist && options?.storageKey) {
      try {
        const stored = localStorage.getItem(options.storageKey)
        return stored ? { ...initialState, ...JSON.parse(stored) } : initialState
      } catch {
        return initialState
      }
    }
    return initialState
  })

  const updateState = React.useCallback((updates: Partial<T>) => {
    setState(prev => {
      const newState = { ...prev, ...updates }
      if (options?.persist && options?.storageKey) {
        try {
          localStorage.setItem(options.storageKey, JSON.stringify(newState))
        } catch {
          // Ignore storage errors
        }
      }
      return newState
    })
  }, [options?.persist, options?.storageKey])

  const resetState = React.useCallback(() => {
    setState(initialState)
    if (options?.persist && options?.storageKey) {
      try {
        localStorage.removeItem(options.storageKey)
      } catch {
        // Ignore storage errors
      }
    }
  }, [initialState, options?.persist, options?.storageKey])

  React.useEffect(() => {
    return () => {
      if (options?.resetOnUnmount) {
        resetState()
      }
    }
  }, [options?.resetOnUnmount, resetState])

  return { state, setState: updateState, resetState }
}

// ============================================================================
// FORM HOOKS
// ============================================================================

/**
 * Hook for managing form state with validation
 */
export function useFormState<T extends Record<string, any>>(
  initialValues: T,
  validationSchema?: Record<keyof T, (value: any) => string | undefined>
) {
  const [values, setValues] = React.useState<T>(initialValues)
  const [errors, setErrors] = React.useState<Partial<Record<keyof T, string>>>({})
  const [touched, setTouched] = React.useState<Partial<Record<keyof T, boolean>>>({})
  const [isSubmitting, setIsSubmitting] = React.useState(false)

  const validateField = React.useCallback((field: keyof T, value: any) => {
    if (!validationSchema?.[field]) return undefined
    return validationSchema[field](value)
  }, [validationSchema])

  const validateAll = React.useCallback(() => {
    const newErrors: Partial<Record<keyof T, string>> = {}
    let isValid = true

    Object.keys(values).forEach((key) => {
      const fieldKey = key as keyof T
      const error = validateField(fieldKey, values[fieldKey])
      if (error) {
        newErrors[fieldKey] = error
        isValid = false
      }
    })

    setErrors(newErrors)
    return isValid
  }, [values, validateField])

  const setFieldValue = React.useCallback((field: keyof T, value: any) => {
    setValues(prev => ({ ...prev, [field]: value }))
    
    // Clear error when field is modified
    if (errors[field]) {
      setErrors(prev => ({ ...prev, [field]: undefined }))
    }
  }, [errors])

  const setFieldTouched = React.useCallback((field: keyof T, isTouched = true) => {
    setTouched(prev => ({ ...prev, [field]: isTouched }))
    
    // Validate field when touched
    if (isTouched && validationSchema?.[field]) {
      const error = validateField(field, values[field])
      setErrors(prev => ({ ...prev, [field]: error }))
    }
  }, [validationSchema, validateField, values])

  const handleSubmit = React.useCallback(async (
    onSubmit: (values: T) => Promise<void> | void
  ) => {
    setIsSubmitting(true)
    
    try {
      const isValid = validateAll()
      if (isValid) {
        await onSubmit(values)
      }
    } finally {
      setIsSubmitting(false)
    }
  }, [values, validateAll])

  const resetForm = React.useCallback(() => {
    setValues(initialValues)
    setErrors({})
    setTouched({})
    setIsSubmitting(false)
  }, [initialValues])

  const isDirty = React.useMemo(() => {
    return JSON.stringify(values) !== JSON.stringify(initialValues)
  }, [values, initialValues])

  const isValid = React.useMemo(() => {
    return Object.keys(errors).length === 0
  }, [errors])

  return {
    values,
    errors,
    touched,
    isSubmitting,
    isDirty,
    isValid,
    setFieldValue,
    setFieldTouched,
    setValues,
    setErrors,
    handleSubmit,
    resetForm,
    validateField,
    validateAll
  }
}

// ============================================================================
// COMPONENT HOOKS
// ============================================================================

/**
 * Hook for managing component size state
 */
export function useComponentSize(defaultSize: Size = 'md') {
  return useComponentState({ size: defaultSize })
}

/**
 * Hook for managing component variant state
 */
export function useComponentVariant(defaultVariant: Variant = 'default') {
  return useComponentState({ variant: defaultVariant })
}

/**
 * Hook for managing component color state
 */
export function useComponentColor(defaultColor: Color = 'primary') {
  return useComponentState({ color: defaultColor })
}

/**
 * Hook for managing loading state
 */
export function useLoadingState(initialLoading = false) {
  const [loading, setLoading] = React.useState(initialLoading)

  const withLoading = React.useCallback(async <T>(
    asyncFn: () => Promise<T>
  ): Promise<T> => {
    setLoading(true)
    try {
      return await asyncFn()
    } finally {
      setLoading(false)
    }
  }, [])

  return { loading, setLoading, withLoading }
}

/**
 * Hook for managing visibility state
 */
export function useVisibilityState(initialVisible = false) {
  const [visible, setVisible] = React.useState(initialVisible)

  const show = React.useCallback(() => setVisible(true), [])
  const hide = React.useCallback(() => setVisible(false), [])
  const toggle = React.useCallback(() => setVisible(prev => !prev), [])

  return { visible, setVisible, show, hide, toggle }
}

/**
 * Hook for managing selection state
 */
export function useSelectionState<T>(initialSelection: T[] = []) {
  const [selection, setSelection] = React.useState<T[]>(initialSelection)

  const select = React.useCallback((item: T) => {
    setSelection(prev => prev.includes(item) ? prev : [...prev, item])
  }, [])

  const deselect = React.useCallback((item: T) => {
    setSelection(prev => prev.filter(i => i !== item))
  }, [])

  const toggle = React.useCallback((item: T) => {
    setSelection(prev => 
      prev.includes(item) 
        ? prev.filter(i => i !== item)
        : [...prev, item]
    )
  }, [])

  const selectAll = React.useCallback((items: T[]) => {
    setSelection(items)
  }, [])

  const clearSelection = React.useCallback(() => {
    setSelection([])
  }, [])

  const isSelected = React.useCallback((item: T) => {
    return selection.includes(item)
  }, [selection])

  return {
    selection,
    setSelection,
    select,
    deselect,
    toggle,
    selectAll,
    clearSelection,
    isSelected
  }
}

// ============================================================================
// UTILITY HOOKS
// ============================================================================

/**
 * Hook for managing component configuration
 */
export function useComponentConfig<T extends Record<string, any>>(
  defaultConfig: T,
  userConfig?: Partial<T>
) {
  return React.useMemo(() => ({
    ...defaultConfig,
    ...userConfig
  }), [defaultConfig, userConfig])
}

/**
 * Hook for managing responsive values
 */
export function useResponsiveValue<T>(
  value: T | Record<string, T>,
  defaultValue: T
): T {
  return React.useMemo(() => {
    if (typeof value === 'object' && value !== null) {
      // TODO: Implement responsive breakpoint logic
      return defaultValue
    }
    return value ?? defaultValue
  }, [value, defaultValue])
}

/**
 * Hook for managing component theme
 */
export function useComponentTheme(
  theme?: 'light' | 'dark' | 'system'
) {
  const [currentTheme, setCurrentTheme] = React.useState<'light' | 'dark'>('light')

  React.useEffect(() => {
    if (theme === 'system') {
      const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)')
      setCurrentTheme(mediaQuery.matches ? 'dark' : 'light')
      
      const handler = (e: MediaQueryListEvent) => {
        setCurrentTheme(e.matches ? 'dark' : 'light')
      }
      
      mediaQuery.addEventListener('change', handler)
      return () => mediaQuery.removeEventListener('change', handler)
    } else if (theme) {
      setCurrentTheme(theme)
    }
  }, [theme])

  return currentTheme
}

/**
 * Hook for managing component accessibility
 */
export function useAccessibility(
  props: {
    'aria-label'?: string
    'aria-describedby'?: string
    'aria-live'?: 'off' | 'polite' | 'assertive'
    'aria-busy'?: boolean
    'aria-expanded'?: boolean
    'aria-selected'?: boolean
    'aria-checked'?: boolean
    'aria-pressed'?: boolean
    'aria-current'?: boolean
  }
) {
  return React.useMemo(() => {
    const ariaProps: Record<string, any> = {}
    
    Object.entries(props).forEach(([key, value]) => {
      if (value !== undefined) {
        ariaProps[key] = value
      }
    })
    
    return ariaProps
  }, [props])
}

/**
 * Hook for managing component styling
 */
export function useComponentStyling(
  props: {
    size?: Size
    variant?: Variant
    color?: Color
    rounded?: boolean
    elevated?: boolean
    borderRadius?: BorderRadius
    shadow?: Shadow
    bordered?: boolean
    fullWidth?: boolean
  }
) {
  return React.useMemo(() => {
    const styleProps: Record<string, any> = {}
    
    Object.entries(props).forEach(([key, value]) => {
      if (value !== undefined) {
        styleProps[key] = value
      }
    })
    
    return styleProps
  }, [props])
}

/**
 * Hook for managing component icons
 */
export function useComponentIcons(
  props: {
    leftIcon?: React.ReactNode
    rightIcon?: React.ReactNode
    icon?: React.ReactNode
    iconPosition?: IconPosition
  }
) {
  return React.useMemo(() => {
    const { leftIcon, rightIcon, icon, iconPosition = 'left' } = props
    
    return {
      leftIcon: leftIcon || (iconPosition === 'left' ? icon : undefined),
      rightIcon: rightIcon || (iconPosition === 'right' ? icon : undefined)
    }
  }, [props.leftIcon, props.rightIcon, props.icon, props.iconPosition])
} 