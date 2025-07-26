import * as React from "react"
import { createPortal } from "react-dom"
import { cn } from "../../../lib/utils"
import { injectKeypixStyles } from "../../../lib/auto-styles"

export interface ModalProps extends React.HTMLAttributes<HTMLDivElement> {
  isOpen: boolean
  onClose: () => void
  title?: string
  description?: string
  size?: 'sm' | 'md' | 'lg' | 'xl' | 'full'
  closeOnOverlayClick?: boolean
  closeOnEscape?: boolean
}

const Modal = React.forwardRef<HTMLDivElement, ModalProps>(
  ({ 
    className, 
    isOpen, 
    onClose, 
    title, 
    description,
    size = 'md',
    closeOnOverlayClick = true,
    closeOnEscape = true,
    children, 
    ...props 
  }, ref) => {
    const [mounted, setMounted] = React.useState(false)

    // Inject styles on first render
    React.useEffect(() => {
      injectKeypixStyles()
    }, [])

    React.useEffect(() => {
      setMounted(true)
    }, [])

    React.useEffect(() => {
      if (!isOpen) return

      const handleEscape = (e: KeyboardEvent) => {
        if (e.key === 'Escape' && closeOnEscape) {
          onClose()
        }
      }

      document.addEventListener('keydown', handleEscape)
      document.body.style.overflow = 'hidden'

      return () => {
        document.removeEventListener('keydown', handleEscape)
        document.body.style.overflow = 'unset'
      }
    }, [isOpen, onClose, closeOnEscape])

    const handleOverlayClick = (e: React.MouseEvent) => {
      if (e.target === e.currentTarget && closeOnOverlayClick) {
        onClose()
      }
    }

    const sizeClasses = {
      sm: 'keypix-modal-sm',
      md: 'keypix-modal-md',
      lg: 'keypix-modal-lg',
      xl: 'keypix-modal-xl',
      full: 'keypix-modal-full',
    }

    if (!mounted || !isOpen) return null

    return createPortal(
      <div
        className="keypix-modal-overlay"
        onClick={handleOverlayClick}
      >
        <div
          ref={ref}
          className={cn(
            "keypix-modal-content",
            sizeClasses[size],
            className
          )}
          {...props}
        >
          {(title || description) && (
            <div className="keypix-modal-header">
              {title && (
                <h2 className="keypix-modal-title">
                  {title}
                </h2>
              )}
              {description && (
                <p className="keypix-modal-description">
                  {description}
                </p>
              )}
            </div>
          )}
          
          <div className="keypix-relative">
            {children}
          </div>

          <button
            onClick={onClose}
            className="keypix-modal-close"
          >
            <svg
              className="keypix-h-4 keypix-w-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
            <span className="keypix-sr-only">Close</span>
          </button>
        </div>
      </div>,
      document.body
    )
  }
)
Modal.displayName = "Modal"

export { Modal } 