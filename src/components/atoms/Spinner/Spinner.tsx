import * as React from "react"
import { cn } from "../../../lib/utils"
import { injectKeypixStyles } from "../../../lib/auto-styles"

export type SpinnerType = 'dots' | 'spinner' | 'pulse' | 'bars'

export interface SpinnerProps extends React.HTMLAttributes<HTMLDivElement> {
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl'
  variant?: 'default' | 'primary' | 'secondary' | 'success' | 'warning' | 'error'
  type?: SpinnerType
  text?: string
  textPosition?: 'top' | 'bottom' | 'left' | 'right'
  overlay?: boolean
  overlayText?: string
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
    }

    const variantClasses = {
      default: 'keypix-text-muted-foreground',
      primary: 'keypix-text-primary',
      secondary: 'keypix-text-secondary-foreground',
      success: 'keypix-text-green-500',
      warning: 'keypix-text-yellow-500',
      error: 'keypix-text-red-500',
    }

    const textPositionClasses = {
      top: 'keypix-flex-col-reverse',
      bottom: 'keypix-flex-col',
      left: 'keypix-flex-row-reverse',
      right: 'keypix-flex-row',
    }

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
                    variantClasses[variant]
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
                variantClasses[variant]
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
                    variantClasses[variant]
                  )}
                  style={{ 
                    animationDelay: `${i * 0.1}s`,
                    height: size === 'xs' ? '12px' : size === 'sm' ? '16px' : size === 'md' ? '24px' : size === 'lg' ? '32px' : '48px'
                  }}
                />
              ))}
            </div>
          )
        
        default:
          return (
            <div
              className={cn(
                "keypix-spinner",
                sizeClasses[size],
                variantClasses[variant]
              )}
            />
          )
      }
    }

    const content = (
      <div
        ref={ref}
        className={cn(
          "keypix-flex keypix-items-center keypix-justify-center",
          text && textPositionClasses[textPosition],
          className
        )}
        {...props}
      >
        {renderSpinner()}
        {text && (
          <span className={cn(
            "keypix-text-sm keypix-font-medium",
            variantClasses[variant],
            textPosition === 'top' || textPosition === 'bottom' ? 'keypix-mt-2' : 'keypix-ml-2'
          )}>
            {text}
          </span>
        )}
      </div>
    )

    if (overlay) {
      return (
        <div className="keypix-fixed keypix-inset-0 keypix-z-50 keypix-flex keypix-items-center keypix-justify-center keypix-bg-black/50">
          <div className="keypix-rounded-lg keypix-bg-white keypix-p-6 keypix-shadow-lg dark:keypix-bg-gray-800">
            {content}
            {overlayText && (
              <p className="keypix-mt-2 keypix-text-center keypix-text-sm keypix-text-gray-600 dark:keypix-text-gray-400">
                {overlayText}
              </p>
            )}
          </div>
        </div>
      )
    }

    return content
  }
)
Spinner.displayName = "Spinner"

export { Spinner } 