// Unified common types for Keypix UI Library

import type { ReactNode, HTMLAttributes, ButtonHTMLAttributes, InputHTMLAttributes } from 'react'

// Unified size system
export type ComponentSize = 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl'

// Unified variant system
export type ComponentVariant = 
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
export type ComponentColor = 
  | 'primary' 
  | 'secondary' 
  | 'success' 
  | 'warning' 
  | 'error' 
  | 'info' 
  | 'muted'

// Unified icon positions
export type IconPosition = 'left' | 'right' | 'top' | 'bottom'

// Unified loading states
export type LoadingState = 'idle' | 'loading' | 'success' | 'error'

// Unified status types
export type StatusType = 'online' | 'offline' | 'away' | 'busy' | 'pending'

// Unified animation types
export type AnimationType = 'fade' | 'slide' | 'scale' | 'rotate' | 'bounce' | 'pulse'

// Unified position types
export type Position = 'top' | 'bottom' | 'left' | 'right' | 'center'

// Unified alignment types
export type Alignment = 'start' | 'center' | 'end' | 'stretch'

// Unified density types
export type Density = 'compact' | 'comfortable' | 'spacious'

// Unified border radius types
export type BorderRadius = 'none' | 'sm' | 'md' | 'lg' | 'xl' | 'full'

// Unified shadow types
export type Shadow = 'none' | 'sm' | 'md' | 'lg' | 'xl' | '2xl'

// Base component props that all components should extend
export interface BaseComponentProps extends HTMLAttributes<HTMLElement> {
  /** Unique identifier for the component */
  id?: string
  /** CSS class name */
  className?: string
  /** Inline styles */
  style?: React.CSSProperties
  /** Data attributes for testing */
  'data-testid'?: string
  /** Data attributes for automation */
  'data-automation'?: string
  /** Whether component is disabled */
  disabled?: boolean
  /** Whether component is loading */
  loading?: boolean
  /** Whether component is hidden from screen readers */
  'aria-hidden'?: boolean
  /** Custom aria label */
  'aria-label'?: string
  /** Custom aria description */
  'aria-describedby'?: string
  /** Custom aria labellby */
  'aria-labelledby'?: string
}

// Interactive component props
export interface InteractiveComponentProps extends BaseComponentProps {
  /** Click handler */
  onClick?: (event: React.MouseEvent) => void
  /** Focus handler */
  onFocus?: (event: React.FocusEvent) => void
  /** Blur handler */
  onBlur?: (event: React.FocusEvent) => void
  /** Mouse enter handler */
  onMouseEnter?: (event: React.MouseEvent) => void
  /** Mouse leave handler */
  onMouseLeave?: (event: React.MouseEvent) => void
  /** Key down handler */
  onKeyDown?: (event: React.KeyboardEvent) => void
  /** Key up handler */
  onKeyUp?: (event: React.KeyboardEvent) => void
}

// Form component props
export interface FormComponentProps extends InteractiveComponentProps {
  /** Form field name */
  name?: string
  /** Form field value */
  value?: unknown
  /** Change handler */
  onChange?: (value: unknown) => void
  /** Validation error */
  error?: string | boolean
  /** Helper text */
  helperText?: string
  /** Whether field is required */
  required?: boolean
  /** Whether field is read-only */
  readOnly?: boolean
  /** Whether field is auto-focused */
  autoFocus?: boolean
}

// Icon component props
export interface IconComponentProps {
  /** Icon content */
  icon?: ReactNode
  /** Icon position */
  position?: IconPosition
  /** Icon size */
  size?: ComponentSize
  /** Icon color */
  color?: ComponentColor
  /** Whether icon is clickable */
  clickable?: boolean
  /** Icon click handler */
  onIconClick?: () => void
}

// Loading component props
export interface LoadingComponentProps {
  /** Loading state */
  loading?: boolean
  /** Loading text */
  loadingText?: string
  /** Loading spinner size */
  spinnerSize?: ComponentSize
  /** Loading spinner variant */
  spinnerVariant?: ComponentVariant
  /** Whether to disable component when loading */
  disableOnLoading?: boolean
}

// Size component props
export interface SizeComponentProps {
  /** Component size */
  size?: ComponentSize
  /** Whether component is full width */
  fullWidth?: boolean
  /** Whether component is full height */
  fullHeight?: boolean
}

// Variant component props
export interface VariantComponentProps {
  /** Component variant */
  variant?: ComponentVariant
  /** Component color */
  color?: ComponentColor
}

// Status component props
export interface StatusComponentProps {
  /** Status type */
  status?: StatusType
  /** Whether to show status indicator */
  showStatus?: boolean
  /** Status position */
  statusPosition?: Position
}

// Animation component props
export interface AnimationComponentProps {
  /** Animation type */
  animation?: AnimationType
  /** Animation duration */
  animationDuration?: number
  /** Animation delay */
  animationDelay?: number
  /** Whether animation is enabled */
  animated?: boolean
}

// Layout component props
export interface LayoutComponentProps {
  /** Component alignment */
  align?: Alignment
  /** Component justify */
  justify?: Alignment
  /** Component direction */
  direction?: 'row' | 'column'
  /** Component gap */
  gap?: ComponentSize
  /** Component padding */
  padding?: ComponentSize
  /** Component margin */
  margin?: ComponentSize
}

// Border component props
export interface BorderComponentProps {
  /** Border radius */
  borderRadius?: BorderRadius
  /** Border width */
  borderWidth?: 'none' | 'thin' | 'normal' | 'thick'
  /** Border color */
  borderColor?: ComponentColor
  /** Whether component has border */
  bordered?: boolean
}

// Shadow component props
export interface ShadowComponentProps {
  /** Shadow type */
  shadow?: Shadow
  /** Whether component has shadow */
  elevated?: boolean
}

// Accessibility component props
export interface AccessibilityComponentProps {
  /** Role attribute */
  role?: string
  /** Tab index */
  tabIndex?: number
  /** Whether component is focusable */
  focusable?: boolean
  /** Live region */
  'aria-live'?: 'off' | 'polite' | 'assertive'
  /** Atomic live region */
  'aria-atomic'?: boolean
  /** Relevant live region */
  'aria-relevant'?: string
  /** Busy state */
  'aria-busy'?: boolean
  /** Expanded state */
  'aria-expanded'?: boolean
  /** Selected state */
  'aria-selected'?: boolean
  /** Checked state */
  'aria-checked'?: boolean
  /** Pressed state */
  'aria-pressed'?: boolean
  /** Current state */
  'aria-current'?: boolean
}

// Unified component props that combine all common props
export interface UnifiedComponentProps 
  extends BaseComponentProps,
          InteractiveComponentProps,
          SizeComponentProps,
          VariantComponentProps,
          LoadingComponentProps,
          IconComponentProps,
          StatusComponentProps,
          AnimationComponentProps,
          LayoutComponentProps,
          BorderComponentProps,
          ShadowComponentProps,
          AccessibilityComponentProps {}

// Button-specific props
export interface ButtonComponentProps extends UnifiedComponentProps, ButtonHTMLAttributes<HTMLButtonElement> {
  /** Button type */
  type?: 'button' | 'submit' | 'reset'
  /** Button form */
  form?: string
  /** Button form action */
  formAction?: string
  /** Button form method */
  formMethod?: 'get' | 'post'
  /** Button form target */
  formTarget?: string
  /** Button form encoding type */
  formEncType?: string
  /** Button form no validate */
  formNoValidate?: boolean
}

// Input-specific props
export interface InputComponentProps extends UnifiedComponentProps {
  /** Input type */
  type?: string
  /** Input placeholder */
  placeholder?: string
  /** Input pattern */
  pattern?: string
  /** Input min length */
  minLength?: number
  /** Input max length */
  maxLength?: number
  /** Input min value */
  min?: string | number
  /** Input max value */
  max?: string | number
  /** Input step */
  step?: string | number
  /** Input multiple */
  multiple?: boolean
  /** Input accept */
  accept?: string
  /** Input capture */
  capture?: string
  /** Input auto complete */
  autoComplete?: string
  /** Input auto correct */
  autoCorrect?: string
  /** Input auto capitalize */
  autoCapitalize?: string
  /** Input spell check */
  spellCheck?: boolean
  /** Input input mode */
  inputMode?: 'none' | 'text' | 'tel' | 'url' | 'email' | 'numeric' | 'decimal' | 'search'
  /** Input enter key hint */
  enterKeyHint?: 'enter' | 'done' | 'go' | 'next' | 'previous' | 'search' | 'send'
  /** Input read only */
  readOnly?: boolean
  /** Input required */
  required?: boolean
  /** Input disabled */
  disabled?: boolean
  /** Input auto focus */
  autoFocus?: boolean
  /** Input form */
  form?: string
  /** Input list */
  list?: string
  /** Input name */
  name?: string
  /** Input value */
  value?: string | number | readonly string[]
  /** Input default value */
  defaultValue?: string | number | readonly string[]
  /** Input checked */
  checked?: boolean
  /** Input default checked */
  defaultChecked?: boolean
  /** Input size */
  size?: number
  /** Input src */
  src?: string
  /** Input alt */
  alt?: string
  /** Input width */
  width?: number | string
  /** Input height */
  height?: number | string
  /** Input cross origin */
  crossOrigin?: string
  /** Input use map */
  useMap?: string
  /** Input form action */
  formAction?: string
  /** Input form encoding type */
  formEncType?: string
  /** Input form method */
  formMethod?: string
  /** Input form no validate */
  formNoValidate?: boolean
  /** Input form target */
  formTarget?: string
}

// Utility types for component composition
export type ComponentProps<T extends keyof JSX.IntrinsicElements> = 
  T extends 'button' ? ButtonComponentProps :
  T extends 'input' ? InputComponentProps :
  UnifiedComponentProps

// Utility type for extracting props from a component
export type ExtractComponentProps<T> = T extends React.ComponentType<infer P> ? P : never

// Utility type for making props optional
export type OptionalProps<T, K extends keyof T> = Omit<T, K> & Partial<Pick<T, K>>

// Utility type for making props required
export type RequiredProps<T, K extends keyof T> = T & Required<Pick<T, K>>

// Utility type for component variants
export type ComponentVariants<T extends string> = T | `${T}-${string}`

// Utility type for responsive values
export type ResponsiveValue<T> = T | Partial<Record<'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl', T>>

// Utility type for conditional props
export type ConditionalProps<T, Condition> = Condition extends true ? T : never 