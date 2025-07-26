import * as React from "react"
import { cn } from "../../../lib/utils"
import { injectKeypixStyles } from "../../../lib/auto-styles"

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  /** Label for the input */
  label?: string
  /** Helper text below the input */
  helperText?: string
  /** Error state */
  error?: boolean
  /** Required field indicator */
  required?: boolean
  /** Left icon */
  leftIcon?: React.ReactNode
  /** Right icon */
  rightIcon?: React.ReactNode
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
  ...props
}, ref) => {
  // Inject styles on first render (optimized)
  React.useEffect(() => {
    injectKeypixStyles()
  }, [])

  const inputClasses = React.useMemo(() => cn(
    'keypix-input',
    error && 'keypix-border-destructive',
    leftIcon && 'keypix-pl-10',
    rightIcon && 'keypix-pr-10',
    className
  ), [error, leftIcon, rightIcon, className])

  return (
    <div className="keypix-relative">
      {label && (
        <label className="keypix-block keypix-text-sm keypix-font-medium keypix-text-foreground keypix-mb-2">
          {label}
          {required && <span className="keypix-text-destructive">*</span>}
        </label>
      )}
      <div className="keypix-relative">
        {leftIcon && (
          <div className="keypix-absolute keypix-left-3 keypix-top-1/2 keypix--translate-y-1/2 keypix-pointer-events-none">
            {leftIcon}
          </div>
        )}
        <input
          type={type}
          className={inputClasses}
          ref={ref}
          {...props}
        />
        {rightIcon && (
          <div className="keypix-absolute keypix-right-3 keypix-top-1/2 keypix--translate-y-1/2 keypix-pointer-events-none">
            {rightIcon}
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