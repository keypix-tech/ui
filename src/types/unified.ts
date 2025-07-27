// Unified types for Keypix UI Library - Simple and practical approach

// Unified size system
export type Size = 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl'

// Unified variant system
export type Variant = 
  | 'default' 
  | 'secondary' 
  | 'destructive' 
  | 'outline' 
  | 'ghost' 
  | 'link' 
  | 'success' 
  | 'warning' 
  | 'info'

// Unified color system
export type Color = 
  | 'primary' 
  | 'secondary' 
  | 'success' 
  | 'warning' 
  | 'error' 
  | 'info' 
  | 'muted'

// Unified status types
export type Status = 'online' | 'offline' | 'away' | 'busy' | 'pending'

// Unified icon positions
export type IconPosition = 'left' | 'right'

// Unified border radius
export type BorderRadius = 'none' | 'sm' | 'md' | 'lg' | 'xl' | 'full'

// Unified shadow types
export type Shadow = 'none' | 'sm' | 'md' | 'lg' | 'xl' | '2xl'

// Base component interface
export interface BaseComponent {
  /** Unique identifier */
  id?: string
  /** CSS class name */
  className?: string
  /** Inline styles */
  style?: React.CSSProperties
  /** Test identifier */
  'data-testid'?: string
  /** Whether component is disabled */
  disabled?: boolean
  /** Whether component is loading */
  loading?: boolean
}

// Size interface
export interface Sizeable {
  /** Component size */
  size?: Size
  /** Whether component is full width */
  fullWidth?: boolean
}

// Variant interface
export interface Variantable {
  /** Component variant */
  variant?: Variant
  /** Component color */
  color?: Color
}

// Loading interface
export interface Loadable {
  /** Loading state */
  loading?: boolean
  /** Loading text */
  loadingText?: string
  /** Whether to disable when loading */
  disableOnLoading?: boolean
}

// Icon interface
export interface Iconable {
  /** Left icon */
  leftIcon?: React.ReactNode
  /** Right icon */
  rightIcon?: React.ReactNode
  /** Icon position */
  iconPosition?: IconPosition
  /** Icon content */
  icon?: React.ReactNode
}

// Status interface
export interface Statusable {
  /** Status type */
  status?: Status
  /** Whether to show status */
  showStatus?: boolean
}

// Style interface
export interface Stylable {
  /** Whether component is rounded */
  rounded?: boolean
  /** Whether component has shadow */
  elevated?: boolean
  /** Border radius */
  borderRadius?: BorderRadius
  /** Whether component has border */
  bordered?: boolean
}

// Form interface
export interface Formable {
  /** Field name */
  name?: string
  /** Field value */
  value?: unknown
  /** Change handler */
  onChange?: (value: unknown) => void
  /** Validation error */
  error?: string | boolean
  /** Helper text */
  helperText?: string
  /** Whether field is required */
  required?: boolean
}

// Accessibility interface
export interface Accessible {
  /** ARIA label */
  'aria-label'?: string
  /** ARIA description */
  'aria-describedby'?: string
  /** ARIA live region */
  'aria-live'?: 'off' | 'polite' | 'assertive'
  /** ARIA busy state */
  'aria-busy'?: boolean
  /** ARIA expanded state */
  'aria-expanded'?: boolean
  /** ARIA selected state */
  'aria-selected'?: boolean
  /** ARIA checked state */
  'aria-checked'?: boolean
  /** ARIA pressed state */
  'aria-pressed'?: boolean
  /** ARIA current state */
  'aria-current'?: boolean
}

// Utility types
export type ExtractComponentProps<T> = T extends React.ComponentType<infer P> ? P : never 