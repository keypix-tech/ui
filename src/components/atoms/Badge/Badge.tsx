import * as React from "react"
import { type VariantProps } from "class-variance-authority"
import { cn } from "../../../lib/utils"
import { badgeVariants } from "./badgeVariants"

export interface BadgeProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof badgeVariants> {
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
    variant, 
    size, 
    leftIcon,
    rightIcon,
    removable,
    onRemove,
    removeIcon,
    children,
    ...props 
  }, ref) => {
    const handleRemove = (e: React.MouseEvent) => {
      e.stopPropagation()
      e.preventDefault()
      onRemove?.()
    }

    const defaultRemoveIcon = (
      <svg className="h-3 w-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
      </svg>
    )

    return (
      <div 
        className={cn(badgeVariants({ variant, size }), className)} 
        ref={ref}
        {...props}
      >
        {leftIcon && (
          <span className="mr-1 inline-flex items-center">
            {leftIcon}
          </span>
        )}
        <span className="inline-flex items-center">
          {children}
        </span>
        {rightIcon && !removable && (
          <span className="ml-1 inline-flex items-center">
            {rightIcon}
          </span>
        )}
        {removable && (
          <button
            type="button"
            onClick={handleRemove}
            className="ml-1 inline-flex items-center rounded-full p-0.5 hover:bg-black/10 dark:hover:bg-white/10 focus:outline-none focus:bg-black/10 dark:focus:bg-white/10 transition-colors"
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