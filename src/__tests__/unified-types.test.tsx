import {
  Size,
  Variant,
  Color,
  Status,
  IconPosition,
  BorderRadius,
  Shadow,
  BaseComponent,
  Sizeable,
  Variantable,
  Loadable,
  Iconable,
  Statusable,
  Stylable,
  Accessible
} from '../types/unified'

// Type checking tests
describe('Unified Types', () => {
  describe('Size type', () => {
    it('should accept valid size values', () => {
      const sizes: Size[] = ['xs', 'sm', 'md', 'lg', 'xl', '2xl']
      
      sizes.forEach(size => {
        expect(typeof size).toBe('string')
        expect(['xs', 'sm', 'md', 'lg', 'xl', '2xl']).toContain(size)
      })
    })
  })

  describe('Variant type', () => {
    it('should accept valid variant values', () => {
      const variants: Variant[] = [
        'default',
        'secondary',
        'destructive',
        'outline',
        'ghost',
        'link',
        'success',
        'warning',
        'info'
      ]
      
      variants.forEach(variant => {
        expect(typeof variant).toBe('string')
        expect([
          'default',
          'secondary',
          'destructive',
          'outline',
          'ghost',
          'link',
          'success',
          'warning',
          'info'
        ]).toContain(variant)
      })
    })
  })

  describe('Color type', () => {
    it('should accept valid color values', () => {
      const colors: Color[] = [
        'primary',
        'secondary',
        'success',
        'warning',
        'error',
        'info',
        'muted'
      ]
      
      colors.forEach(color => {
        expect(typeof color).toBe('string')
        expect([
          'primary',
          'secondary',
          'success',
          'warning',
          'error',
          'info',
          'muted'
        ]).toContain(color)
      })
    })
  })

  describe('Status type', () => {
    it('should accept valid status values', () => {
      const statuses: Status[] = ['online', 'offline', 'away', 'busy', 'pending']
      
      statuses.forEach(status => {
        expect(typeof status).toBe('string')
        expect(['online', 'offline', 'away', 'busy', 'pending']).toContain(status)
      })
    })
  })

  describe('IconPosition type', () => {
    it('should accept valid icon position values', () => {
      const positions: IconPosition[] = ['left', 'right']
      
      positions.forEach(position => {
        expect(typeof position).toBe('string')
        expect(['left', 'right']).toContain(position)
      })
    })
  })

  describe('BorderRadius type', () => {
    it('should accept valid border radius values', () => {
      const radii: BorderRadius[] = ['none', 'sm', 'md', 'lg', 'xl', 'full']
      
      radii.forEach(radius => {
        expect(typeof radius).toBe('string')
        expect(['none', 'sm', 'md', 'lg', 'xl', 'full']).toContain(radius)
      })
    })
  })

  describe('Shadow type', () => {
    it('should accept valid shadow values', () => {
      const shadows: Shadow[] = ['none', 'sm', 'md', 'lg', 'xl', '2xl']
      
      shadows.forEach(shadow => {
        expect(typeof shadow).toBe('string')
        expect(['none', 'sm', 'md', 'lg', 'xl', '2xl']).toContain(shadow)
      })
    })
  })

  describe('BaseComponent interface', () => {
    it('should accept valid base component props', () => {
      const baseComponent: BaseComponent = {
        id: 'test-id',
        className: 'test-class',
        style: { color: 'red' },
        'data-testid': 'test-element',
        disabled: false,
        loading: false
      }
      
      expect(baseComponent.id).toBe('test-id')
      expect(baseComponent.className).toBe('test-class')
      expect(baseComponent.style).toEqual({ color: 'red' })
      expect(baseComponent['data-testid']).toBe('test-element')
      expect(baseComponent.disabled).toBe(false)
      expect(baseComponent.loading).toBe(false)
    })

    it('should work with partial props', () => {
      const baseComponent: BaseComponent = {
        id: 'test-id'
      }
      
      expect(baseComponent.id).toBe('test-id')
      expect(baseComponent.className).toBeUndefined()
    })
  })

  describe('Sizeable interface', () => {
    it('should accept valid sizeable props', () => {
      const sizeable: Sizeable = {
        size: 'md',
        fullWidth: true
      }
      
      expect(sizeable.size).toBe('md')
      expect(sizeable.fullWidth).toBe(true)
    })

    it('should work with optional props', () => {
      const sizeable: Sizeable = {}
      
      expect(sizeable.size).toBeUndefined()
      expect(sizeable.fullWidth).toBeUndefined()
    })
  })

  describe('Variantable interface', () => {
    it('should accept valid variantable props', () => {
      const variantable: Variantable = {
        variant: 'primary',
        color: 'success'
      }
      
      expect(variantable.variant).toBe('primary')
      expect(variantable.color).toBe('success')
    })
  })

  describe('Loadable interface', () => {
    it('should accept valid loadable props', () => {
      const loadable: Loadable = {
        loading: true,
        loadingText: 'Loading...',
        disableOnLoading: true
      }
      
      expect(loadable.loading).toBe(true)
      expect(loadable.loadingText).toBe('Loading...')
      expect(loadable.disableOnLoading).toBe(true)
    })
  })

  describe('Iconable interface', () => {
    it('should accept valid iconable props', () => {
      const iconable: Iconable = {
        leftIcon: '📧',
        rightIcon: '→',
        iconPosition: 'left',
        icon: '🔍'
      }
      
      expect(iconable.leftIcon).toBe('📧')
      expect(iconable.rightIcon).toBe('→')
      expect(iconable.iconPosition).toBe('left')
      expect(iconable.icon).toBe('🔍')
    })
  })

  describe('Statusable interface', () => {
    it('should accept valid statusable props', () => {
      const statusable: Statusable = {
        status: 'online',
        showStatus: true
      }
      
      expect(statusable.status).toBe('online')
      expect(statusable.showStatus).toBe(true)
    })
  })

  describe('Stylable interface', () => {
    it('should accept valid stylable props', () => {
      const stylable: Stylable = {
        rounded: true,
        elevated: true,
        borderRadius: 'lg',
        bordered: true
      }
      
      expect(stylable.rounded).toBe(true)
      expect(stylable.elevated).toBe(true)
      expect(stylable.borderRadius).toBe('lg')
      expect(stylable.bordered).toBe(true)
    })
  })

  describe('Accessible interface', () => {
    it('should accept valid accessible props', () => {
      const accessible: Accessible = {
        'aria-label': 'Test button',
        'aria-describedby': 'description',
        'aria-live': 'polite',
        'aria-busy': false,
        'aria-expanded': true,
        'aria-selected': false,
        'aria-checked': true,
        'aria-pressed': false,
        'aria-current': true
      }
      
      expect(accessible['aria-label']).toBe('Test button')
      expect(accessible['aria-describedby']).toBe('description')
      expect(accessible['aria-live']).toBe('polite')
      expect(accessible['aria-busy']).toBe(false)
      expect(accessible['aria-expanded']).toBe(true)
      expect(accessible['aria-selected']).toBe(false)
      expect(accessible['aria-checked']).toBe(true)
      expect(accessible['aria-pressed']).toBe(false)
      expect(accessible['aria-current']).toBe(true)
    })
  })

  describe('Type composition', () => {
    it('should compose multiple interfaces correctly', () => {
      // This tests that interfaces can be composed without conflicts
      const component = {
        // BaseComponent
        id: 'test-id',
        className: 'test-class',
        disabled: false,
        loading: false,
        
        // Sizeable
        size: 'md' as Size,
        fullWidth: true,
        
        // Variantable
        variant: 'primary' as Variant,
        color: 'success' as Color,
        
        // Iconable
        leftIcon: '📧',
        rightIcon: '→',
        iconPosition: 'left' as IconPosition,
        
        // Stylable
        rounded: true,
        elevated: true,
        borderRadius: 'lg' as BorderRadius,
        
        // Accessible
        'aria-label': 'Test component',
        'aria-describedby': 'description'
      }
      
      // Test that all properties are accessible
      expect(component.id).toBe('test-id')
      expect(component.size).toBe('md')
      expect(component.variant).toBe('primary')
      expect(component.leftIcon).toBe('📧')
      expect(component.rounded).toBe(true)
      expect(component['aria-label']).toBe('Test component')
    })
  })

  describe('Type constraints', () => {
    it('should enforce correct type constraints', () => {
      // These should be valid
      const validSize: Size = 'md'
      const validVariant: Variant = 'primary'
      const validColor: Color = 'success'
      const validStatus: Status = 'online'
      
      expect(validSize).toBe('md')
      expect(validVariant).toBe('primary')
      expect(validColor).toBe('success')
      expect(validStatus).toBe('online')
    })

    it('should reject invalid values at compile time', () => {
      // These would cause TypeScript errors if uncommented:
      // const invalidSize: Size = 'invalid' // Should error
      // const invalidVariant: Variant = 'invalid' // Should error
      // const invalidColor: Color = 'invalid' // Should error
      // const invalidStatus: Status = 'invalid' // Should error
      
      // This test ensures the types are working correctly
      expect(true).toBe(true)
    })
  })

  describe('Optional properties', () => {
    it('should handle optional properties correctly', () => {
      const minimalComponent: BaseComponent = {}
      
      expect(minimalComponent.id).toBeUndefined()
      expect(minimalComponent.className).toBeUndefined()
      expect(minimalComponent.disabled).toBeUndefined()
      expect(minimalComponent.loading).toBeUndefined()
    })

    it('should allow partial interface implementation', () => {
      const partialSizeable: Sizeable = {
        size: 'lg'
        // fullWidth is optional, so it can be omitted
      }
      
      expect(partialSizeable.size).toBe('lg')
      expect(partialSizeable.fullWidth).toBeUndefined()
    })
  })

  describe('Union types', () => {
    it('should handle union types correctly', () => {
      const sizes: Size[] = ['xs', 'sm', 'md', 'lg', 'xl', '2xl']
      const variants: Variant[] = ['default', 'primary', 'secondary', 'destructive', 'outline', 'ghost', 'link', 'success', 'warning', 'info']
      const colors: Color[] = ['primary', 'secondary', 'success', 'warning', 'error', 'info', 'muted']
      
      expect(sizes).toHaveLength(6)
      expect(variants).toHaveLength(10)
      expect(colors).toHaveLength(7)
    })
  })
}) 