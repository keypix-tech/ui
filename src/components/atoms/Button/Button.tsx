import * as React from "react"
import { cn } from "../../../lib/utils"
import { Spinner } from "../Spinner"
import { injectKeypixStyles } from "../../../lib/auto-styles"

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  /** Button variant */
  variant?: 'default' | 'secondary' | 'destructive' | 'outline' | 'ghost' | 'link' | 'success' | 'warning' | 'info'
  /** Button size */
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'icon'
  /** Loading state - shows spinner and disables button */
  loading?: boolean
  /** Text to show when loading */
  loadingText?: string
  /** Icon to show on the left side */
  leftIcon?: React.ReactNode
  /** Icon to show on the right side */
  rightIcon?: React.ReactNode
  /** Full width button */
  fullWidth?: boolean
  /** Disable button when loading */
  disableOnLoading?: boolean
  /** Accessible label for screen readers */
  ariaLabel?: string
  /** Description for screen readers */
  ariaDescription?: string
  /** Live region for dynamic content */
  ariaLive?: 'off' | 'polite' | 'assertive'
}

const Button = React.memo(React.forwardRef<HTMLButtonElement, ButtonProps>(({
  className,
  variant = "default",
  size = "md",
  loading = false,
  loadingText,
  leftIcon,
  rightIcon,
  fullWidth = false,
  disableOnLoading = true,
  disabled,
  children,
  ariaLabel,
  ariaDescription,
  ariaLive,
  ...props
}, ref) => {
  // Inject styles on first render (optimized)
  React.useEffect(() => {
    injectKeypixStyles()
  }, [])

  const isDisabled = disabled || (loading && disableOnLoading)
  const displayText = loading && loadingText ? loadingText : children
  const displayLeftIcon = loading ? <Spinner size="sm" className="keypix-mr-2" /> : leftIcon
  const displayRightIcon = loading ? null : rightIcon

  const buttonClasses = React.useMemo(() => cn(
    'keypix-button',
    `keypix-button-${variant}`,
    `keypix-button-${size}`,
    fullWidth && 'keypix-w-full',
    className
  ), [variant, size, fullWidth, className])

  // Accessibility attributes
  const accessibilityProps = {
    'aria-label': ariaLabel,
    'aria-describedby': ariaDescription ? `${props.id || 'button'}-description` : undefined,
    'aria-live': ariaLive,
    'aria-busy': loading,
    'aria-disabled': isDisabled,
    'role': 'button',
    'tabIndex': isDisabled ? -1 : 0,
  }

  return (
    <>
      <button
        className={buttonClasses}
        ref={ref}
        disabled={isDisabled}
        {...accessibilityProps}
        {...props}
      >
        {displayLeftIcon && (
          <span className="keypix-inline-flex keypix-items-center" aria-hidden="true">
            {displayLeftIcon}
          </span>
        )}
        {displayText && (
          <span className="keypix-inline-flex keypix-items-center">
            {displayText}
          </span>
        )}
        {displayRightIcon && (
          <span className="keypix-inline-flex keypix-items-center keypix-ml-2" aria-hidden="true">
            {displayRightIcon}
          </span>
        )}
      </button>
      {ariaDescription && (
        <div 
          id={`${props.id || 'button'}-description`} 
          className="keypix-sr-only"
          aria-live="polite"
        >
          {ariaDescription}
        </div>
      )}
    </>
  )
}))

Button.displayName = "Button"

export { Button } 