import * as React from "react"
import { SearchBar } from "../../molecules/SearchBar"
import { Button } from "../../atoms/Button"
import { cn } from "../../../lib/utils"

export interface HeaderProps {
  title: string
  onSearch: (value: string) => void
  onLogin: () => void
  onSignup: () => void
  className?: string
  showSearch?: boolean
}

const Header = React.forwardRef<HTMLElement, HeaderProps>(
  ({ 
    title, 
    onSearch, 
    onLogin, 
    onSignup, 
    className,
    showSearch = true 
  }, ref) => {
    return (
      <header 
        ref={ref}
        className={cn(
          "px-6 py-4",
          className
        )}
      >
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center space-x-8">
            <h1 className="text-xl font-bold">{title}</h1>
            {showSearch && (
              <div className="w-96">
                <SearchBar 
                  placeholder="Search components..."
                  onSearch={onSearch}
                />
              </div>
            )}
          </div>
          
          <div className="flex items-center space-x-4">
            <Button 
              variant="ghost" 
              onClick={onLogin}
              size="sm"
            >
              Login
            </Button>
            <Button 
              onClick={onSignup}
              size="sm"
            >
              Sign Up
            </Button>
          </div>
        </div>
      </header>
    )
  }
)
Header.displayName = "Header"

export { Header } 