import * as React from "react"
import { cn } from "../../../lib/utils"
import { Button } from "../../atoms/Button"
import { Input } from "../../atoms/Input"
import { Spinner } from "../../atoms/Spinner"
import { injectKeypixStyles } from "../../../lib/auto-styles"

export interface Column<T> {
  key: keyof T
  title: string
  sortable?: boolean
  render?: (value: T[keyof T], row: T) => React.ReactNode
  width?: string
}

export interface DataTableProps<T> {
  data: T[]
  columns: Column<T>[]
  loading?: boolean
  searchable?: boolean
  sortable?: boolean
  pagination?: boolean
  pageSize?: number
  onRowClick?: (row: T) => void
  className?: string
}

export function DataTable<T extends Record<string, unknown>>({
  data,
  columns,
  loading = false,
  searchable = false,
  sortable = false,
  pagination = false,
  pageSize = 10,
  onRowClick,
  className,
}: DataTableProps<T>) {
  // Inject styles on first render
  React.useEffect(() => {
    injectKeypixStyles()
  }, [])

  const [searchTerm, setSearchTerm] = React.useState("")
  const [sortColumn, setSortColumn] = React.useState<keyof T | null>(null)
  const [sortDirection, setSortDirection] = React.useState<"asc" | "desc">("asc")
  const [currentPage, setCurrentPage] = React.useState(1)

  // Filter data based on search term
  const filteredData = React.useMemo(() => {
    if (!searchTerm) return data
    
    return data.filter((row) =>
      Object.values(row).some((value) =>
        String(value).toLowerCase().includes(searchTerm.toLowerCase())
      )
    )
  }, [data, searchTerm])

  // Sort data
  const sortedData = React.useMemo(() => {
    if (!sortColumn || !sortable) return filteredData

    return [...filteredData].sort((a, b) => {
      const aValue = a[sortColumn]
      const bValue = b[sortColumn]

      if (aValue < bValue) return sortDirection === "asc" ? -1 : 1
      if (aValue > bValue) return sortDirection === "asc" ? 1 : -1
      return 0
    })
  }, [filteredData, sortColumn, sortDirection, sortable])

  // Paginate data
  const paginatedData = React.useMemo(() => {
    if (!pagination) return sortedData

    const startIndex = (currentPage - 1) * pageSize
    const endIndex = startIndex + pageSize
    return sortedData.slice(startIndex, endIndex)
  }, [sortedData, pagination, currentPage, pageSize])

  const totalPages = Math.ceil(sortedData.length / pageSize)

  const handleSort = (column: keyof T) => {
    if (!sortable) return

    if (sortColumn === column) {
      setSortDirection(sortDirection === "asc" ? "desc" : "asc")
    } else {
      setSortColumn(column)
      setSortDirection("asc")
    }
  }

  const handleRowClick = (row: T) => {
    if (onRowClick) {
      onRowClick(row)
    }
  }

  if (loading) {
    return (
      <div className="keypix-data-table-loading">
        <Spinner size="lg" />
      </div>
    )
  }

  return (
    <div className={cn("keypix-data-table", className)}>
      {/* Search */}
      {searchable && (
        <div className="keypix-data-table-search">
          <Input
            placeholder="Search..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="keypix-max-w-sm"
          />
        </div>
      )}

      {/* Table */}
      <div className="keypix-data-table-container">
        <div className="keypix-data-table-wrapper">
          <table className="keypix-data-table-table">
            <thead className="keypix-data-table-thead">
              <tr>
                {columns.map((column) => (
                  <th
                    key={String(column.key)}
                    className={cn(
                      "keypix-data-table-th",
                      column.sortable && sortable && "keypix-data-table-th-sortable",
                      column.width
                    )}
                    onClick={() => handleSort(column.key)}
                  >
                    <div className="keypix-data-table-th-content">
                      <span>{column.title}</span>
                      {column.sortable && sortable && sortColumn === column.key && (
                        <span className="keypix-data-table-sort-icon">
                          {sortDirection === "asc" ? "↑" : "↓"}
                        </span>
                      )}
                    </div>
                  </th>
                ))}
              </tr>
            </thead>
            <tbody className="keypix-data-table-tbody">
              {paginatedData.length === 0 ? (
                <tr>
                  <td
                    colSpan={columns.length}
                    className="keypix-data-table-empty"
                  >
                    No data found
                  </td>
                </tr>
              ) : (
                paginatedData.map((row, rowIndex) => (
                  <tr
                    key={rowIndex}
                    className={cn(
                      "keypix-data-table-tr",
                      onRowClick && "keypix-data-table-tr-clickable"
                    )}
                    onClick={() => handleRowClick(row)}
                  >
                    {columns.map((column) => (
                      <td key={String(column.key)} className="keypix-data-table-td">
                        {column.render
                          ? column.render(row[column.key], row)
                          : String(row[column.key] ?? "")}
                      </td>
                    ))}
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </div>

      {/* Pagination */}
      {pagination && totalPages > 1 && (
        <div className="keypix-data-table-pagination">
          <div className="keypix-data-table-pagination-info">
            Showing {((currentPage - 1) * pageSize) + 1} to{" "}
            {Math.min(currentPage * pageSize, sortedData.length)} of{" "}
            {sortedData.length} results
          </div>
          <div className="keypix-data-table-pagination-controls">
            <Button
              variant="outline"
              size="sm"
              onClick={() => setCurrentPage(currentPage - 1)}
              disabled={currentPage === 1}
            >
              Previous
            </Button>
            <div className="keypix-data-table-pagination-pages">
              {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                <Button
                  key={page}
                  variant={currentPage === page ? "default" : "outline"}
                  size="sm"
                  onClick={() => setCurrentPage(page)}
                  className="keypix-data-table-pagination-page"
                >
                  {page}
                </Button>
              ))}
            </div>
            <Button
              variant="outline"
              size="sm"
              onClick={() => setCurrentPage(currentPage + 1)}
              disabled={currentPage === totalPages}
            >
              Next
            </Button>
          </div>
        </div>
      )}
    </div>
  )
} 