import * as React from "react"
import { Button } from "../../atoms/Button"
import { SearchBar } from "../../molecules/SearchBar"
import { cn } from "../../../lib/utils"

export interface HeaderProps {
  title?: string
  onSearch?: (value: string) => void
  onLogin?: () => void
  onSignup?: () => void
  className?: string
}

const Header = React.forwardRef<HTMLElement, HeaderProps>(
  ({ title = "KeyPix UI", onSearch, onLogin, onSignup, className }, ref) => {
    return (
      <header ref={ref} className={cn("bg-white border-b border-gray-200 px-6 py-4", className)}>
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-8">
            <h1 className="text-xl font-bold text-gray-900">{title}</h1>
            {onSearch && (
              <SearchBar 
                placeholder="Search..." 
                onSearch={onSearch}
                className="w-80"
              />
            )}
          </div>
          
          <div className="flex items-center gap-4">
            {onLogin && (
              <Button variant="ghost" onClick={onLogin}>
                Login
              </Button>
            )}
            {onSignup && (
              <Button onClick={onSignup}>
                Sign Up
              </Button>
            )}
          </div>
        </div>
      </header>
    )
  }
)
Header.displayName = "Header"

export { Header } 