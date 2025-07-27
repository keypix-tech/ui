import * as React from "react"
import { cn } from "../../../lib/utils"
import { injectKeypixStyles } from "../../../lib/auto-styles"
import type { 
  Size, 
  Variant, 
  IconPosition 
} from "../../../types/unified"

export interface InputProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'prefix' | 'size'> {
  /** Label for the input */
  label?: string
  /** Helper text below the input */
  helperText?: string
  /** Error state */
  error?: boolean
  /** Required field indicator */
  required?: boolean
  /** Left icon (alias for leftIcon) */
  prefix?: React.ReactNode
  /** Right icon (alias for rightIcon) */
  suffix?: React.ReactNode
  /** Left icon */
  leftIcon?: React.ReactNode
  /** Right icon */
  rightIcon?: React.ReactNode
  /** Show clear button */
  clearable?: boolean
  /** Loading state */
  loading?: boolean
  /** On clear callback */
  onClear?: () => void
  /** Input size */
  size?: Size
  /** Input variant */
  variant?: Variant
  /** Input color */
  color?: 'primary' | 'secondary' | 'success' | 'warning' | 'error' | 'info' | 'muted'
  /** Whether input is rounded */
  rounded?: boolean
  /** Whether input has shadow */
  elevated?: boolean
  /** Icon position (alias for leftIcon/rightIcon) */
  iconPosition?: IconPosition
  /** Icon content (alias for leftIcon/rightIcon) */
  icon?: React.ReactNode
  /** Whether input is full width */
  fullWidth?: boolean
  /** Input border radius */
  borderRadius?: 'none' | 'sm' | 'md' | 'lg' | 'xl' | 'full'
  /** Input border width */
  borderWidth?: 'none' | 'thin' | 'normal' | 'thick'
  /** Input border color */
  borderColor?: 'primary' | 'secondary' | 'success' | 'warning' | 'error' | 'info' | 'muted'
  /** Whether input has border */
  bordered?: boolean
}

const Input = React.memo(React.forwardRef<HTMLInputElement, InputProps>(({
  className,
  type,
  label,
  helperText,
  error,
  required,
  leftIcon,
  rightIcon,
  prefix,
  suffix,
  clearable,
  loading,
  onClear,
  value,
  onChange,
  size = 'md',
  variant = 'default',
  color,
  rounded = false,
  elevated = false,
  iconPosition = 'left',
  icon,
  fullWidth = false,
  borderRadius = 'md',
  borderWidth = 'normal',
  borderColor,
  bordered = true,
  ...props
}, ref) => {
  // Inject styles on first render (optimized)
  React.useEffect(() => {
    injectKeypixStyles()
  }, [])

  // Use prefix/suffix as fallbacks for leftIcon/rightIcon
  const finalLeftIcon = leftIcon || prefix || (iconPosition === 'left' && icon ? icon : null)
  const finalRightIcon = rightIcon || suffix || (iconPosition === 'right' && icon ? icon : null)

  const inputClasses = React.useMemo(() => cn(
    'keypix-input',
    `keypix-input-${size}`,
    `keypix-input-${variant}`,
    color && `keypix-input-${color}`,
    error && 'keypix-border-destructive',
    finalLeftIcon && 'keypix-pl-10',
    (finalRightIcon || clearable) && 'keypix-pr-10',
    loading && 'keypix-opacity-50',
    rounded && 'keypix-rounded-full',
    elevated && 'keypix-shadow-md',
    fullWidth && 'keypix-w-full',
    `keypix-border-radius-${borderRadius}`,
    `keypix-border-width-${borderWidth}`,
    borderColor && `keypix-border-${borderColor}`,
    !bordered && 'keypix-border-none',
    className
  ), [
    size, variant, color, error, finalLeftIcon, finalRightIcon, clearable, loading, 
    rounded, elevated, fullWidth, borderRadius, borderWidth, borderColor, bordered, className
  ])

  const handleClear = React.useCallback(() => {
    if (onClear) {
      onClear()
    } else if (onChange) {
      // Create a synthetic event to clear the input
      const event = {
        target: { value: '' }
      } as React.ChangeEvent<HTMLInputElement>
      onChange(event)
    }
  }, [onClear, onChange])

  return (
    <div className="keypix-relative">
      {label && (
        <label className="keypix-block keypix-text-sm keypix-font-medium keypix-text-foreground keypix-mb-2">
          {label}
          {required && <span className="keypix-text-destructive">*</span>}
        </label>
      )}
      <div className="keypix-relative">
        {finalLeftIcon && (
          <div className="keypix-absolute keypix-left-3 keypix-top-1/2 keypix--translate-y-1/2 keypix-pointer-events-none">
            {finalLeftIcon}
          </div>
        )}
        <input
          type={type}
          className={inputClasses}
          ref={ref}
          value={value}
          onChange={onChange}
          disabled={loading || props.disabled}
          {...props}
        />
        {loading && (
          <div className="keypix-absolute keypix-right-3 keypix-top-1/2 keypix--translate-y-1/2 keypix-pointer-events-none">
            <div className="keypix-animate-spin keypix-w-4 keypix-h-4 keypix-border-2 keypix-border-gray-300 keypix-border-t-blue-600 keypix-rounded-full"></div>
          </div>
        )}
        {clearable && value && !loading && (
          <button
            type="button"
            onClick={handleClear}
            className="keypix-absolute keypix-right-3 keypix-top-1/2 keypix--translate-y-1/2 keypix-w-4 keypix-h-4 keypix-text-gray-400 hover:keypix-text-gray-600 keypix-transition-colors"
          >
            <svg className="keypix-w-full keypix-h-full" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
            </svg>
          </button>
        )}
        {finalRightIcon && !clearable && !loading && (
          <div className="keypix-absolute keypix-right-3 keypix-top-1/2 keypix--translate-y-1/2 keypix-pointer-events-none">
            {finalRightIcon}
          </div>
        )}
      </div>
      {helperText && (
        <p className={cn(
          "keypix-mt-2 keypix-text-sm",
          error ? "keypix-text-destructive" : "keypix-text-muted-foreground"
        )}>
          {helperText}
        </p>
      )}
    </div>
  )
}))

Input.displayName = "Input"

export { Input } 