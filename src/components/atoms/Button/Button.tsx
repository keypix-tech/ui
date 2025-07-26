import * as React from "react"
import { type VariantProps } from "class-variance-authority"
import { cn } from "../../../lib/utils"
import { buttonVariants } from "./buttonVariants"
import { Spinner } from "../Spinner"

export interface ButtonProps 
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  /** Loading state - shows spinner and disables button */
  loading?: boolean
  /** Icon to display before text */
  leftIcon?: React.ReactNode
  /** Icon to display after text */
  rightIcon?: React.ReactNode
  /** Full width button */
  fullWidth?: boolean
  /** Loading text when in loading state */
  loadingText?: string
  /** Disable button when loading */
  disableOnLoading?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ 
    className, 
    variant, 
    size, 
    loading = false,
    leftIcon,
    rightIcon,
    fullWidth = false,
    loadingText,
    disableOnLoading = true,
    disabled,
    children,
    ...props 
  }, ref) => {
    const isDisabled = disabled || (loading && disableOnLoading)
    const displayText = loading && loadingText ? loadingText : children
    const displayLeftIcon = loading ? <Spinner size="sm" className="mr-2" /> : leftIcon
    const displayRightIcon = loading ? null : rightIcon

    return (
      <button
        className={cn(
          buttonVariants({ variant, size }),
          fullWidth && "w-full",
          loading && "cursor-not-allowed",
          className
        )}
        ref={ref}
        disabled={isDisabled}
        aria-disabled={isDisabled}
        aria-busy={loading}
        {...props}
      >
        {displayLeftIcon && (
          <span className="inline-flex items-center">
            {displayLeftIcon}
          </span>
        )}
        {displayText && (
          <span className="inline-flex items-center">
            {displayText}
          </span>
        )}
        {displayRightIcon && (
          <span className="inline-flex items-center ml-2">
            {displayRightIcon}
          </span>
        )}
      </button>
    )
  }
)
Button.displayName = "Button"

export { Button } 