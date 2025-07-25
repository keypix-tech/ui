import * as React from "react"
import { Input } from "../../atoms/Input"
import { Button } from "../../atoms/Button"
import { cn } from "../../../lib/utils"

export interface SearchBarProps {
  placeholder?: string
  onSearch?: (value: string) => void
  className?: string
}

const SearchBar = React.forwardRef<HTMLDivElement, SearchBarProps>(
  ({ placeholder = "Search...", onSearch, className }, ref) => {
    const [value, setValue] = React.useState("")

    const handleSearch = () => {
      onSearch?.(value)
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
          value={value}
          onChange={(e) => setValue(e.target.value)}
          onKeyPress={handleKeyPress}
          className="flex-1"
        />
        <Button onClick={handleSearch} size="sm">
          Search
        </Button>
      </div>
    )
  }
)
SearchBar.displayName = "SearchBar"

export { SearchBar } 