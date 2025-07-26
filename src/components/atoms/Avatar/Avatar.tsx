import * as React from "react"
import { cn } from "../../../lib/utils"

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
    ringColor = 'ring-2 ring-white dark:ring-gray-800',
    ...props 
  }, ref) => {
    const [imageError, setImageError] = React.useState(false)
    
    const sizeClasses = {
      xs: 'h-6 w-6 text-xs',
      sm: 'h-8 w-8 text-xs',
      md: 'h-10 w-10 text-sm',
      lg: 'h-12 w-12 text-base',
      xl: 'h-16 w-16 text-lg',
      '2xl': 'h-20 w-20 text-xl',
    }

    const statusClasses = {
      online: 'bg-green-500',
      offline: 'bg-gray-400',
      away: 'bg-yellow-500',
      busy: 'bg-red-500',
    }

    const statusPositionClasses = {
      'top-right': 'top-0 right-0',
      'top-left': 'top-0 left-0',
      'bottom-right': 'bottom-0 right-0',
      'bottom-left': 'bottom-0 left-0',
    }

    const showImage = src && !imageError && !loading

    return (
      <div
        ref={ref}
        className={cn(
          "relative flex shrink-0 overflow-hidden rounded-full",
          sizeClasses[size],
          bordered && "border-2 border-border",
          ring && ringColor,
          className
        )}
        {...props}
      >
        {loading ? (
          <div className="flex h-full w-full items-center justify-center rounded-full bg-muted animate-pulse">
            <div className="h-4 w-4 rounded-full bg-muted-foreground/20" />
          </div>
        ) : showImage ? (
          <img
            className="aspect-square h-full w-full object-cover"
            src={src}
            alt={alt}
            onError={() => setImageError(true)}
          />
        ) : (
          <div className="flex h-full w-full items-center justify-center rounded-full bg-muted">
            <span className="font-medium text-muted-foreground">
              {fallback ? fallback.charAt(0).toUpperCase() : 'U'}
            </span>
          </div>
        )}
        
        {status && (
          <div
            className={cn(
              "absolute h-3 w-3 rounded-full border-2 border-background",
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
      tight: '-space-x-1',
      normal: '-space-x-2',
      loose: '-space-x-3',
    }

    return (
      <div
        ref={ref}
        className={cn("flex items-center", spacingClasses[spacing], className)}
        {...props}
      >
        {displayAvatars.map((avatar, index) => (
          <div key={index} className="relative">
            {React.cloneElement(avatar as React.ReactElement<AvatarProps>, { size })}
          </div>
        ))}
        {remainingCount > 0 && (
          <div className={cn(
            "relative flex items-center justify-center rounded-full bg-muted text-muted-foreground font-medium",
            size === 'xs' && 'h-6 w-6 text-xs',
            size === 'sm' && 'h-8 w-8 text-xs',
            size === 'md' && 'h-10 w-10 text-sm',
            size === 'lg' && 'h-12 w-12 text-base',
            size === 'xl' && 'h-16 w-16 text-lg',
            size === '2xl' && 'h-20 w-20 text-xl',
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