import * as React from "react"
import { cn } from "../../../lib/utils"

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
    const sizeClasses = {
      xs: 'h-3 w-3',
      sm: 'h-4 w-4',
      md: 'h-6 w-6',
      lg: 'h-8 w-8',
      xl: 'h-12 w-12',
    }

    const variantClasses = {
      default: 'text-muted-foreground',
      primary: 'text-primary',
      secondary: 'text-secondary-foreground',
      success: 'text-green-500',
      warning: 'text-yellow-500',
      error: 'text-red-500',
    }

    const textPositionClasses = {
      top: 'flex-col-reverse',
      bottom: 'flex-col',
      left: 'flex-row-reverse',
      right: 'flex-row',
    }

    const renderSpinner = () => {
      switch (type) {
        case 'dots':
          return (
            <div className="flex space-x-1">
              {[0, 1, 2].map((i) => (
                <div
                  key={i}
                  className={cn(
                    "rounded-full animate-pulse",
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
                "rounded-full animate-pulse",
                sizeClasses[size],
                variantClasses[variant]
              )}
            />
          )
        
        case 'bars':
          return (
            <div className="flex space-x-1">
              {[0, 1, 2, 3].map((i) => (
                <div
                  key={i}
                  className={cn(
                    "w-1 animate-pulse",
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
                "animate-spin rounded-full border-2 border-current border-t-transparent",
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
          "flex items-center justify-center",
          text && textPositionClasses[textPosition],
          className
        )}
        {...props}
      >
        {renderSpinner()}
        {text && (
          <span className={cn(
            "text-sm font-medium",
            variantClasses[variant],
            textPosition === 'top' || textPosition === 'bottom' ? 'mt-2' : 'ml-2'
          )}>
            {text}
          </span>
        )}
      </div>
    )

    if (overlay) {
      return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
          <div className="rounded-lg bg-white p-6 shadow-lg dark:bg-gray-800">
            {content}
            {overlayText && (
              <p className="mt-2 text-center text-sm text-gray-600 dark:text-gray-400">
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