import {
  createComponentClasses,
  getSizeClasses,
  getVariantClasses,
  getColorClasses,
  getStateClasses,
  createComponentStyles,
  getColorValues,
  validateComponentProps,
  validationRules,
  createAccessibilityProps,
  generateId,
  createAccessibleLabel,
  createEventHandlers,
  debounce,
  throttle,
  processIconProps,
  renderIcon,
  getResponsiveValue,
  createResponsiveClasses
} from '../lib/unified-utils'
import { render } from '@testing-library/react'

describe('Unified Utils', () => {
  describe('createComponentClasses', () => {
    it('should create base class', () => {
      const result = createComponentClasses('button', {})
      expect(result).toContain('button')
    })

    it('should add size class', () => {
      const result = createComponentClasses('button', { size: 'md' })
      expect(result).toContain('button-md')
    })

    it('should add variant class', () => {
      const result = createComponentClasses('button', { variant: 'primary' })
      expect(result).toContain('button-primary')
    })

    it('should add color class', () => {
      const result = createComponentClasses('button', { color: 'success' })
      expect(result).toContain('button-success')
    })

    it('should add status class', () => {
      const result = createComponentClasses('button', { status: 'online' })
      expect(result).toContain('button-online')
    })

    it('should add boolean classes', () => {
      const result = createComponentClasses('button', { 
        rounded: true, 
        elevated: true,
        bordered: true,
        fullWidth: true,
        disabled: true,
        loading: true,
        error: true
      })
      expect(result).toContain('button-rounded')
      expect(result).toContain('button-elevated')
      expect(result).toContain('button-bordered')
      expect(result).toContain('button-full-width')
      expect(result).toContain('button-disabled')
      expect(result).toContain('button-loading')
      expect(result).toContain('button-error')
    })

    it('should not add classes for false values', () => {
      const result = createComponentClasses('button', { 
        rounded: false, 
        elevated: false 
      })
      expect(result).not.toContain('button-rounded')
      expect(result).not.toContain('button-elevated')
    })
  })

  describe('getSizeClasses', () => {
    it('should return size class', () => {
      expect(getSizeClasses('button', 'md')).toBe('button-md')
    })

    it('should return empty string for undefined size', () => {
      expect(getSizeClasses('button')).toBe('')
    })
  })

  describe('getVariantClasses', () => {
    it('should return variant class', () => {
      expect(getVariantClasses('button', 'primary')).toBe('button-primary')
    })

    it('should return empty string for undefined variant', () => {
      expect(getVariantClasses('button')).toBe('')
    })
  })

  describe('getColorClasses', () => {
    it('should return color class', () => {
      expect(getColorClasses('button', 'success')).toBe('button-success')
    })

    it('should return empty string for undefined color', () => {
      expect(getColorClasses('button')).toBe('')
    })
  })

  describe('getStateClasses', () => {
    it('should return state classes', () => {
      const result = getStateClasses('button', {
        disabled: true,
        loading: true,
        error: true
      })
      expect(result).toContain('button-disabled')
      expect(result).toContain('button-loading')
      expect(result).toContain('button-error')
    })

    it('should return empty string for no states', () => {
      const result = getStateClasses('button', {})
      expect(result).toBe('')
    })
  })

  describe('createComponentStyles', () => {
    it('should create basic styles', () => {
      const result = createComponentStyles({})
      expect(result).toEqual({})
    })

    it('should add size styles', () => {
      const result = createComponentStyles({ size: 'md' })
      expect(result.fontSize).toBe('1rem')
      expect(result.padding).toBe('0.5rem 1rem')
    })

    it('should add border radius styles', () => {
      const result = createComponentStyles({ borderRadius: 'lg' })
      expect(result.borderRadius).toBe('0.5rem')
    })

    it('should add shadow styles', () => {
      const result = createComponentStyles({ shadow: 'md' })
      expect(result.boxShadow).toBe('0 4px 6px -1px rgba(0, 0, 0, 0.1)')
    })

    it('should add full width style', () => {
      const result = createComponentStyles({ fullWidth: true })
      expect(result.width).toBe('100%')
    })

    it('should merge custom styles', () => {
      const customStyles = { backgroundColor: 'red' }
      const result = createComponentStyles({ customStyles })
      expect(result.backgroundColor).toBe('red')
    })
  })

  describe('getColorValues', () => {
    it('should return color values for primary', () => {
      const result = getColorValues('primary')
      expect(result.background).toBe('rgb(59 130 246)')
      expect(result.text).toBe('rgb(255 255 255)')
      expect(result.border).toBe('rgb(59 130 246)')
      expect(result.hover).toBe('rgb(37 99 235)')
    })

    it('should return empty object for undefined color', () => {
      const result = getColorValues()
      expect(result).toEqual({})
    })
  })

  describe('validateComponentProps', () => {
    it('should validate required fields', () => {
      const props = { name: '', email: 'test@example.com' }
      const schema = {
        name: { type: 'string' as const, required: true },
        email: { type: 'string' as const, required: true }
      }
      
      const errors = validateComponentProps(props, schema)
      expect(errors.name).toBe('name is required')
      expect(errors.email).toBeUndefined()
    })

    it('should validate field types', () => {
      const props = { count: 'not-a-number' }
      const schema = {
        count: { type: 'number' as const }
      }
      
      const errors = validateComponentProps(props, schema)
      expect(errors.count).toBe('count must be of type number')
    })

    it('should run custom validators', () => {
      const props = { email: 'invalid-email' }
      const schema = {
        email: { 
          type: 'string' as const,
          validator: (value: string) => !value.includes('@') ? 'Invalid email' : undefined
        }
      }
      
      const errors = validateComponentProps(props, schema)
      expect(errors.email).toBe('Invalid email')
    })

    it('should return empty errors for valid props', () => {
      const props = { name: 'John', email: 'john@example.com' }
      const schema = {
        name: { type: 'string' as const, required: true },
        email: { type: 'string' as const, required: true }
      }
      
      const errors = validateComponentProps(props, schema)
      expect(errors.name).toBeUndefined()
      expect(errors.email).toBeUndefined()
    })
  })

  describe('validationRules', () => {
    describe('required', () => {
      it('should return error for empty value', () => {
        expect(validationRules.required('')).toBe('This field is required')
        expect(validationRules.required(null)).toBe('This field is required')
        expect(validationRules.required(undefined)).toBe('This field is required')
      })

      it('should return undefined for valid value', () => {
        expect(validationRules.required('test')).toBeUndefined()
        expect(validationRules.required(0)).toBeUndefined()
      })
    })

    describe('email', () => {
      it('should return error for invalid email', () => {
        expect(validationRules.email('invalid')).toBe('Please enter a valid email address')
        expect(validationRules.email('test@')).toBe('Please enter a valid email address')
      })

      it('should return undefined for valid email', () => {
        expect(validationRules.email('test@example.com')).toBeUndefined()
        expect(validationRules.email('')).toBeUndefined()
      })
    })

    describe('minLength', () => {
      it('should return error for short string', () => {
        const minLength3 = validationRules.minLength(3)
        expect(minLength3('ab')).toBe('Must be at least 3 characters')
      })

      it('should return undefined for valid length', () => {
        const minLength3 = validationRules.minLength(3)
        expect(minLength3('abc')).toBeUndefined()
        expect(minLength3('')).toBeUndefined()
      })
    })

    describe('maxLength', () => {
      it('should return error for long string', () => {
        const maxLength3 = validationRules.maxLength(3)
        expect(maxLength3('abcd')).toBe('Must be no more than 3 characters')
      })

      it('should return undefined for valid length', () => {
        const maxLength3 = validationRules.maxLength(3)
        expect(maxLength3('abc')).toBeUndefined()
        expect(maxLength3('')).toBeUndefined()
      })
    })

    describe('min', () => {
      it('should return error for small number', () => {
        const min5 = validationRules.min(5)
        expect(min5(3)).toBe('Must be at least 5')
      })

      it('should return undefined for valid number', () => {
        const min5 = validationRules.min(5)
        expect(min5(5)).toBeUndefined()
        expect(min5(10)).toBeUndefined()
        expect(min5(undefined)).toBeUndefined()
      })
    })

    describe('max', () => {
      it('should return error for large number', () => {
        const max5 = validationRules.max(5)
        expect(max5(10)).toBe('Must be no more than 5')
      })

      it('should return undefined for valid number', () => {
        const max5 = validationRules.max(5)
        expect(max5(5)).toBeUndefined()
        expect(max5(3)).toBeUndefined()
        expect(max5(undefined)).toBeUndefined()
      })
    })

    describe('pattern', () => {
      it('should return error for non-matching pattern', () => {
        const pattern = validationRules.pattern(/^\d+$/, 'Must be numbers only')
        expect(pattern('abc')).toBe('Must be numbers only')
      })

      it('should return undefined for matching pattern', () => {
        const pattern = validationRules.pattern(/^\d+$/, 'Must be numbers only')
        expect(pattern('123')).toBeUndefined()
        expect(pattern('')).toBeUndefined()
      })
    })
  })

  describe('createAccessibilityProps', () => {
    it('should create aria props object', () => {
      const result = createAccessibilityProps({
        'aria-label': 'Test button',
        'aria-describedby': 'description',
        'aria-live': 'polite',
        role: 'button'
      })
      
      expect(result).toEqual({
        'aria-label': 'Test button',
        'aria-describedby': 'description',
        'aria-live': 'polite',
        role: 'button'
      })
    })

    it('should filter out undefined values', () => {
      const result = createAccessibilityProps({
        'aria-label': 'Test button',
        'aria-describedby': undefined,
        'aria-live': 'polite'
      })
      
      expect(result).toEqual({
        'aria-label': 'Test button',
        'aria-live': 'polite'
      })
    })
  })

  describe('generateId', () => {
    it('should generate unique id with default prefix', () => {
      const id1 = generateId()
      const id2 = generateId()
      
      expect(id1).toMatch(/^keypix-[a-z0-9]{9}$/)
      expect(id2).toMatch(/^keypix-[a-z0-9]{9}$/)
      expect(id1).not.toBe(id2)
    })

    it('should generate unique id with custom prefix', () => {
      const id = generateId('test')
      expect(id).toMatch(/^test-[a-z0-9]{9}$/)
    })
  })

  describe('createAccessibleLabel', () => {
    it('should create accessible label props', () => {
      const result = createAccessibleLabel('Test Label', 'Test Description')
      
      expect(result['aria-label']).toBe('Test Label')
      expect(result['aria-describedby']).toBeDefined()
      expect(result.id).toMatch(/^label-[a-z0-9]{9}$/)
      expect(result.descriptionId).toMatch(/^description-[a-z0-9]{9}$/)
      expect(result.labelProps.htmlFor).toBe(result.id)
      expect(result.descriptionProps?.id).toBe(result.descriptionId)
    })

    it('should work without description', () => {
      const result = createAccessibleLabel('Test Label')
      
      expect(result['aria-label']).toBe('Test Label')
      expect(result['aria-describedby']).toBeUndefined()
      expect(result.descriptionId).toBeUndefined()
      expect(result.descriptionProps).toBeUndefined()
    })

    it('should use provided id', () => {
      const result = createAccessibleLabel('Test Label', 'Test Description', 'custom-id')
      
      expect(result.id).toBe('custom-id')
      expect(result.labelProps.htmlFor).toBe('custom-id')
    })
  })

  describe('createEventHandlers', () => {
    it('should create event handlers', () => {
      const onClick = jest.fn()
      const onFocus = jest.fn()
      
      const handlers = createEventHandlers({
        onClick,
        onFocus,
        disabled: false,
        loading: false
      })
      
      expect(handlers.onClick).toBe(onClick)
      expect(handlers.onFocus).toBe(onFocus)
    })

    it('should disable handlers when component is disabled', () => {
      const onClick = jest.fn()
      const onFocus = jest.fn()
      
      const handlers = createEventHandlers({
        onClick,
        onFocus,
        disabled: true,
        loading: false
      })
      
      expect(handlers.onClick).toBeUndefined()
      expect(handlers.onFocus).toBeUndefined()
    })

    it('should disable handlers when component is loading', () => {
      const onClick = jest.fn()
      
      const handlers = createEventHandlers({
        onClick,
        disabled: false,
        loading: true
      })
      
      expect(handlers.onClick).toBeUndefined()
    })
  })

  describe('debounce', () => {
    beforeEach(() => {
      jest.useFakeTimers()
    })

    afterEach(() => {
      jest.useRealTimers()
    })

    it('should debounce function calls', () => {
      const fn = jest.fn()
      const debouncedFn = debounce(fn, 100)
      
      debouncedFn('arg1')
      debouncedFn('arg2')
      debouncedFn('arg3')
      
      expect(fn).not.toHaveBeenCalled()
      
      jest.advanceTimersByTime(100)
      
      expect(fn).toHaveBeenCalledTimes(1)
      expect(fn).toHaveBeenCalledWith('arg3')
    })
  })

  describe('throttle', () => {
    beforeEach(() => {
      jest.useFakeTimers()
    })

    afterEach(() => {
      jest.useRealTimers()
    })

    it('should throttle function calls', () => {
      const fn = jest.fn()
      const throttledFn = throttle(fn, 100)
      
      throttledFn('arg1')
      throttledFn('arg2')
      throttledFn('arg3')
      
      expect(fn).toHaveBeenCalledTimes(1)
      expect(fn).toHaveBeenCalledWith('arg1')
      
      jest.advanceTimersByTime(100)
      
      throttledFn('arg4')
      expect(fn).toHaveBeenCalledTimes(2)
      expect(fn).toHaveBeenCalledWith('arg4')
    })
  })

  describe('processIconProps', () => {
    it('should process icon props correctly', () => {
      const result = processIconProps({
        leftIcon: '📧',
        rightIcon: '→',
        icon: '🔍',
        iconPosition: 'left'
      })
      
      expect(result).toEqual({
        leftIcon: '📧',
        rightIcon: '→'
      })
    })

    it('should use icon prop when iconPosition is specified', () => {
      const result = processIconProps({
        icon: '🔍',
        iconPosition: 'right'
      })
      
      expect(result).toEqual({
        leftIcon: undefined,
        rightIcon: '🔍'
      })
    })

    it('should default to left iconPosition', () => {
      const result = processIconProps({
        icon: '🔍'
      })
      
      expect(result).toEqual({
        leftIcon: '🔍',
        rightIcon: undefined
      })
    })
  })

  describe('renderIcon', () => {
    it('should render string icon', () => {
      const { container } = render(renderIcon('📧', 'md', 'custom-class')!)
      const icon = container.firstChild as HTMLElement
      
      expect(icon.tagName).toBe('SPAN')
      expect(icon.textContent).toBe('📧')
      expect(icon.className).toContain('w-5 h-5')
      expect(icon.className).toContain('custom-class')
    })

    it('should render React element icon', () => {
      const IconComponent = () => <div data-testid="icon">🔍</div>
      const { getByTestId } = render(renderIcon(<IconComponent />, 'lg')!)
      
      expect(getByTestId('icon')).toBeInTheDocument()
    })

    it('should return null for undefined icon', () => {
      expect(renderIcon(undefined)).toBeNull()
    })
  })

  describe('getResponsiveValue', () => {
    it('should return simple value', () => {
      expect(getResponsiveValue('test')).toBe('test')
      expect(getResponsiveValue(42)).toBe(42)
    })

    it('should return responsive value for breakpoint', () => {
      const responsiveValue = {
        xs: 'small',
        md: 'medium',
        lg: 'large'
      }
      
      expect(getResponsiveValue(responsiveValue, 'md')).toBe('medium')
    })

    it('should fallback to md breakpoint', () => {
      const responsiveValue = {
        xs: 'small',
        lg: 'large'
      }
      
      expect(getResponsiveValue(responsiveValue, 'md')).toBe('small')
    })
  })

  describe('createResponsiveClasses', () => {
    it('should create responsive classes', () => {
      const responsiveValues = {
        default: 'md',
        sm: 'lg',
        lg: 'xl'
      }
      
      const result = createResponsiveClasses('button', responsiveValues)
      
      expect(result).toContain('button-md')
      expect(result).toContain('sm:button-lg')
      expect(result).toContain('lg:button-xl')
    })

    it('should filter out undefined values', () => {
      const responsiveValues = {
        default: 'md',
        sm: undefined,
        lg: 'xl'
      }
      
      const result = createResponsiveClasses('button', responsiveValues)
      
      expect(result).toContain('button-md')
      expect(result).not.toContain('sm:button-undefined')
      expect(result).toContain('lg:button-xl')
    })
  })
}) 