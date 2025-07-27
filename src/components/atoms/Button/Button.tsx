import * as React from "react"
import { cn } from "../../../lib/utils"
import { Spinner } from "../Spinner"
import { injectKeypixStyles } from "../../../lib/auto-styles"
import { createButtonAria, createScreenReaderText } from "../../../lib/accessibility"
import type { 
  Size, 
  Variant, 
  IconPosition,
  BaseComponent,
  Sizeable,
  Variantable,
  Loadable,
  Iconable,
  Stylable,
  Accessible
} from "../../../types/unified"

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  /** Button variant */
  variant?: Variant
  /** Button size */
  size?: Size
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
  /** Icon position (alias for leftIcon/rightIcon) */
  iconPosition?: IconPosition
  /** Icon content (alias for leftIcon/rightIcon) */
  icon?: React.ReactNode
  /** Whether button is rounded */
  rounded?: boolean
  /** Whether button has shadow */
  elevated?: boolean
  /** Button color */
  color?: 'primary' | 'secondary' | 'success' | 'warning' | 'error' | 'info' | 'muted'
  /** Button pressed state */
  pressed?: boolean
  /** Button expanded state */
  expanded?: boolean
  /** Button has popup */
  hasPopup?: boolean | 'menu' | 'listbox' | 'tree' | 'grid' | 'dialog'
  /** Button controls element */
  controls?: string
  /** Screen reader only text */
  srText?: string
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
  iconPosition = 'left',
  icon,
  rounded = false,
  elevated = false,
  color,
  pressed,
  expanded,
  hasPopup,
  controls,
  srText,
  ...props
}, ref) => {
  // Inject styles on first render (optimized)
  React.useEffect(() => {
    injectKeypixStyles()
  }, [])

  // Determine icon based on iconPosition and icon prop
  const finalLeftIcon = iconPosition === 'left' && icon ? icon : leftIcon
  const finalRightIcon = iconPosition === 'right' && icon ? icon : rightIcon

  const isDisabled = disabled || (loading && disableOnLoading)
  const displayText = loading && loadingText ? loadingText : children
  const displayLeftIcon = loading ? <Spinner size="sm" className="keypix-mr-2" /> : finalLeftIcon
  const displayRightIcon = loading ? null : finalRightIcon

  const buttonClasses = React.useMemo(() => cn(
    'keypix-button',
    `keypix-button-${variant}`,
    `keypix-button-${size}`,
    color && `keypix-button-${color}`,
    fullWidth && 'keypix-w-full',
    rounded && 'keypix-rounded-full',
    elevated && 'keypix-shadow-md',
    className
  ), [variant, size, color, fullWidth, rounded, elevated, className])

  // Enhanced accessibility attributes
  const ariaProps = createButtonAria({
    label: loading ? 'Loading...' : ariaLabel,
    description: ariaDescription,
    pressed,
    expanded,
    hasPopup,
    controls,
    disabled: isDisabled,
    loading,
    busy: loading
  })

  // Merge with existing props
  const accessibilityProps = {
    ...ariaProps,
    'aria-live': ariaLive || ariaProps['aria-live'],
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
          <span 
            className="keypix-inline-flex keypix-items-center" 
            aria-hidden="true"
            role="img"
            aria-label="Left icon"
          >
            {displayLeftIcon}
          </span>
        )}
        {displayText && (
          <span className="keypix-inline-flex keypix-items-center">
            {displayText}
          </span>
        )}
        {displayRightIcon && (
          <span 
            className="keypix-inline-flex keypix-items-center keypix-ml-2" 
            aria-hidden="true"
            role="img"
            aria-label="Right icon"
          >
            {displayRightIcon}
          </span>
        )}
        {srText ? createScreenReaderText(srText) : null}
      </button>
      {ariaDescription && (
        <div 
          id={ariaProps['aria-describedby']} 
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