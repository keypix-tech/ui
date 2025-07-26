import * as React from "react"
import { cn } from "../../../lib/utils"
import { injectKeypixStyles } from "../../../lib/auto-styles"

export type AvatarStatus = 'online' | 'offline' | 'away' | 'busy'

export interface AvatarProps extends React.HTMLAttributes<HTMLDivElement> {
  src?: string
  alt?: string
  fallback?: string
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl'
  status?: AvatarStatus
  statusPosition?: 'top-right' | 'top-left' | 'bottom-right' | 'bottom-left'
  loading?: boolean
  bordered?: boolean
  ring?: boolean
  ringColor?: string
}

const Avatar = React.forwardRef<HTMLDivElement, AvatarProps>(
  ({ 
    className, 
    src, 
    alt, 
    fallback, 
    size = 'md', 
    status,
    statusPosition = 'bottom-right',
    loading = false,
    bordered = false,
    ring = false,
    ringColor = 'keypix-ring-2 keypix-ring-white dark:keypix-ring-gray-800',
    ...props 
  }, ref) => {
    // Inject styles on first render
    React.useEffect(() => {
      injectKeypixStyles()
    }, [])

    const [imageError, setImageError] = React.useState(false)
    
    const sizeClasses = {
      xs: 'keypix-h-6 keypix-w-6 keypix-text-xs',
      sm: 'keypix-h-8 keypix-w-8 keypix-text-xs',
      md: 'keypix-h-10 keypix-w-10 keypix-text-sm',
      lg: 'keypix-h-12 keypix-w-12 keypix-text-base',
      xl: 'keypix-h-16 keypix-w-16 keypix-text-lg',
      '2xl': 'keypix-h-20 keypix-w-20 keypix-text-xl',
    }

    const statusClasses = {
      online: 'keypix-bg-green-500',
      offline: 'keypix-bg-gray-400',
      away: 'keypix-bg-yellow-500',
      busy: 'keypix-bg-red-500',
    }

    const statusPositionClasses = {
      'top-right': 'keypix-top-0 keypix-right-0',
      'top-left': 'keypix-top-0 keypix-left-0',
      'bottom-right': 'keypix-bottom-0 keypix-right-0',
      'bottom-left': 'keypix-bottom-0 keypix-left-0',
    }

    const showImage = src && !imageError && !loading

    return (
      <div
        ref={ref}
        className={cn(
          "keypix-avatar",
          sizeClasses[size],
          bordered && "keypix-border-2 keypix-border-border",
          ring && ringColor,
          className
        )}
        {...props}
      >
        {loading ? (
          <div className="keypix-flex keypix-h-full keypix-w-full keypix-items-center keypix-justify-center keypix-rounded-full keypix-bg-muted keypix-animate-pulse">
            <div className="keypix-h-4 keypix-w-4 keypix-rounded-full keypix-bg-muted-foreground/20" />
          </div>
        ) : showImage ? (
          <img
            className="keypix-aspect-square keypix-h-full keypix-w-full keypix-object-cover"
            src={src}
            alt={alt}
            onError={() => setImageError(true)}
          />
        ) : (
          <div className="keypix-avatar-fallback">
            <span className="keypix-font-medium keypix-text-muted-foreground">
              {fallback ? fallback.charAt(0).toUpperCase() : 'U'}
            </span>
          </div>
        )}
        
        {status && (
          <div
            className={cn(
              "keypix-absolute keypix-h-3 keypix-w-3 keypix-rounded-full keypix-border-2 keypix-border-background",
              statusClasses[status],
              statusPositionClasses[statusPosition]
            )}
          />
        )}
      </div>
    )
  }
)
Avatar.displayName = "Avatar"

// Avatar Group Component
export interface AvatarGroupProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode
  max?: number
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl'
  spacing?: 'tight' | 'normal' | 'loose'
}

const AvatarGroup = React.forwardRef<HTMLDivElement, AvatarGroupProps>(
  ({ 
    className, 
    children, 
    max, 
    size = 'md',
    spacing = 'normal',
    ...props 
  }, ref) => {
    const avatars = React.Children.toArray(children)
    const displayAvatars = max ? avatars.slice(0, max) : avatars
    const remainingCount = max ? avatars.length - max : 0

    const spacingClasses = {
      tight: 'keypix--space-x-1',
      normal: 'keypix--space-x-2',
      loose: 'keypix--space-x-3',
    }

    return (
      <div
        ref={ref}
        className={cn("keypix-flex keypix-items-center", spacingClasses[spacing], className)}
        {...props}
      >
        {displayAvatars.map((avatar, index) => (
          <div key={index} className="keypix-relative">
            {React.cloneElement(avatar as React.ReactElement<AvatarProps>, { size })}
          </div>
        ))}
        {remainingCount > 0 && (
          <div className={cn(
            "keypix-relative keypix-flex keypix-items-center keypix-justify-center keypix-rounded-full keypix-bg-muted keypix-text-muted-foreground keypix-font-medium",
            size === 'xs' && 'keypix-h-6 keypix-w-6 keypix-text-xs',
            size === 'sm' && 'keypix-h-8 keypix-w-8 keypix-text-xs',
            size === 'md' && 'keypix-h-10 keypix-w-10 keypix-text-sm',
            size === 'lg' && 'keypix-h-12 keypix-w-12 keypix-text-base',
            size === 'xl' && 'keypix-h-16 keypix-w-16 keypix-text-lg',
            size === '2xl' && 'keypix-h-20 keypix-w-20 keypix-text-xl',
          )}>
            +{remainingCount}
          </div>
        )}
      </div>
    )
  }
)

AvatarGroup.displayName = "AvatarGroup"

export { Avatar, AvatarGroup } 