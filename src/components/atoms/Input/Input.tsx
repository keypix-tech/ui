import * as React from "react"
import { cn } from "../../../lib/utils"
import { Spinner } from "../Spinner"

export interface InputProps
  extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'prefix'> {
  /** Error state */
  error?: boolean
  /** Helper text below input */
  helperText?: string
  /** Label for the input */
  label?: string
  /** Required field indicator */
  required?: boolean
  /** Loading state */
  loading?: boolean
  /** Prefix element (icon, text, etc.) */
  prefix?: React.ReactNode
  /** Suffix element (icon, text, etc.) */
  suffix?: React.ReactNode
  /** Clear button functionality */
  clearable?: boolean
  /** On clear callback */
  onClear?: () => void
  /** Input wrapper className */
  wrapperClassName?: string
  /** Label className */
  labelClassName?: string
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ 
    className, 
    type, 
    error, 
    helperText, 
    label,
    required,
    loading,
    prefix,
    suffix,
    clearable,
    onClear,
    wrapperClassName,
    labelClassName,
    id,
    value,
    defaultValue,
    onChange,
    ...props 
  }, ref) => {
    const inputId = React.useId()
    const finalId = id || inputId
    const [internalValue, setInternalValue] = React.useState(defaultValue || '')
    const isControlled = value !== undefined
    const currentValue = isControlled ? value : internalValue
    const [showClear, setShowClear] = React.useState(false)

    React.useEffect(() => {
      setShowClear(String(currentValue).length > 0)
    }, [currentValue])

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      if (!isControlled) {
        setInternalValue(e.target.value)
      }
      setShowClear(e.target.value.length > 0)
      onChange?.(e)
    }

    const handleClear = () => {
      if (!isControlled) {
        setInternalValue('')
      }
      setShowClear(false)
      onClear?.()
      
      // Create synthetic event for controlled components
      if (onChange) {
        const syntheticEvent = {
          target: { value: '' },
          currentTarget: { value: '' }
        } as React.ChangeEvent<HTMLInputElement>
        onChange(syntheticEvent)
      }
    }

    const displaySuffix = loading ? (
      <Spinner size="sm" className="text-muted-foreground" />
    ) : (
      <>
        {suffix}
        {clearable && showClear && (
          <button
            type="button"
            onClick={handleClear}
            className="ml-2 p-1 text-muted-foreground hover:text-foreground focus:outline-none focus:text-foreground transition-colors"
            aria-label="Clear input"
          >
            <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        )}
      </>
    )

    const hasSuffix = suffix || loading || (clearable && showClear)

    return (
      <div className={cn("space-y-2", wrapperClassName)}>
        {label && (
          <label 
            htmlFor={finalId}
            className={cn(
              "block text-sm font-medium text-foreground",
              labelClassName
            )}
          >
            {label}
            {required && <span className="text-destructive ml-1">*</span>}
          </label>
        )}
        <div className="relative">
          {prefix && (
            <div className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground pointer-events-none">
              {prefix}
            </div>
          )}
          <input
            id={finalId}
            type={type}
            className={cn(
              "flex h-10 w-full rounded-md border bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 transition-colors",
              prefix && "pl-10",
              hasSuffix && "pr-10",
              error 
                ? "border-destructive focus-visible:ring-destructive" 
                : "border-input focus-visible:ring-ring",
              className
            )}
            ref={ref}
            value={isControlled ? value : undefined}
            defaultValue={!isControlled ? defaultValue : undefined}
            onChange={handleChange}
            aria-invalid={error}
            aria-describedby={helperText ? `${finalId}-helper` : undefined}
            {...props}
          />
          {hasSuffix && (
            <div className="absolute right-3 top-1/2 -translate-y-1/2 flex items-center">
              {displaySuffix}
            </div>
          )}
        </div>
        {helperText && (
          <p 
            id={`${finalId}-helper`}
            className={cn(
              "text-xs",
              error ? "text-destructive" : "text-muted-foreground"
            )}
          >
            {helperText}
          </p>
        )}
      </div>
    )
  }
)
Input.displayName = "Input"

export { Input } 