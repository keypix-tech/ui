import { render, screen, act } from '@testing-library/react'
import '@testing-library/jest-dom'
import { ThemeProvider, useTheme } from '../components/providers'

const TestComponent = () => {
  const { theme, setTheme } = useTheme()
  return (
    <div>
      <span data-testid="current-theme">{theme}</span>
      <button onClick={() => setTheme('dark')}>Set Dark</button>
      <button onClick={() => setTheme('light')}>Set Light</button>
    </div>
  )
}

describe('ThemeProvider', () => {
  beforeEach(() => {
    localStorage.clear()
    document.documentElement.classList.remove('light', 'dark')
  })

  test('provides default theme', () => {
    render(
      <ThemeProvider>
        <TestComponent />
      </ThemeProvider>
    )
    
    expect(screen.getByTestId('current-theme')).toHaveTextContent('system')
  })

  test('applies theme class to document', () => {
    render(
      <ThemeProvider defaultTheme="dark">
        <TestComponent />
      </ThemeProvider>
    )
    
    expect(document.documentElement).toHaveClass('dark')
  })

  test('changes theme when setTheme is called', () => {
    render(
      <ThemeProvider>
        <TestComponent />
      </ThemeProvider>
    )
    
    const darkButton = screen.getByText('Set Dark')
    act(() => {
      darkButton.click()
    })
    
    expect(screen.getByTestId('current-theme')).toHaveTextContent('dark')
    expect(document.documentElement).toHaveClass('dark')
  })

  test('persists theme in localStorage', () => {
    render(
      <ThemeProvider>
        <TestComponent />
      </ThemeProvider>
    )
    
    const darkButton = screen.getByText('Set Dark')
    act(() => {
      darkButton.click()
    })
    
    expect(localStorage.getItem('keypix-ui-theme')).toBe('dark')
  })
}) 