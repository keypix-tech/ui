import { render, screen, fireEvent, waitFor } from '@testing-library/react'
import { ThemeProvider } from '../components/providers/ThemeProvider'
import {
  useFormState,
  useLoadingState,
  useVisibilityState,
  useSelectionState,
  useComponentState
} from '../lib/unified-hooks'
import {
  createComponentClasses,
  createComponentStyles,
  validateComponentProps,
  validationRules,
  createAccessibilityProps,
  generateId,
  createEventHandlers,
  processIconProps,
  renderIcon
} from '../lib/unified-utils'
import type {
  ButtonAPI,
  InputAPI,
  BadgeAPI,
  DataTableAPI,
  TimeChartAPI
} from '../types/unified-api'

// Test component that uses unified API
const TestForm = () => {
  const form = useFormState(
    { email: '', password: '', confirmPassword: '' },
    {
      email: (value) => !value ? 'Email is required' : validationRules.email(value),
      password: validationRules.minLength(6),
      confirmPassword: (value, allValues) => 
        value !== allValues.password ? 'Passwords must match' : undefined
    }
  )

  const { loading, withLoading } = useLoadingState()
  const { visible, show, hide } = useVisibilityState()
  const { selection, select, deselect } = useSelectionState<string>()
  const { state, setState } = useComponentState({ theme: 'light', language: 'en' })

  const handleSubmit = async () => {
    await withLoading(async () => {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 100))
      console.log('Form submitted:', form.values)
    })
  }

  return (
    <div>
      <input
        data-testid="email"
        value={form.values.email}
        onChange={(e) => form.setFieldValue('email', e.target.value)}
        onBlur={() => form.setFieldTouched('email')}
      />
      {form.errors.email && <span data-testid="email-error">{form.errors.email}</span>}

      <input
        data-testid="password"
        type="password"
        value={form.values.password}
        onChange={(e) => form.setFieldValue('password', e.target.value)}
        onBlur={() => form.setFieldTouched('password')}
      />
      {form.errors.password && <span data-testid="password-error">{form.errors.password}</span>}

      <input
        data-testid="confirm-password"
        type="password"
        value={form.values.confirmPassword}
        onChange={(e) => form.setFieldValue('confirmPassword', e.target.value)}
        onBlur={() => form.setFieldTouched('confirmPassword')}
      />
      {form.errors.confirmPassword && <span data-testid="confirm-password-error">{form.errors.confirmPassword}</span>}

      <button
        data-testid="submit"
        onClick={handleSubmit}
        disabled={loading || !form.isValid}
      >
        {loading ? 'Submitting...' : 'Submit'}
      </button>

      <button data-testid="toggle-visibility" onClick={visible ? hide : show}>
        {visible ? 'Hide' : 'Show'} Content
      </button>

      {visible && <div data-testid="content">Visible Content</div>}

      <div data-testid="selection">
        {['item1', 'item2', 'item3'].map(item => (
          <button
            key={item}
            data-testid={`select-${item}`}
            onClick={() => selection.includes(item) ? deselect(item) : select(item)}
          >
            {selection.includes(item) ? 'Deselect' : 'Select'} {item}
          </button>
        ))}
        <div data-testid="selected-items">
          Selected: {selection.join(', ')}
        </div>
      </div>

      <div data-testid="component-state">
        <button data-testid="change-theme" onClick={() => setState({ theme: state.theme === 'light' ? 'dark' : 'light' })}>
          Toggle Theme
        </button>
        <span data-testid="current-theme">{state.theme}</span>
      </div>
    </div>
  )
}

// Test component that uses unified utilities
const TestComponent = () => {
  const buttonClasses = createComponentClasses('button', {
    size: 'md',
    variant: 'primary',
    color: 'success',
    rounded: true,
    elevated: true,
    disabled: false,
    loading: false
  })

  const buttonStyles = createComponentStyles({
    size: 'md',
    borderRadius: 'lg',
    shadow: 'md',
    fullWidth: true
  })

  const ariaProps = createAccessibilityProps({
    'aria-label': 'Test button',
    'aria-describedby': 'button-description',
    'aria-live': 'polite'
  })

  const eventHandlers = createEventHandlers({
    onClick: () => console.log('Button clicked'),
    onFocus: () => console.log('Button focused'),
    disabled: false,
    loading: false
  })

  const iconProps = processIconProps({
    leftIcon: '📧',
    rightIcon: '→',
    icon: '🔍',
    iconPosition: 'left'
  })

  return (
    <div>
      <button
        className={buttonClasses}
        style={buttonStyles}
        {...ariaProps}
        {...eventHandlers}
        data-testid="test-button"
      >
        {iconProps.leftIcon && <span data-testid="left-icon">{iconProps.leftIcon}</span>}
        Test Button
        {iconProps.rightIcon && <span data-testid="right-icon">{iconProps.rightIcon}</span>}
      </button>

      <div id="button-description">This is a test button</div>
    </div>
  )
}

describe('Unified API Integration', () => {
  describe('Form with unified hooks', () => {
    it('should handle form validation correctly', async () => {
      render(
        <ThemeProvider>
          <TestForm />
        </ThemeProvider>
      )

      // Test email validation
      const emailInput = screen.getByTestId('email')
      fireEvent.change(emailInput, { target: { value: 'invalid-email' } })
      fireEvent.blur(emailInput)

      await waitFor(() => {
        expect(screen.getByTestId('email-error')).toHaveTextContent('Please enter a valid email address')
      })

      // Test password validation
      const passwordInput = screen.getByTestId('password')
      fireEvent.change(passwordInput, { target: { value: '123' } })
      fireEvent.blur(passwordInput)

      await waitFor(() => {
        expect(screen.getByTestId('password-error')).toHaveTextContent('Must be at least 6 characters')
      })

      // Test password confirmation
      const confirmPasswordInput = screen.getByTestId('confirm-password')
      fireEvent.change(confirmPasswordInput, { target: { value: 'different' } })
      fireEvent.blur(confirmPasswordInput)

      await waitFor(() => {
        expect(screen.getByTestId('confirm-password-error')).toHaveTextContent('Passwords must match')
      })
    })

    it('should handle form submission with loading state', async () => {
      render(
        <ThemeProvider>
          <TestForm />
        </ThemeProvider>
      )

      // Fill form with valid data
      fireEvent.change(screen.getByTestId('email'), { target: { value: 'test@example.com' } })
      fireEvent.change(screen.getByTestId('password'), { target: { value: 'password123' } })
      fireEvent.change(screen.getByTestId('confirm-password'), { target: { value: 'password123' } })

      const submitButton = screen.getByTestId('submit')
      expect(submitButton).not.toBeDisabled()

      fireEvent.click(submitButton)

      await waitFor(() => {
        expect(screen.getByTestId('submit')).toHaveTextContent('Submitting...')
      })

      await waitFor(() => {
        expect(screen.getByTestId('submit')).toHaveTextContent('Submit')
      })
    })

    it('should handle visibility state', () => {
      render(
        <ThemeProvider>
          <TestForm />
        </ThemeProvider>
      )

      const toggleButton = screen.getByTestId('toggle-visibility')
      expect(screen.queryByTestId('content')).not.toBeInTheDocument()

      fireEvent.click(toggleButton)
      expect(screen.getByTestId('content')).toBeInTheDocument()
      expect(toggleButton).toHaveTextContent('Hide Content')

      fireEvent.click(toggleButton)
      expect(screen.queryByTestId('content')).not.toBeInTheDocument()
      expect(toggleButton).toHaveTextContent('Show Content')
    })

    it('should handle selection state', () => {
      render(
        <ThemeProvider>
          <TestForm />
        </ThemeProvider>
      )

      const selectItem1 = screen.getByTestId('select-item1')
      const selectItem2 = screen.getByTestId('select-item2')

      fireEvent.click(selectItem1)
      expect(screen.getByTestId('selected-items')).toHaveTextContent('Selected: item1')

      fireEvent.click(selectItem2)
      expect(screen.getByTestId('selected-items')).toHaveTextContent('Selected: item1, item2')

      fireEvent.click(selectItem1) // Deselect
      expect(screen.getByTestId('selected-items')).toHaveTextContent('Selected: item2')
    })

    it('should handle component state', () => {
      render(
        <ThemeProvider>
          <TestForm />
        </ThemeProvider>
      )

      const changeThemeButton = screen.getByTestId('change-theme')
      expect(screen.getByTestId('current-theme')).toHaveTextContent('light')

      fireEvent.click(changeThemeButton)
      expect(screen.getByTestId('current-theme')).toHaveTextContent('dark')

      fireEvent.click(changeThemeButton)
      expect(screen.getByTestId('current-theme')).toHaveTextContent('light')
    })
  })

  describe('Component with unified utilities', () => {
    it('should apply unified classes and styles', () => {
      render(
        <ThemeProvider>
          <TestComponent />
        </ThemeProvider>
      )

      const button = screen.getByTestId('test-button')
      
      // Check that classes are applied
      expect(button.className).toContain('button')
      expect(button.className).toContain('button-md')
      expect(button.className).toContain('button-primary')
      expect(button.className).toContain('button-success')
      expect(button.className).toContain('button-rounded')
      expect(button.className).toContain('button-elevated')

      // Check that styles are applied
      expect(button.style.fontSize).toBe('1rem')
      expect(button.style.padding).toBe('0.5rem 1rem')
      expect(button.style.borderRadius).toBe('0.5rem')
      expect(button.style.boxShadow).toBe('0 4px 6px -1px rgba(0, 0, 0, 0.1)')
      expect(button.style.width).toBe('100%')
    })

    it('should apply accessibility props', () => {
      render(
        <ThemeProvider>
          <TestComponent />
        </ThemeProvider>
      )

      const button = screen.getByTestId('test-button')
      
      expect(button).toHaveAttribute('aria-label', 'Test button')
      expect(button).toHaveAttribute('aria-describedby', 'button-description')
      expect(button).toHaveAttribute('aria-live', 'polite')
    })

    it('should handle event handlers', () => {
      const consoleSpy = jest.spyOn(console, 'log').mockImplementation()
      
      render(
        <ThemeProvider>
          <TestComponent />
        </ThemeProvider>
      )

      const button = screen.getByTestId('test-button')
      
      fireEvent.click(button)
      expect(consoleSpy).toHaveBeenCalledWith('Button clicked')

      fireEvent.focus(button)
      expect(consoleSpy).toHaveBeenCalledWith('Button focused')

      consoleSpy.mockRestore()
    })

    it('should process icon props correctly', () => {
      render(
        <ThemeProvider>
          <TestComponent />
        </ThemeProvider>
      )

      expect(screen.getByTestId('left-icon')).toHaveTextContent('📧')
      expect(screen.getByTestId('right-icon')).toHaveTextContent('→')
    })
  })

  describe('API type validation', () => {
    it('should validate component props correctly', () => {
      const buttonProps = {
        variant: 'primary',
        size: 'md',
        loading: false,
        children: 'Test Button'
      }

      const schema = {
        variant: { type: 'string' as const, required: true },
        size: { type: 'string' as const, required: true },
        loading: { type: 'boolean' as const, required: false },
        children: { type: 'string' as const, required: true }
      }

      const errors = validateComponentProps(buttonProps, schema)
      expect(errors).toEqual({})
    })

    it('should detect validation errors', () => {
      const invalidProps = {
        variant: 'invalid-variant',
        size: 123, // Should be string
        loading: 'not-boolean', // Should be boolean
        children: '' // Required but empty
      }

      const schema = {
        variant: { 
          type: 'string' as const, 
          required: true,
          validator: (value: string) => 
            ['primary', 'secondary', 'success'].includes(value) ? undefined : 'Invalid variant'
        },
        size: { type: 'string' as const, required: true },
        loading: { type: 'boolean' as const, required: false },
        children: { type: 'string' as const, required: true }
      }

      const errors = validateComponentProps(invalidProps, schema)
      expect(errors.variant).toBe('Invalid variant')
      expect(errors.size).toBe('size must be of type string')
      expect(errors.loading).toBe('loading must be of type boolean')
      expect(errors.children).toBe('children is required')
    })
  })

  describe('Utility functions', () => {
    it('should generate unique IDs', () => {
      const id1 = generateId()
      const id2 = generateId('custom')
      const id3 = generateId()

      expect(id1).toMatch(/^keypix-[a-z0-9]{9}$/)
      expect(id2).toMatch(/^custom-[a-z0-9]{9}$/)
      expect(id3).toMatch(/^keypix-[a-z0-9]{9}$/)
      expect(id1).not.toBe(id3)
    })

    it('should render icons correctly', () => {
      const { container } = render(renderIcon('📧', 'md', 'custom-class')!)
      const icon = container.firstChild as HTMLElement

      expect(icon.tagName).toBe('SPAN')
      expect(icon.textContent).toBe('📧')
      expect(icon.className).toContain('w-5 h-5')
      expect(icon.className).toContain('custom-class')
    })

    it('should return null for undefined icon', () => {
      expect(renderIcon(undefined)).toBeNull()
    })
  })

  describe('Type safety', () => {
    it('should enforce type constraints for API interfaces', () => {
      // These should be valid
      const validButtonProps: ButtonAPI = {
        variant: 'primary',
        size: 'md',
        color: 'success',
        children: 'Button'
      }

      const validInputProps: InputAPI = {
        label: 'Email',
        size: 'md',
        variant: 'outline',
        children: 'Input'
      }

      const validBadgeProps: BadgeAPI = {
        variant: 'success',
        size: 'sm',
        children: 'Badge'
      }

      expect(validButtonProps.variant).toBe('primary')
      expect(validInputProps.label).toBe('Email')
      expect(validBadgeProps.variant).toBe('success')
    })

    it('should support complex data structures', () => {
      const data = [
        { id: 1, name: 'John', email: 'john@example.com' },
        { id: 2, name: 'Jane', email: 'jane@example.com' }
      ]

      const columns = [
        { key: 'id' as const, title: 'ID', sortable: true },
        { key: 'name' as const, title: 'Name', sortable: true },
        { key: 'email' as const, title: 'Email', sortable: true }
      ]

      const dataTableProps: DataTableAPI<typeof data[0]> = {
        data,
        columns,
        searchable: true,
        sortable: true
      }

      expect(dataTableProps.data).toEqual(data)
      expect(dataTableProps.columns).toEqual(columns)
      expect(dataTableProps.searchable).toBe(true)
    })
  })
}) 