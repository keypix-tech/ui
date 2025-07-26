import * as React from "react"
import { cn } from "../../../lib/utils"
import { injectKeypixStyles } from "../../../lib/auto-styles"

export interface BadgeProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Badge variant */
  variant?: 'default' | 'secondary' | 'destructive' | 'outline' | 'success' | 'warning' | 'info'
  /** Badge size */
  size?: 'sm' | 'md' | 'lg'
  /** Icon to display before text */
  leftIcon?: React.ReactNode
  /** Icon to display after text */
  rightIcon?: React.ReactNode
  /** Removable badge with close button */
  removable?: boolean
  /** On remove callback */
  onRemove?: () => void
  /** Custom remove icon */
  removeIcon?: React.ReactNode
}

const Badge = React.forwardRef<HTMLDivElement, BadgeProps>(
  ({ 
    className, 
    variant = 'default', 
    size = 'md', 
    leftIcon,
    rightIcon,
    removable,
    onRemove,
    removeIcon,
    children,
    ...props 
  }, ref) => {
    // Inject styles on first render
    React.useEffect(() => {
      injectKeypixStyles()
    }, [])

    const handleRemove = (e: React.MouseEvent) => {
      e.stopPropagation()
      e.preventDefault()
      onRemove?.()
    }

    const defaultRemoveIcon = (
      <svg className="keypix-h-3 keypix-w-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
      </svg>
    )

    const badgeClasses = cn(
      'keypix-badge',
      `keypix-badge-${variant}`,
      `keypix-badge-${size}`,
      className
    )

    return (
      <div 
        className={badgeClasses} 
        ref={ref}
        {...props}
      >
        {leftIcon && (
          <span className="keypix-mr-1 keypix-inline-flex keypix-items-center">
            {leftIcon}
          </span>
        )}
        <span className="keypix-inline-flex keypix-items-center">
          {children}
        </span>
        {rightIcon && !removable && (
          <span className="keypix-ml-1 keypix-inline-flex keypix-items-center">
            {rightIcon}
          </span>
        )}
        {removable && (
          <button
            type="button"
            onClick={handleRemove}
            className="keypix-badge-remove"
            aria-label="Remove badge"
          >
            {removeIcon || defaultRemoveIcon}
          </button>
        )}
      </div>
    )
  }
)

Badge.displayName = "Badge"

export { Badge } 