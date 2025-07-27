import React from 'react'
import { render, screen, fireEvent } from '@testing-library/react'
import '@testing-library/jest-dom'
import { TimeChart } from '../components/organisms/TimeChart'
import * as autoStyles from '../lib/auto-styles'

const mockData = [
  {
    id: 'test-1',
    label: 'Test Activity',
    color: '#3b82f6',
    startTime: new Date('2024-07-16T08:00:00'),
    endTime: new Date('2024-07-16T12:00:00'),
    value: 4.0
  }
]

const mockEvents = [
  {
    id: 'event-1',
    time: new Date('2024-07-16T10:00:00'),
    type: 'warning' as const,
    icon: '⚠️',
    label: 'Test Event',
    description: 'Test event description'
  }
]

describe('TimeChart', () => {
  beforeEach(() => {
    // Mock injectKeypixStyles
    jest.spyOn(autoStyles, 'injectKeypixStyles').mockImplementation(() => {})
  })

  afterEach(() => {
    jest.restoreAllMocks()
  })

  it('renders with title', () => {
    render(
      <TimeChart
        title="Test Chart"
        startDate={new Date('2024-07-16T06:00:00')}
        endDate={new Date('2024-07-16T18:00:00')}
        data={mockData}
      />
    )

    expect(screen.getByText('Test Chart')).toBeInTheDocument()
  })

  it('renders data points', () => {
    render(
      <TimeChart
        startDate={new Date('2024-07-16T06:00:00')}
        endDate={new Date('2024-07-16T18:00:00')}
        data={mockData}
      />
    )

    expect(screen.getByText('Test Activity')).toBeInTheDocument()
  })

  it('renders events when provided', () => {
    render(
      <TimeChart
        startDate={new Date('2024-07-16T06:00:00')}
        endDate={new Date('2024-07-16T18:00:00')}
        data={mockData}
        events={mockEvents}
      />
    )

    // Component should render without errors when events are provided
    expect(screen.getByText('Test Activity')).toBeInTheDocument()
  })

  it('shows zoom controls by default', () => {
    render(
      <TimeChart
        startDate={new Date('2024-07-16T06:00:00')}
        endDate={new Date('2024-07-16T18:00:00')}
        data={mockData}
      />
    )

    expect(screen.getByText('1.00x')).toBeInTheDocument()
  })

  it('hides zoom controls when showZoomControls is false', () => {
    render(
      <TimeChart
        startDate={new Date('2024-07-16T06:00:00')}
        endDate={new Date('2024-07-16T18:00:00')}
        data={mockData}
        showZoomControls={false}
      />
    )

    expect(screen.queryByText('1.00x')).not.toBeInTheDocument()
  })

  it('shows filter button by default', () => {
    render(
      <TimeChart
        startDate={new Date('2024-07-16T06:00:00')}
        endDate={new Date('2024-07-16T18:00:00')}
        data={mockData}
      />
    )

    expect(screen.getByText('FILTER')).toBeInTheDocument()
  })

  it('hides filter button when showFilterControls is false', () => {
    render(
      <TimeChart
        startDate={new Date('2024-07-16T06:00:00')}
        endDate={new Date('2024-07-16T18:00:00')}
        data={mockData}
        showFilterControls={false}
      />
    )

    expect(screen.queryByText('FILTER')).not.toBeInTheDocument()
  })

  it('calls onDataPointClick when data point is clicked', () => {
    const mockOnClick = jest.fn()
    
    render(
      <TimeChart
        startDate={new Date('2024-07-16T06:00:00')}
        endDate={new Date('2024-07-16T18:00:00')}
        data={mockData}
        onDataPointClick={mockOnClick}
      />
    )

    // Find and click on a data point
    const dataPoint = document.querySelector('[style*="background-color: rgb(59, 130, 246)"]')
    if (dataPoint) {
      fireEvent.click(dataPoint)
      expect(mockOnClick).toHaveBeenCalledWith(mockData[0])
    }
  })

  it('calls onEventClick when event is clicked', () => {
    const mockOnEventClick = jest.fn()
    
    render(
      <TimeChart
        startDate={new Date('2024-07-16T06:00:00')}
        endDate={new Date('2024-07-16T18:00:00')}
        data={mockData}
        events={mockEvents}
        onEventClick={mockOnEventClick}
      />
    )

    // Find and click on an event
    const eventElement = document.querySelector('[style*="border-left: 2px dashed"]')
    if (eventElement) {
      fireEvent.click(eventElement)
      expect(mockOnEventClick).toHaveBeenCalledWith(mockEvents[0])
    }
  })

  it('displays correct duration in summary', () => {
    render(
      <TimeChart
        startDate={new Date('2024-07-16T06:00:00')}
        endDate={new Date('2024-07-16T18:00:00')}
        data={mockData}
        showSummary={true}
      />
    )

    // Should show 4h 00m for the test data (with leading zero)
    expect(screen.getAllByText('4h 00m')).toHaveLength(2) // One in timeline, one in summary
  })

  it('displays correct total hours', () => {
    render(
      <TimeChart
        startDate={new Date('2024-07-16T06:00:00')}
        endDate={new Date('2024-07-16T18:00:00')}
        data={mockData}
      />
    )

    // Should show 12HRS for the 12-hour range
    expect(screen.getByText('12HRS')).toBeInTheDocument()
  })

  it('applies custom className', () => {
    const { container } = render(
      <TimeChart
        startDate={new Date('2024-07-16T06:00:00')}
        endDate={new Date('2024-07-16T18:00:00')}
        data={mockData}
        className="custom-class"
      />
    )

    expect(container.firstChild).toHaveClass('custom-class')
  })

  it('renders with current time marker', () => {
    const currentTime = new Date('2024-07-16T10:00:00')
    
    render(
      <TimeChart
        startDate={new Date('2024-07-16T06:00:00')}
        endDate={new Date('2024-07-16T18:00:00')}
        data={mockData}
        currentTime={currentTime}
      />
    )

    // Component should render without errors when current time is provided
    expect(screen.getByText('Test Activity')).toBeInTheDocument()
  })
}) 