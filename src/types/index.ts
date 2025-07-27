// Common types for Keypix UI Library

// Re-export types from components to avoid conflicts
export type { Theme } from '../lib/theme'
export type { SpinnerType } from '../components/atoms/Spinner'

export type ButtonVariant = 'default' | 'secondary' | 'destructive' | 'outline' | 'ghost' | 'link' | 'success' | 'warning' | 'info'

export type ButtonSize = 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'icon'

export type BadgeVariant = 'default' | 'secondary' | 'destructive' | 'outline' | 'success' | 'warning' | 'info'

export type BadgeSize = 'sm' | 'md' | 'lg'

export type InputSize = 'sm' | 'md' | 'lg'

export type SpinnerVariant = 'primary' | 'success' | 'warning' | 'error'

export type SpinnerSize = 'xs' | 'sm' | 'md' | 'lg' | 'xl'

export type AlertVariant = 'default' | 'destructive' | 'success' | 'warning' | 'info'

export type TimeChartEventType = 'warning' | 'error' | 'info' | 'success'

export type SortDirection = 'asc' | 'desc'

// Utility types
export type DeepPartial<T> = {
  [P in keyof T]?: T[P] extends object ? DeepPartial<T[P]> : T[P]
}

export type Optional<T, K extends keyof T> = Omit<T, K> & Partial<Pick<T, K>>

export type RequiredFields<T, K extends keyof T> = T & Required<Pick<T, K>>

// Event types
export interface BaseEvent {
  id: string
  timestamp: Date
}

export interface ClickEvent extends BaseEvent {
  type: 'click'
  target: HTMLElement
}

export interface ChangeEvent extends BaseEvent {
  type: 'change'
  value: unknown
  previousValue: unknown
}

// Form types
export interface FormField {
  name: string
  value: unknown
  error?: string
  touched: boolean
  required: boolean
}

export interface FormState {
  fields: Record<string, FormField>
  isValid: boolean
  isDirty: boolean
  isSubmitting: boolean
}

// API types
export interface ApiResponse<T = unknown> {
  data: T
  success: boolean
  message?: string
  errors?: Record<string, string[]>
}

export interface PaginatedResponse<T> extends ApiResponse<T[]> {
  pagination: {
    page: number
    pageSize: number
    total: number
    totalPages: number
  }
}

// Component prop types
export interface BaseComponentProps {
  className?: string
  id?: string
  'data-testid'?: string
}

export interface InteractiveComponentProps extends BaseComponentProps {
  disabled?: boolean
  loading?: boolean
  onClick?: (event: React.MouseEvent) => void
  onFocus?: (event: React.FocusEvent) => void
  onBlur?: (event: React.FocusEvent) => void
}

export interface FormComponentProps extends InteractiveComponentProps {
  name?: string
  value?: unknown
  onChange?: (value: unknown) => void
  onBlur?: (event: React.FocusEvent) => void
  error?: string
  required?: boolean
}

// Validation types
export type ValidationRule<T = unknown> = (value: T) => string | undefined

export interface ValidationSchema {
  [key: string]: ValidationRule | ValidationRule[]
}

// Animation types
export type AnimationType = 'fade' | 'slide' | 'scale' | 'rotate' | 'bounce'

export interface AnimationConfig {
  type: AnimationType
  duration?: number
  delay?: number
  easing?: string
}

// Layout types
export type Breakpoint = 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl'

export type GridCols = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12

export interface ResponsiveValue<T> {
  xs?: T
  sm?: T
  md?: T
  lg?: T
  xl?: T
  '2xl'?: T
}

// Color types
export type ColorScheme = 'primary' | 'secondary' | 'success' | 'warning' | 'error' | 'info'

export interface ColorPalette {
  primary: string
  secondary: string
  success: string
  warning: string
  error: string
  info: string
  background: string
  foreground: string
  muted: string
  border: string
}

// Accessibility types
export interface AriaProps {
  'aria-label'?: string
  'aria-describedby'?: string
  'aria-labelledby'?: string
  'aria-hidden'?: boolean
  'aria-expanded'?: boolean
  'aria-selected'?: boolean
  'aria-checked'?: boolean
  'aria-pressed'?: boolean
  'aria-current'?: boolean
  'aria-live'?: 'off' | 'polite' | 'assertive'
  'aria-atomic'?: boolean
  'aria-relevant'?: 'additions' | 'additions removals' | 'additions text' | 'all' | 'removals' | 'removals additions' | 'removals text' | 'text' | 'text additions' | 'text removals'
  'aria-busy'?: boolean
  'aria-controls'?: string
  'aria-details'?: string
  'aria-errormessage'?: string
  'aria-flowto'?: string
  'aria-owns'?: string
  'aria-posinset'?: number
  'aria-setsize'?: number
  'aria-valuemin'?: number
  'aria-valuemax'?: number
  'aria-valuenow'?: number
  'aria-valuetext'?: string
}

// Export unified types
export * from './unified'
export * from './unified-api' 