import * as React from "react"
import { Input } from "../../atoms/Input"
import { Button } from "../../atoms/Button"
import { cn } from "../../../lib/utils"

export interface SearchBarProps {
  placeholder?: string
  onSearch: (value: string) => void
  className?: string
  disabled?: boolean
}

const SearchBar = React.forwardRef<HTMLDivElement, SearchBarProps>(
  ({ placeholder = "Search...", onSearch, className, disabled }, ref) => {
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
      <div ref={ref} className={cn("flex gap-2", className)}>
        <Input
          placeholder={placeholder}
          value={searchValue}
          onChange={(e) => setSearchValue(e.target.value)}
          onKeyPress={handleKeyPress}
          disabled={disabled}
          className="flex-1"
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