import * as React from "react"
import { cn } from "../../../lib/utils"
import { Button } from "../../atoms/Button"
import { injectKeypixStyles } from "../../../lib/auto-styles"

export interface TimeChartData {
  id: string
  label: string
  color: string
  startTime: Date
  endTime: Date
  value?: number
  metadata?: Record<string, unknown>
}

export interface TimeChartEvent {
  id: string
  time: Date
  type: 'warning' | 'error' | 'info' | 'success'
  icon?: React.ReactNode
  label?: string
  description?: string
}

export interface TimeChartProps {
  /** Chart title or identifier */
  title?: string
  /** Time range to display */
  startDate: Date
  endDate: Date
  /** Data series to display */
  data: TimeChartData[]
  /** Events to mark on timeline */
  events?: TimeChartEvent[]
  /** Current time marker */
  currentTime?: Date
  /** Zoom level (1 = 1 hour per pixel) */
  zoom?: number
  /** Show summary panel */
  showSummary?: boolean
  /** Show zoom controls */
  showZoomControls?: boolean
  /** Show filter controls */
  showFilterControls?: boolean
  /** Custom actions */
  actions?: React.ReactNode
  /** On zoom change */
  onZoomChange?: (zoom: number) => void
  /** On data point click */
  onDataPointClick?: (data: TimeChartData) => void
  /** On event click */
  onEventClick?: (event: TimeChartEvent) => void
  /** Custom className */
  className?: string
}

const TimeChart = React.forwardRef<HTMLDivElement, TimeChartProps>(({
  title,
  startDate,
  endDate,
  data,
  events = [],
  currentTime,
  zoom = 1,
  showSummary = true,
  showZoomControls = true,
  showFilterControls = true,
  actions,
  onZoomChange,
  onDataPointClick,
  onEventClick,
  className,
  ...props
}, ref) => {
  // Inject styles on first render
  React.useEffect(() => {
    injectKeypixStyles()
  }, [])

  const [localZoom, setLocalZoom] = React.useState(zoom)
  const [filterActive, setFilterActive] = React.useState(false)
  const [isDragging, setIsDragging] = React.useState(false)
  const [dragStart, setDragStart] = React.useState(0)
  const [scrollLeft, setScrollLeft] = React.useState(0)
  const chartRef = React.useRef<HTMLDivElement>(null)

  const totalDuration = endDate.getTime() - startDate.getTime()

  // Calculate positions for data points with zoom
  const getTimePosition = (time: Date) => {
    const timeDiff = time.getTime() - startDate.getTime()
    const position = (timeDiff / totalDuration) * 100
    return Math.max(0, Math.min(100, position))
  }

  const getDuration = (start: Date, end: Date) => {
    const duration = end.getTime() - start.getTime()
    const hours = Math.floor(duration / (1000 * 60 * 60))
    const minutes = Math.floor((duration % (1000 * 60 * 60)) / (1000 * 60))
    return `${hours}h ${minutes.toString().padStart(2, '0')}m`
  }

  const handleZoomIn = () => {
    const newZoom = Math.min(localZoom * 1.5, 5)
    setLocalZoom(newZoom)
    onZoomChange?.(newZoom)
  }

  const handleZoomOut = () => {
    const newZoom = Math.max(localZoom / 1.5, 0.1)
    setLocalZoom(newZoom)
    onZoomChange?.(newZoom)
  }

  // Update local zoom when prop changes
  React.useEffect(() => {
    setLocalZoom(zoom)
  }, [zoom])

  // Generate time labels
  const timeLabels = React.useMemo(() => {
    const labels = []
    const current = new Date(startDate)
    const step = Math.max(1, Math.floor(24 / (totalDuration / (1000 * 60 * 60)))) // Adjust step based on duration
    
    while (current <= endDate) {
      labels.push({
        time: new Date(current),
        label: current.getHours() === 0 
          ? current.toLocaleDateString('en-US', { month: 'short', day: 'numeric' })
          : current.getHours().toString()
      })
      current.setHours(current.getHours() + step)
    }
    return labels
  }, [startDate, endDate, totalDuration])

  // Group data by label type
  const groupedData = React.useMemo(() => {
    const grouped: Record<string, typeof data> = {}
    
    data.forEach(series => {
      if (!grouped[series.label]) {
        grouped[series.label] = []
      }
      grouped[series.label].push(series)
    })
    
    return grouped
  }, [data])

  // Calculate total duration for each group
  const groupTotals = React.useMemo(() => {
    const totals: Record<string, string> = {}
    Object.keys(groupedData).forEach(label => {
      const totalDuration = groupedData[label].reduce((sum, series) => {
        return sum + (series.endTime.getTime() - series.startTime.getTime())
      }, 0)
      const hours = Math.floor(totalDuration / (1000 * 60 * 60))
      const minutes = Math.floor((totalDuration % (1000 * 60 * 60)) / (1000 * 60))
      totals[label] = `${hours}h ${minutes.toString().padStart(2, '0')}m`
    })
    return totals
  }, [groupedData])

  // Get event color based on type
  const getEventColor = (type: string) => {
    switch (type) {
      case 'warning': return '#f59e0b' // Amber
      case 'error': return '#ef4444' // Red
      case 'info': return '#3b82f6' // Blue
      case 'success': return '#10b981' // Green
      default: return '#ef4444' // Red
    }
  }

  // Get gradient for data bars
  const getGradientId = (color: string, id: string) => {
    return `gradient-${id}`
  }

  const chartClasses = cn(
    'keypix-time-chart',
    'keypix-bg-white keypix-border keypix-border-gray-200 keypix-rounded-xl keypix-shadow-lg keypix-overflow-hidden',
    className
  )

  return (
    <div ref={ref} className={chartClasses} {...props}>
      {/* Header Controls */}
      <div className="keypix-flex keypix-items-center keypix-justify-between keypix-p-6 keypix-border-b keypix-border-gray-100 keypix-bg-gradient-to-r keypix-from-gray-50 keypix-to-white">
        <div className="keypix-flex keypix-items-center keypix-gap-6">
          {showZoomControls && (
            <div className="keypix-flex keypix-items-center keypix-gap-3 keypix-bg-white keypix-rounded-lg keypix-shadow-sm keypix-border keypix-border-gray-200 keypix-p-1">
              <Button
                size="sm"
                variant="ghost"
                onClick={handleZoomOut}
                className="keypix-w-8 keypix-h-8 keypix-p-0 keypix-rounded-md hover:keypix-bg-gray-100"
              >
                <span className="keypix-text-lg keypix-font-bold">−</span>
              </Button>
              <span className="keypix-text-sm keypix-font-mono keypix-min-w-[70px] keypix-text-center keypix-text-gray-700 keypix-font-semibold">
                {localZoom.toFixed(2)}x
              </span>
              <Button
                size="sm"
                variant="ghost"
                onClick={handleZoomIn}
                className="keypix-w-8 keypix-h-8 keypix-p-0 keypix-rounded-md hover:keypix-bg-gray-100"
              >
                <span className="keypix-text-lg keypix-font-bold">+</span>
              </Button>
            </div>
          )}
          
          {title && (
            <div className="keypix-text-xl keypix-font-bold keypix-text-gray-900 keypix-tracking-tight">
              {title}
            </div>
          )}
        </div>

        <div className="keypix-flex keypix-items-center keypix-gap-3">
          {showFilterControls && (
            <Button
              size="sm"
              variant={filterActive ? "default" : "outline"}
              onClick={() => setFilterActive(!filterActive)}
              className={cn(
                "keypix-relative keypix-transition-all keypix-duration-200",
                filterActive && "keypix-bg-blue-600 keypix-text-white keypix-shadow-md"
              )}
            >
              <span className="keypix-mr-2">🔍</span>
              FILTER
              {filterActive && (
                <span className="keypix-absolute -keypix-top-2 -keypix-right-2 keypix-w-5 keypix-h-5 keypix-bg-green-500 keypix-rounded-full keypix-text-xs keypix-text-white keypix-flex keypix-items-center keypix-justify-center keypix-font-bold keypix-shadow-sm">
                  1
                </span>
              )}
            </Button>
          )}
          
          {actions}
        </div>
      </div>

      {/* Chart Area */}
      <div className="keypix-flex keypix-overflow-hidden keypix-h-[500px]">
        {/* Fixed Legend Panel */}
        <div className="keypix-w-32 keypix-border-r keypix-border-gray-100 keypix-bg-gradient-to-b keypix-from-gray-50 keypix-to-white">
          {/* Legend Header */}
          <div className="keypix-p-4 keypix-border-b keypix-border-gray-100">
            <div className="keypix-text-sm keypix-font-bold keypix-text-gray-900 keypix-uppercase keypix-tracking-wide">
              Legend
            </div>
          </div>
          
          {/* Legend Items */}
          <div className="keypix-p-4 keypix-space-y-6">
            {Object.keys(groupedData).map((label) => {
              const series = groupedData[label][0] // Use first series for color
              
              return (
                <div key={label} className="keypix-flex keypix-items-center keypix-justify-center">
                  <div className="keypix-flex keypix-items-center keypix-gap-3">
                    <div 
                      className="keypix-w-5 keypix-h-5 keypix-rounded-lg keypix-shadow-md keypix-flex-shrink-0"
                      style={{ 
                        background: `linear-gradient(135deg, ${series.color}, ${series.color}dd)`,
                        boxShadow: `0 2px 8px ${series.color}40`
                      }}
                    />
                    <span 
                      className="keypix-text-sm keypix-font-bold keypix-uppercase keypix-tracking-wide"
                      style={{ color: series.color }}
                    >
                      {label}
                    </span>
                  </div>
                </div>
              )
            })}
          </div>
        </div>

        {/* Scrollable Chart Content */}
        <div className="keypix-flex-1 keypix-overflow-hidden">
          <div 
            ref={chartRef}
            className="keypix-relative keypix-overflow-x-auto keypix-cursor-grab active:keypix-cursor-grabbing keypix-h-full keypix-bg-gradient-to-b keypix-from-gray-50 keypix-to-white"
            onMouseDown={(e) => {
              setIsDragging(true)
              setDragStart(e.pageX - (chartRef.current?.offsetLeft || 0))
              setScrollLeft(chartRef.current?.scrollLeft || 0)
            }}
            onMouseMove={(e) => {
              if (!isDragging) return
              e.preventDefault()
              const x = e.pageX - (chartRef.current?.offsetLeft || 0)
              const walk = (x - dragStart) * 2
              if (chartRef.current) {
                chartRef.current.scrollLeft = scrollLeft - walk
              }
            }}
            onMouseUp={() => setIsDragging(false)}
            onMouseLeave={() => setIsDragging(false)}
          >
            <div className="keypix-min-w-full keypix-p-6" style={{ minWidth: `${Math.max(800, 800 * localZoom)}px` }}>
              {/* Time Labels */}
              <div className="keypix-flex keypix-mb-4 keypix-border-b keypix-border-gray-200 keypix-bg-white keypix-rounded-t-lg keypix-shadow-sm">
                {timeLabels.map((label, index) => (
                  <div
                    key={index}
                    className="keypix-flex-1 keypix-text-center keypix-text-xs keypix-text-gray-600 keypix-font-bold keypix-border-r keypix-border-gray-100 keypix-last:keypix-border-r-0 keypix-py-3 keypix-bg-gradient-to-b keypix-from-gray-50 keypix-to-white"
                    style={{ minWidth: `${Math.max(80, 80 * localZoom)}px` }}
                  >
                    {label.label}
                  </div>
                ))}
              </div>

              {/* Data Rows */}
              <div className="keypix-space-y-4">
                {Object.keys(groupedData).map((label) => {
                  return (
                    <div key={label} className="keypix-flex keypix-items-center keypix-h-12">
                      {/* Timeline SVG */}
                      <div className="keypix-flex-1 keypix-relative keypix-h-full keypix-bg-white keypix-rounded-lg keypix-border keypix-border-gray-200 keypix-shadow-md keypix-overflow-hidden">
                        <svg 
                          className="keypix-w-full keypix-h-full" 
                          role="img" 
                          aria-label={`${label} activity timeline`}
                          preserveAspectRatio="none"
                        >
                          {/* Define gradients for each data series */}
                          <defs>
                            {groupedData[label].map((seriesItem) => (
                              <linearGradient
                                key={`gradient-${seriesItem.id}`}
                                id={getGradientId(seriesItem.color, seriesItem.id)}
                                x1="0%" y1="0%" x2="100%" y2="100%"
                              >
                                <stop offset="0%" stopColor={seriesItem.color} stopOpacity="0.9" />
                                <stop offset="100%" stopColor={seriesItem.color} stopOpacity="0.7" />
                              </linearGradient>
                            ))}
                          </defs>

                          {/* Data Bars */}
                          {groupedData[label].map((seriesItem) => {
                            const startPos = getTimePosition(seriesItem.startTime)
                            const endPos = getTimePosition(seriesItem.endTime)
                            const width = endPos - startPos
                            
                            return (
                              <g key={seriesItem.id}>
                                {/* Background shadow */}
                                <rect
                                  x={`${startPos + 0.5}%`}
                                  y="3"
                                  width={`${width - 1}%`}
                                  height="calc(100% - 6px)"
                                  fill="rgba(0,0,0,0.1)"
                                  rx="6"
                                  ry="6"
                                />
                                
                                {/* Main bar */}
                                <rect
                                  x={`${startPos}%`}
                                  y="2"
                                  width={`${width}%`}
                                  height="calc(100% - 4px)"
                                  fill={`url(#${getGradientId(seriesItem.color, seriesItem.id)})`}
                                  rx="6"
                                  ry="6"
                                  role="img"
                                  aria-label={`${label} activity from ${seriesItem.startTime.toLocaleTimeString()} to ${seriesItem.endTime.toLocaleTimeString()}`}
                                  className="keypix-cursor-pointer keypix-transition-all keypix-duration-200 hover:keypix-opacity-80"
                                  onClick={() => onDataPointClick?.(seriesItem)}
                                  style={{ minWidth: '6px' }}
                                  stroke={seriesItem.color}
                                  strokeWidth="1"
                                  strokeOpacity="0.3"
                                />
                                
                                {/* Duration Label */}
                                {seriesItem.startTime && seriesItem.endTime && width > 10 && (
                                  <text
                                    x={`${startPos + width/2}%`}
                                    y="65%"
                                    fontSize="10"
                                    fontFamily="system-ui, -apple-system, sans-serif"
                                    fill="white"
                                    fontWeight="700"
                                    textAnchor="middle"
                                    role="text"
                                    aria-label={`Duration: ${getDuration(seriesItem.startTime, seriesItem.endTime)}`}
                                    className="keypix-drop-shadow-lg"
                                  >
                                    {getDuration(seriesItem.startTime, seriesItem.endTime)}
                                  </text>
                                )}
                              </g>
                            )
                          })}

                          {/* Current Time Marker */}
                          {currentTime && (
                            <g>
                              <line
                                x1={`${getTimePosition(currentTime)}%`}
                                y1="0"
                                x2={`${getTimePosition(currentTime)}%`}
                                y2="100%"
                                stroke="#10b981"
                                strokeWidth="3"
                                strokeDasharray="6,6"
                                role="img"
                                aria-label="Current time marker"
                                className="keypix-drop-shadow-lg"
                              />
                              <circle
                                cx={`${getTimePosition(currentTime)}%`}
                                cy="50%"
                                r="6"
                                fill="#10b981"
                                stroke="white"
                                strokeWidth="2"
                                role="img"
                                aria-label="Current time indicator"
                              />
                            </g>
                          )}
                        </svg>
                      </div>
                    </div>
                  )
                })}
              </div>

              {/* Events Row - Bottom */}
              <div className="keypix-flex keypix-items-center keypix-h-10 keypix-mt-6">
                <div className="keypix-flex-1 keypix-relative keypix-h-full keypix-bg-white keypix-rounded-lg keypix-border keypix-border-gray-200 keypix-shadow-md keypix-overflow-hidden">
                  <svg 
                    className="keypix-w-full keypix-h-full" 
                    role="img" 
                    aria-label="Events timeline"
                    preserveAspectRatio="none"
                  >
                    {/* Events */}
                    {events.map((event) => {
                      const eventPos = getTimePosition(event.time)
                      const eventColor = getEventColor(event.type)
                      
                      return (
                        <g key={event.id}>
                          {/* Event shadow */}
                          <circle
                            cx={`${eventPos}%`}
                            cy="50%"
                            r="10"
                            fill="rgba(0,0,0,0.2)"
                            role="img"
                            aria-label={`${event.label}: ${event.description}`}
                            className="keypix-cursor-pointer keypix-transition-all keypix-duration-200"
                            onClick={() => onEventClick?.(event)}
                          />
                          
                          {/* Event circle */}
                          <circle
                            cx={`${eventPos}%`}
                            cy="50%"
                            r="8"
                            fill="white"
                            stroke={eventColor}
                            strokeWidth="2"
                            role="img"
                            aria-label={`${event.label}: ${event.description}`}
                            className="keypix-cursor-pointer keypix-transition-all keypix-duration-200 hover:keypix-scale-110"
                            onClick={() => onEventClick?.(event)}
                          />
                          
                          {/* Event icon/text */}
                          <text
                            x={`${eventPos}%`}
                            y="58%"
                            textAnchor="middle"
                            fontSize="12"
                            fill={eventColor}
                            fontWeight="700"
                            role="text"
                            aria-label={`Event icon: ${event.icon}`}
                          >
                            {event.icon || '!'}
                          </text>
                        </g>
                      )
                    })}

                    {/* Current Time Marker */}
                    {currentTime && (
                      <g>
                        <line
                          x1={`${getTimePosition(currentTime)}%`}
                          y1="0"
                          x2={`${getTimePosition(currentTime)}%`}
                          y2="100%"
                          stroke="#10b981"
                          strokeWidth="2"
                          strokeDasharray="4,4"
                          role="img"
                          aria-label="Current time marker"
                        />
                        <circle
                          cx={`${getTimePosition(currentTime)}%`}
                          cy="50%"
                          r="4"
                          fill="#10b981"
                          stroke="white"
                          strokeWidth="1"
                          role="img"
                          aria-label="Current time indicator"
                        />
                      </g>
                    )}
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Summary Panel - Right Side */}
        {showSummary && (
          <div className="keypix-w-36 keypix-border-l keypix-border-gray-100 keypix-bg-gradient-to-b keypix-from-gray-50 keypix-to-white">
            {/* Summary Header */}
            <div className="keypix-p-4 keypix-border-b keypix-border-gray-100">
              <div className="keypix-text-sm keypix-font-bold keypix-text-gray-900 keypix-uppercase keypix-tracking-wide">
                Summary
              </div>
            </div>
            
            {/* Summary Items */}
            <div className="keypix-p-4 keypix-space-y-6">
              {Object.keys(groupedData).map((label) => {
                const series = groupedData[label][0] // Use first series for color
                
                return (
                  <div key={label} className="keypix-text-center keypix-bg-white keypix-rounded-lg keypix-p-3 keypix-shadow-sm keypix-border keypix-border-gray-100">
                    <div 
                      className="keypix-text-lg keypix-font-bold keypix-font-mono"
                      style={{ color: series.color }}
                    >
                      {groupTotals[label]}
                    </div>
                    <div className="keypix-text-xs keypix-text-gray-500 keypix-mt-1 keypix-font-medium">
                      {groupedData[label].reduce((sum, s) => sum + (s.value || 0), 0).toFixed(2)}
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        )}
      </div>
    </div>
  )
})

TimeChart.displayName = "TimeChart"

export { TimeChart } 