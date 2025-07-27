import * as React from "react"
import { cn } from "../../../lib/utils"
import { injectKeypixStyles } from "../../../lib/auto-styles"
import type { Size, Variant } from "../../../types/unified"

export type SpinnerType = 'dots' | 'spinner' | 'pulse' | 'bars'

export interface SpinnerProps extends React.HTMLAttributes<HTMLDivElement> {
  size?: Size
  variant?: Variant
  type?: SpinnerType
  text?: string
  textPosition?: 'top' | 'bottom' | 'left' | 'right'
  overlay?: boolean
  overlayText?: string
  /** Spinner color */
  color?: 'primary' | 'secondary' | 'success' | 'warning' | 'error' | 'info' | 'muted'
  /** Whether spinner is rounded */
  rounded?: boolean
  /** Whether spinner has shadow */
  elevated?: boolean
  /** Spinner border radius */
  borderRadius?: 'none' | 'sm' | 'md' | 'lg' | 'xl' | 'full'
  /** Whether spinner has border */
  bordered?: boolean
}

const Spinner = React.forwardRef<HTMLDivElement, SpinnerProps>(
  ({ 
    className, 
    size = 'md', 
    variant = 'default', 
    type = 'spinner',
    text,
    textPosition = 'bottom',
    overlay = false,
    overlayText,
    color,
    rounded = false,
    elevated = false,
    borderRadius = 'md',
    bordered = false,
    ...props 
  }, ref) => {
    // Inject styles on first render
    React.useEffect(() => {
      injectKeypixStyles()
    }, [])

    const sizeClasses = {
      xs: 'keypix-h-3 keypix-w-3',
      sm: 'keypix-h-4 keypix-w-4',
      md: 'keypix-h-6 keypix-w-6',
      lg: 'keypix-h-8 keypix-w-8',
      xl: 'keypix-h-12 keypix-w-12',
      '2xl': 'keypix-h-16 keypix-w-16',
    }

    const variantClasses = {
      default: 'keypix-text-muted-foreground',
      primary: 'keypix-text-primary',
      secondary: 'keypix-text-secondary-foreground',
      success: 'keypix-text-green-500',
      warning: 'keypix-text-yellow-500',
      error: 'keypix-text-red-500',
      destructive: 'keypix-text-red-500',
      outline: 'keypix-text-gray-500',
      ghost: 'keypix-text-gray-400',
      link: 'keypix-text-blue-500',
      info: 'keypix-text-blue-500',
    }

    const textPositionClasses = {
      top: 'keypix-flex-col-reverse',
      bottom: 'keypix-flex-col',
      left: 'keypix-flex-row-reverse',
      right: 'keypix-flex-row',
    }

    const spinnerClasses = cn(
      'keypix-spinner',
      `keypix-spinner-${type}`,
      `keypix-spinner-${size}`,
      variantClasses[variant],
      color && `keypix-spinner-${color}`,
      rounded && 'keypix-rounded-full',
      elevated && 'keypix-shadow-md',
      `keypix-border-radius-${borderRadius}`,
      bordered && 'keypix-border',
      className
    )

    const renderSpinner = () => {
      switch (type) {
        case 'dots':
          return (
            <div className="keypix-flex keypix-space-x-1">
              {[0, 1, 2].map((i) => (
                <div
                  key={i}
                  className={cn(
                    "keypix-rounded-full keypix-animate-pulse",
                    sizeClasses[size],
                    variantClasses[variant],
                    color && `keypix-spinner-${color}`
                  )}
                  style={{ animationDelay: `${i * 0.2}s` }}
                />
              ))}
            </div>
          )
        
        case 'pulse':
          return (
            <div
              className={cn(
                "keypix-rounded-full keypix-animate-pulse",
                sizeClasses[size],
                variantClasses[variant],
                color && `keypix-spinner-${color}`
              )}
            />
          )
        
        case 'bars':
          return (
            <div className="keypix-flex keypix-space-x-1">
              {[0, 1, 2, 3].map((i) => (
                <div
                  key={i}
                  className={cn(
                    "keypix-w-1 keypix-animate-pulse",
                    variantClasses[variant],
                    color && `keypix-spinner-${color}`
                  )}
                  style={{ 
                    animationDelay: `${i * 0.1}s`,
                    height: size === 'xs' ? '12px' : size === 'sm' ? '16px' : size === 'md' ? '24px' : size === 'lg' ? '32px' : size === 'xl' ? '48px' : '64px'
                  }}
                />
              ))}
            </div>
          )
        
        default:
          return (
            <div
              className={cn(
                "keypix-animate-spin keypix-border-2 keypix-border-current keypix-border-t-transparent keypix-rounded-full",
                sizeClasses[size],
                variantClasses[variant],
                color && `keypix-spinner-${color}`
              )}
            />
          )
      }
    }

    if (overlay) {
      return (
        <div className="keypix-fixed keypix-inset-0 keypix-bg-black keypix-bg-opacity-50 keypix-flex keypix-items-center keypix-justify-center keypix-z-50">
          <div className={cn("keypix-bg-white keypix-rounded-lg keypix-p-6 keypix-shadow-lg", spinnerClasses)}>
            {renderSpinner()}
            {overlayText && (
              <p className="keypix-mt-4 keypix-text-center keypix-text-sm keypix-text-gray-600">
                {overlayText}
              </p>
            )}
          </div>
        </div>
      )
    }

    if (text) {
      return (
        <div className={cn("keypix-flex keypix-items-center keypix-justify-center", textPositionClasses[textPosition])}>
          {renderSpinner()}
          <span className={cn(
            "keypix-text-sm keypix-text-gray-600",
            textPosition === 'top' && "keypix-mb-2",
            textPosition === 'bottom' && "keypix-mt-2",
            textPosition === 'left' && "keypix-mr-2",
            textPosition === 'right' && "keypix-ml-2"
          )}>
            {text}
          </span>
        </div>
      )
    }

    return (
      <div 
        className={spinnerClasses} 
        ref={ref}
        {...props}
      >
        {renderSpinner()}
      </div>
    )
  }
)

Spinner.displayName = "Spinner"

export { Spinner } 