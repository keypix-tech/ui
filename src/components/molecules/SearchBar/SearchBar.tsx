import * as React from "react"
import { Input } from "../../atoms/Input"
import { Button } from "../../atoms/Button"
import { cn } from "../../../lib/utils"
import { injectKeypixStyles } from "../../../lib/auto-styles"

export interface SearchBarProps {
  placeholder?: string
  onSearch: (value: string) => void
  className?: string
  disabled?: boolean
}

const SearchBar = React.forwardRef<HTMLDivElement, SearchBarProps>(
  ({ placeholder = "Search...", onSearch, className, disabled }, ref) => {
    // Inject styles on first render
    React.useEffect(() => {
      injectKeypixStyles()
    }, [])

    const [searchValue, setSearchValue] = React.useState("")

    const handleSearch = () => {
      onSearch(searchValue)
    }

    const handleKeyPress = (e: React.KeyboardEvent) => {
      if (e.key === "Enter") {
        handleSearch()
      }
    }

    return (
      <div ref={ref} className={cn("keypix-flex keypix-gap-2", className)}>
        <Input
          placeholder={placeholder}
          value={searchValue}
          onChange={(e) => setSearchValue(e.target.value)}
          onKeyPress={handleKeyPress}
          disabled={disabled}
          className="keypix-flex-1"
        />
        <Button 
          onClick={handleSearch}
          disabled={disabled || !searchValue.trim()}
          size="md"
        >
          Search
        </Button>
      </div>
    )
  }
)
SearchBar.displayName = "SearchBar"

export { SearchBar } 