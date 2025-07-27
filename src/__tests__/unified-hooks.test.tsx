import { renderHook, act } from '@testing-library/react'
import {
  useComponentState,
  useFormState,
  useLoadingState,
  useVisibilityState,
  useSelectionState,
  useComponentSize,
  useComponentVariant,
  useComponentColor,
  useComponentConfig,
  useComponentTheme,
  useAccessibility,
  useComponentStyling,
  useComponentIcons
} from '../lib/unified-hooks'

describe('Unified Hooks', () => {
  describe('useComponentState', () => {
    it('should initialize with default state', () => {
      const initialState = { count: 0, name: 'test' }
      const { result } = renderHook(() => useComponentState(initialState))
      
      expect(result.current.state).toEqual(initialState)
    })

    it('should update state correctly', () => {
      const initialState = { count: 0, name: 'test' }
      const { result } = renderHook(() => useComponentState(initialState))
      
      act(() => {
        result.current.setState({ count: 5 })
      })
      
      expect(result.current.state).toEqual({ count: 5, name: 'test' })
    })

    it('should persist state to localStorage when enabled', () => {
      const initialState = { count: 0 }
      const { result } = renderHook(() => 
        useComponentState(initialState, { 
          persist: true, 
          storageKey: 'test-key' 
        })
      )
      
      act(() => {
        result.current.setState({ count: 10 })
      })
      
      expect(localStorage.setItem).toHaveBeenCalledWith(
        'test-key',
        JSON.stringify({ count: 10 })
      )
    })

    it('should reset state correctly', () => {
      const initialState = { count: 0, name: 'test' }
      const { result } = renderHook(() => useComponentState(initialState))
      
      act(() => {
        result.current.setState({ count: 5, name: 'updated' })
      })
      
      act(() => {
        result.current.resetState()
      })
      
      expect(result.current.state).toEqual(initialState)
    })
  })

  describe('useFormState', () => {
    it('should initialize form state correctly', () => {
      const initialValues = { email: '', password: '' }
      const { result } = renderHook(() => useFormState(initialValues))
      
      expect(result.current.values).toEqual(initialValues)
      expect(result.current.errors).toEqual({})
      expect(result.current.touched).toEqual({})
      expect(result.current.isSubmitting).toBe(false)
      expect(result.current.isDirty).toBe(false)
      expect(result.current.isValid).toBe(true)
    })

    it('should update field values', () => {
      const initialValues = { email: '', password: '' }
      const { result } = renderHook(() => useFormState(initialValues))
      
      act(() => {
        result.current.setFieldValue('email', 'test@example.com')
      })
      
      expect(result.current.values.email).toBe('test@example.com')
    })

    it('should validate fields when touched', () => {
      const validationSchema = {
        email: (value: string) => !value ? 'Email is required' : undefined
      }
      const initialValues = { email: '' }
      const { result } = renderHook(() => useFormState(initialValues, validationSchema))
      
      act(() => {
        result.current.setFieldTouched('email')
      })
      
      expect(result.current.errors.email).toBe('Email is required')
    })

    it('should clear errors when field is modified', () => {
      const validationSchema = {
        email: (value: string) => !value ? 'Email is required' : undefined
      }
      const initialValues = { email: '' }
      const { result } = renderHook(() => useFormState(initialValues, validationSchema))
      
      // Set error first
      act(() => {
        result.current.setFieldTouched('email')
      })
      expect(result.current.errors.email).toBe('Email is required')
      
      // Clear error by setting value
      act(() => {
        result.current.setFieldValue('email', 'test@example.com')
      })
      expect(result.current.errors.email).toBeUndefined()
    })

    it('should handle form submission correctly', async () => {
      const initialValues = { email: 'test@example.com', password: 'password' }
      const onSubmit = jest.fn()
      const { result } = renderHook(() => useFormState(initialValues))
      
      await act(async () => {
        await result.current.handleSubmit(onSubmit)
      })
      
      expect(onSubmit).toHaveBeenCalledWith(initialValues)
      expect(result.current.isSubmitting).toBe(false)
    })

    it('should reset form correctly', () => {
      const initialValues = { email: '', password: '' }
      const { result } = renderHook(() => useFormState(initialValues))
      
      act(() => {
        result.current.setFieldValue('email', 'test@example.com')
        result.current.setFieldValue('password', 'password')
      })
      
      act(() => {
        result.current.resetForm()
      })
      
      expect(result.current.values).toEqual(initialValues)
      expect(result.current.errors).toEqual({})
      expect(result.current.touched).toEqual({})
      expect(result.current.isSubmitting).toBe(false)
    })
  })

  describe('useLoadingState', () => {
    it('should initialize with default loading state', () => {
      const { result } = renderHook(() => useLoadingState())
      
      expect(result.current.loading).toBe(false)
    })

    it('should set loading state', () => {
      const { result } = renderHook(() => useLoadingState())
      
      act(() => {
        result.current.setLoading(true)
      })
      
      expect(result.current.loading).toBe(true)
    })

    it('should handle async operations with loading', async () => {
      const { result } = renderHook(() => useLoadingState())
      const asyncFn = jest.fn().mockResolvedValue('result')
      
      await act(async () => {
        const result = await result.current.withLoading(asyncFn)
        expect(result).toBe('result')
      })
      
      expect(asyncFn).toHaveBeenCalled()
      expect(result.current.loading).toBe(false)
    })
  })

  describe('useVisibilityState', () => {
    it('should initialize with default visibility', () => {
      const { result } = renderHook(() => useVisibilityState())
      
      expect(result.current.visible).toBe(false)
    })

    it('should show and hide correctly', () => {
      const { result } = renderHook(() => useVisibilityState())
      
      act(() => {
        result.current.show()
      })
      expect(result.current.visible).toBe(true)
      
      act(() => {
        result.current.hide()
      })
      expect(result.current.visible).toBe(false)
    })

    it('should toggle visibility', () => {
      const { result } = renderHook(() => useVisibilityState())
      
      act(() => {
        result.current.toggle()
      })
      expect(result.current.visible).toBe(true)
      
      act(() => {
        result.current.toggle()
      })
      expect(result.current.visible).toBe(false)
    })
  })

  describe('useSelectionState', () => {
    it('should initialize with empty selection', () => {
      const { result } = renderHook(() => useSelectionState<string>())
      
      expect(result.current.selection).toEqual([])
    })

    it('should select and deselect items', () => {
      const { result } = renderHook(() => useSelectionState<string>())
      
      act(() => {
        result.current.select('item1')
      })
      expect(result.current.selection).toEqual(['item1'])
      expect(result.current.isSelected('item1')).toBe(true)
      
      act(() => {
        result.current.deselect('item1')
      })
      expect(result.current.selection).toEqual([])
      expect(result.current.isSelected('item1')).toBe(false)
    })

    it('should toggle selection', () => {
      const { result } = renderHook(() => useSelectionState<string>())
      
      act(() => {
        result.current.toggle('item1')
      })
      expect(result.current.selection).toEqual(['item1'])
      
      act(() => {
        result.current.toggle('item1')
      })
      expect(result.current.selection).toEqual([])
    })

    it('should select all items', () => {
      const { result } = renderHook(() => useSelectionState<string>())
      const items = ['item1', 'item2', 'item3']
      
      act(() => {
        result.current.selectAll(items)
      })
      expect(result.current.selection).toEqual(items)
    })

    it('should clear selection', () => {
      const { result } = renderHook(() => useSelectionState<string>())
      
      act(() => {
        result.current.select('item1')
        result.current.select('item2')
      })
      expect(result.current.selection).toEqual(['item1', 'item2'])
      
      act(() => {
        result.current.clearSelection()
      })
      expect(result.current.selection).toEqual([])
    })
  })

  describe('useComponentSize', () => {
    it('should initialize with default size', () => {
      const { result } = renderHook(() => useComponentSize())
      
      expect(result.current.state.size).toBe('md')
    })

    it('should update size', () => {
      const { result } = renderHook(() => useComponentSize('sm'))
      
      act(() => {
        result.current.setState({ size: 'lg' })
      })
      
      expect(result.current.state.size).toBe('lg')
    })
  })

  describe('useComponentVariant', () => {
    it('should initialize with default variant', () => {
      const { result } = renderHook(() => useComponentVariant())
      
      expect(result.current.state.variant).toBe('default')
    })

    it('should update variant', () => {
      const { result } = renderHook(() => useComponentVariant('primary'))
      
      act(() => {
        result.current.setState({ variant: 'success' })
      })
      
      expect(result.current.state.variant).toBe('success')
    })
  })

  describe('useComponentColor', () => {
    it('should initialize with default color', () => {
      const { result } = renderHook(() => useComponentColor())
      
      expect(result.current.state.color).toBe('primary')
    })

    it('should update color', () => {
      const { result } = renderHook(() => useComponentColor('secondary'))
      
      act(() => {
        result.current.setState({ color: 'success' })
      })
      
      expect(result.current.state.color).toBe('success')
    })
  })

  describe('useComponentConfig', () => {
    it('should merge default and user config', () => {
      const defaultConfig = { size: 'md', variant: 'default' }
      const userConfig = { size: 'lg' }
      
      const { result } = renderHook(() => useComponentConfig(defaultConfig, userConfig))
      
      expect(result.current).toEqual({ size: 'lg', variant: 'default' })
    })

    it('should return default config when no user config provided', () => {
      const defaultConfig = { size: 'md', variant: 'default' }
      
      const { result } = renderHook(() => useComponentConfig(defaultConfig))
      
      expect(result.current).toEqual(defaultConfig)
    })
  })

  describe('useComponentTheme', () => {
    it('should return light theme by default', () => {
      const { result } = renderHook(() => useComponentTheme())
      
      expect(result.current).toBe('light')
    })

    it('should return specified theme', () => {
      const { result } = renderHook(() => useComponentTheme('dark'))
      
      expect(result.current).toBe('dark')
    })
  })

  describe('useAccessibility', () => {
    it('should return aria props object', () => {
      const props = {
        'aria-label': 'Test button',
        'aria-describedby': 'description',
        'aria-live': 'polite' as const
      }
      
      const { result } = renderHook(() => useAccessibility(props))
      
      expect(result.current).toEqual(props)
    })

    it('should filter out undefined values', () => {
      const props = {
        'aria-label': 'Test button',
        'aria-describedby': undefined,
        'aria-live': 'polite' as const
      }
      
      const { result } = renderHook(() => useAccessibility(props))
      
      expect(result.current).toEqual({
        'aria-label': 'Test button',
        'aria-live': 'polite'
      })
    })
  })

  describe('useComponentStyling', () => {
    it('should return style props object', () => {
      const props = {
        size: 'md' as const,
        variant: 'primary' as const,
        rounded: true,
        elevated: false
      }
      
      const { result } = renderHook(() => useComponentStyling(props))
      
      expect(result.current).toEqual(props)
    })

    it('should filter out undefined values', () => {
      const props = {
        size: 'md' as const,
        variant: undefined,
        rounded: true
      }
      
      const { result } = renderHook(() => useComponentStyling(props))
      
      expect(result.current).toEqual({
        size: 'md',
        rounded: true
      })
    })
  })

  describe('useComponentIcons', () => {
    it('should process icon props correctly', () => {
      const props = {
        leftIcon: '📧',
        rightIcon: '→',
        icon: '🔍',
        iconPosition: 'left' as const
      }
      
      const { result } = renderHook(() => useComponentIcons(props))
      
      expect(result.current).toEqual({
        leftIcon: '📧',
        rightIcon: '→'
      })
    })

    it('should use icon prop when iconPosition is specified', () => {
      const props = {
        icon: '🔍',
        iconPosition: 'right' as const
      }
      
      const { result } = renderHook(() => useComponentIcons(props))
      
      expect(result.current).toEqual({
        leftIcon: undefined,
        rightIcon: '🔍'
      })
    })

    it('should default to left iconPosition', () => {
      const props = {
        icon: '🔍'
      }
      
      const { result } = renderHook(() => useComponentIcons(props))
      
      expect(result.current).toEqual({
        leftIcon: '🔍',
        rightIcon: undefined
      })
    })
  })
}) 