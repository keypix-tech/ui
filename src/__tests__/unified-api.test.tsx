import {
  ButtonAPI,
  InputAPI,
  BadgeAPI,
  AvatarAPI,
  AvatarGroupAPI,
  SpinnerAPI,
  CardAPI,
  CardHeaderAPI,
  CardTitleAPI,
  CardDescriptionAPI,
  CardContentAPI,
  SearchBarAPI,
  AlertAPI,
  AlertTitleAPI,
  AlertDescriptionAPI,
  ModalAPI,
  HeaderAPI,
  DataTableAPI,
  TimeChartAPI,
  ThemeProviderAPI,
  UnifiedColumn,
  TimeChartData,
  TimeChartEvent,
  ComponentAPIs,
  UnifiedComponentProps,
  ExtractUnifiedComponentProps
} from '../types/unified-api'

// Type checking tests for unified API
describe('Unified API', () => {
  describe('ButtonAPI', () => {
    it('should accept valid button props', () => {
      const buttonProps: ButtonAPI = {
        variant: 'primary',
        size: 'md',
        loading: false,
        loadingText: 'Loading...',
        leftIcon: '📧',
        rightIcon: '→',
        iconPosition: 'left',
        icon: '🔍',
        fullWidth: true,
        disableOnLoading: true,
        color: 'success',
        rounded: true,
        elevated: true,
        borderRadius: 'lg',
        shadow: 'md',
        onClick: jest.fn(),
        children: 'Click me'
      }
      
      expect(buttonProps.variant).toBe('primary')
      expect(buttonProps.size).toBe('md')
      expect(buttonProps.loading).toBe(false)
      expect(buttonProps.leftIcon).toBe('📧')
      expect(buttonProps.fullWidth).toBe(true)
      expect(buttonProps.children).toBe('Click me')
    })

    it('should work with minimal props', () => {
      const buttonProps: ButtonAPI = {
        children: 'Button'
      }
      
      expect(buttonProps.children).toBe('Button')
      expect(buttonProps.variant).toBeUndefined()
      expect(buttonProps.size).toBeUndefined()
    })
  })

  describe('InputAPI', () => {
    it('should accept valid input props', () => {
      const inputProps: InputAPI = {
        label: 'Email',
        helperText: 'Enter your email address',
        error: false,
        required: true,
        prefix: '📧',
        suffix: '✓',
        leftIcon: '📧',
        rightIcon: '✓',
        iconPosition: 'left',
        icon: '🔍',
        clearable: true,
        loading: false,
        onClear: jest.fn(),
        size: 'md',
        variant: 'outline',
        color: 'primary',
        fullWidth: true,
        rounded: true,
        elevated: true,
        borderRadius: 'lg',
        borderWidth: 'normal',
        borderColor: 'primary',
        bordered: true,
        shadow: 'md',
        name: 'email',
        value: 'test@example.com',
        onChange: jest.fn(),
        placeholder: 'Enter email...',
        type: 'email'
      }
      
      expect(inputProps.label).toBe('Email')
      expect(inputProps.error).toBe(false)
      expect(inputProps.required).toBe(true)
      expect(inputProps.clearable).toBe(true)
      expect(inputProps.name).toBe('email')
      expect(inputProps.value).toBe('test@example.com')
    })

    it('should handle error as string', () => {
      const inputProps: InputAPI = {
        error: 'This field is required',
        label: 'Required Field'
      }
      
      expect(inputProps.error).toBe('This field is required')
    })
  })

  describe('BadgeAPI', () => {
    it('should accept valid badge props', () => {
      const badgeProps: BadgeAPI = {
        variant: 'success',
        size: 'md',
        color: 'warning',
        leftIcon: '✅',
        rightIcon: '×',
        iconPosition: 'left',
        icon: '🔍',
        removable: true,
        onRemove: jest.fn(),
        rounded: true,
        elevated: true,
        borderRadius: 'lg',
        shadow: 'md',
        children: 'Badge Text'
      }
      
      expect(badgeProps.variant).toBe('success')
      expect(badgeProps.removable).toBe(true)
      expect(badgeProps.children).toBe('Badge Text')
    })
  })

  describe('AvatarAPI', () => {
    it('should accept valid avatar props', () => {
      const avatarProps: AvatarAPI = {
        size: 'md',
        src: 'https://example.com/avatar.jpg',
        alt: 'User Avatar',
        fallback: 'JD',
        status: 'online',
        showStatus: true,
        rounded: true,
        elevated: true,
        borderRadius: 'full',
        shadow: 'md',
        onClick: jest.fn()
      }
      
      expect(avatarProps.size).toBe('md')
      expect(avatarProps.src).toBe('https://example.com/avatar.jpg')
      expect(avatarProps.status).toBe('online')
      expect(avatarProps.showStatus).toBe(true)
    })
  })

  describe('SpinnerAPI', () => {
    it('should accept valid spinner props', () => {
      const spinnerProps: SpinnerAPI = {
        size: 'md',
        variant: 'primary',
        color: 'success',
        loadingText: 'Loading...',
        textPosition: 'bottom',
        type: 'spinner',
        speed: 'normal'
      }
      
      expect(spinnerProps.size).toBe('md')
      expect(spinnerProps.type).toBe('spinner')
      expect(spinnerProps.speed).toBe('normal')
    })
  })

  describe('CardAPI', () => {
    it('should accept valid card props', () => {
      const cardProps: CardAPI = {
        variant: 'default',
        color: 'primary',
        rounded: true,
        elevated: true,
        borderRadius: 'lg',
        shadow: 'md',
        bordered: true,
        clickable: true,
        onClick: jest.fn(),
        children: 'Card Content'
      }
      
      expect(cardProps.variant).toBe('default')
      expect(cardProps.clickable).toBe(true)
      expect(cardProps.children).toBe('Card Content')
    })
  })

  describe('SearchBarAPI', () => {
    it('should accept valid search bar props', () => {
      const searchBarProps: SearchBarAPI = {
        placeholder: 'Search...',
        value: 'search term',
        onSearch: jest.fn(),
        onChange: jest.fn(),
        clearable: true,
        loading: false,
        size: 'md',
        variant: 'outline',
        color: 'primary',
        leftIcon: '🔍',
        rightIcon: '×',
        iconPosition: 'left',
        icon: '🔍',
        fullWidth: true,
        rounded: true,
        elevated: true,
        borderRadius: 'lg',
        shadow: 'md',
        name: 'search',
        error: false,
        helperText: 'Enter search term',
        required: false
      }
      
      expect(searchBarProps.placeholder).toBe('Search...')
      expect(searchBarProps.value).toBe('search term')
      expect(searchBarProps.clearable).toBe(true)
    })
  })

  describe('AlertAPI', () => {
    it('should accept valid alert props', () => {
      const alertProps: AlertAPI = {
        variant: 'warning',
        color: 'warning',
        leftIcon: '⚠️',
        rightIcon: '×',
        iconPosition: 'left',
        icon: '⚠️',
        dismissible: true,
        onDismiss: jest.fn(),
        rounded: true,
        elevated: true,
        borderRadius: 'lg',
        shadow: 'md',
        children: 'Alert message'
      }
      
      expect(alertProps.variant).toBe('warning')
      expect(alertProps.dismissible).toBe(true)
      expect(alertProps.children).toBe('Alert message')
    })
  })

  describe('ModalAPI', () => {
    it('should accept valid modal props', () => {
      const modalProps: ModalAPI = {
        isOpen: true,
        onClose: jest.fn(),
        title: 'Modal Title',
        description: 'Modal description',
        size: 'md',
        rounded: true,
        elevated: true,
        borderRadius: 'lg',
        shadow: 'md',
        closeOnOverlayClick: true,
        closeOnEscape: true,
        showCloseButton: true,
        children: 'Modal content'
      }
      
      expect(modalProps.isOpen).toBe(true)
      expect(modalProps.title).toBe('Modal Title')
      expect(modalProps.closeOnOverlayClick).toBe(true)
      expect(modalProps.children).toBe('Modal content')
    })
  })

  describe('HeaderAPI', () => {
    it('should accept valid header props', () => {
      const headerProps: HeaderAPI = {
        title: 'App Header',
        subtitle: 'Welcome to the app',
        logo: '🏠',
        navigation: 'Nav items',
        search: 'Search component',
        userMenu: 'User menu',
        actions: 'Action buttons',
        rounded: true,
        elevated: true,
        borderRadius: 'lg',
        shadow: 'md',
        bordered: true,
        onSearch: jest.fn(),
        onLogin: jest.fn(),
        onSignup: jest.fn()
      }
      
      expect(headerProps.title).toBe('App Header')
      expect(headerProps.subtitle).toBe('Welcome to the app')
      expect(headerProps.bordered).toBe(true)
    })
  })

  describe('DataTableAPI', () => {
    it('should accept valid data table props', () => {
      const data = [
        { id: 1, name: 'John', email: 'john@example.com' },
        { id: 2, name: 'Jane', email: 'jane@example.com' }
      ]
      
      const columns: UnifiedColumn<typeof data[0]>[] = [
        { key: 'id', title: 'ID', sortable: true },
        { key: 'name', title: 'Name', sortable: true },
        { key: 'email', title: 'Email', sortable: true }
      ]
      
      const dataTableProps: DataTableAPI<typeof data[0]> = {
        data,
        columns,
        searchable: true,
        sortable: true,
        pagination: true,
        pageSize: 10,
        currentPage: 1,
        totalPages: 5,
        loading: false,
        emptyState: 'No data found',
        size: 'md',
        rounded: true,
        elevated: true,
        borderRadius: 'lg',
        shadow: 'md',
        bordered: true,
        onRowClick: jest.fn(),
        onPageChange: jest.fn(),
        onSortChange: jest.fn(),
        onSearch: jest.fn()
      }
      
      expect(dataTableProps.data).toEqual(data)
      expect(dataTableProps.columns).toEqual(columns)
      expect(dataTableProps.searchable).toBe(true)
      expect(dataTableProps.sortable).toBe(true)
    })
  })

  describe('TimeChartAPI', () => {
    it('should accept valid time chart props', () => {
      const data: TimeChartData[] = [
        {
          id: '1',
          label: 'Task 1',
          color: '#3b82f6',
          startTime: new Date('2024-01-01T09:00:00'),
          endTime: new Date('2024-01-01T17:00:00'),
          value: 8
        }
      ]
      
      const events: TimeChartEvent[] = [
        {
          id: 'event-1',
          time: new Date('2024-01-01T12:00:00'),
          type: 'info',
          icon: 'ℹ️',
          label: 'Break',
          description: 'Lunch break'
        }
      ]
      
      const timeChartProps: TimeChartAPI = {
        title: 'Schedule',
        startDate: new Date('2024-01-01T08:00:00'),
        endDate: new Date('2024-01-01T18:00:00'),
        data,
        events,
        currentTime: new Date('2024-01-01T14:00:00'),
        zoom: 1,
        showSummary: true,
        showZoomControls: true,
        showFilterControls: true,
        actions: 'Custom actions',
        rounded: true,
        elevated: true,
        borderRadius: 'lg',
        shadow: 'md',
        bordered: true,
        onZoomChange: jest.fn(),
        onDataPointClick: jest.fn(),
        onEventClick: jest.fn()
      }
      
      expect(timeChartProps.title).toBe('Schedule')
      expect(timeChartProps.data).toEqual(data)
      expect(timeChartProps.events).toEqual(events)
      expect(timeChartProps.showSummary).toBe(true)
    })
  })

  describe('ThemeProviderAPI', () => {
    it('should accept valid theme provider props', () => {
      const themeProviderProps: ThemeProviderAPI = {
        theme: 'dark',
        defaultTheme: 'light',
        storageKey: 'keypix-theme',
        children: 'App content'
      }
      
      expect(themeProviderProps.theme).toBe('dark')
      expect(themeProviderProps.defaultTheme).toBe('light')
      expect(themeProviderProps.storageKey).toBe('keypix-theme')
      expect(themeProviderProps.children).toBe('App content')
    })
  })

  describe('UnifiedColumn', () => {
    it('should accept valid column definition', () => {
      const column: UnifiedColumn<{ id: number; name: string }> = {
        key: 'name',
        title: 'Name',
        sortable: true,
        width: '200px',
        render: (value) => <span>{value}</span>,
        align: 'left',
        hidden: false
      }
      
      expect(column.key).toBe('name')
      expect(column.title).toBe('Name')
      expect(column.sortable).toBe(true)
      expect(column.align).toBe('left')
    })
  })

  describe('TimeChartData', () => {
    it('should accept valid time chart data', () => {
      const data: TimeChartData = {
        id: 'task-1',
        label: 'Development',
        color: '#3b82f6',
        startTime: new Date('2024-01-01T09:00:00'),
        endTime: new Date('2024-01-01T17:00:00'),
        value: 8,
        metadata: { priority: 'high', assignee: 'John' }
      }
      
      expect(data.id).toBe('task-1')
      expect(data.label).toBe('Development')
      expect(data.color).toBe('#3b82f6')
      expect(data.value).toBe(8)
      expect(data.metadata).toEqual({ priority: 'high', assignee: 'John' })
    })
  })

  describe('TimeChartEvent', () => {
    it('should accept valid time chart event', () => {
      const event: TimeChartEvent = {
        id: 'event-1',
        time: new Date('2024-01-01T12:00:00'),
        type: 'warning',
        icon: '⚠️',
        label: 'Meeting',
        description: 'Team meeting'
      }
      
      expect(event.id).toBe('event-1')
      expect(event.type).toBe('warning')
      expect(event.label).toBe('Meeting')
      expect(event.description).toBe('Team meeting')
    })
  })

  describe('ComponentAPIs', () => {
    it('should define all component APIs', () => {
      const apis: ComponentAPIs = {
        Button: {} as ButtonAPI,
        Input: {} as InputAPI,
        Badge: {} as BadgeAPI,
        Avatar: {} as AvatarAPI,
        AvatarGroup: {} as AvatarGroupAPI,
        Spinner: {} as SpinnerAPI,
        Card: {} as CardAPI,
        CardHeader: {} as CardHeaderAPI,
        CardTitle: {} as CardTitleAPI,
        CardDescription: {} as CardDescriptionAPI,
        CardContent: {} as CardContentAPI,
        SearchBar: {} as SearchBarAPI,
        Alert: {} as AlertAPI,
        AlertTitle: {} as AlertTitleAPI,
        AlertDescription: {} as AlertDescriptionAPI,
        Modal: {} as ModalAPI,
        Header: {} as HeaderAPI,
        DataTable: {} as DataTableAPI,
        TimeChart: {} as TimeChartAPI,
        ThemeProvider: {} as ThemeProviderAPI
      }
      
      expect(apis.Button).toBeDefined()
      expect(apis.Input).toBeDefined()
      expect(apis.Badge).toBeDefined()
      expect(apis.Avatar).toBeDefined()
      expect(apis.Spinner).toBeDefined()
      expect(apis.Card).toBeDefined()
      expect(apis.SearchBar).toBeDefined()
      expect(apis.Alert).toBeDefined()
      expect(apis.Modal).toBeDefined()
      expect(apis.Header).toBeDefined()
      expect(apis.DataTable).toBeDefined()
      expect(apis.TimeChart).toBeDefined()
      expect(apis.ThemeProvider).toBeDefined()
    })
  })

  describe('UnifiedComponentProps', () => {
    it('should extract component props correctly', () => {
      type ButtonProps = UnifiedComponentProps<'Button'>
      type InputProps = UnifiedComponentProps<'Input'>
      type BadgeProps = UnifiedComponentProps<'Badge'>
      
      // These should be the same as the respective APIs
      const buttonProps: ButtonProps = {} as ButtonAPI
      const inputProps: InputProps = {} as InputAPI
      const badgeProps: BadgeProps = {} as BadgeAPI
      
      expect(buttonProps).toBeDefined()
      expect(inputProps).toBeDefined()
      expect(badgeProps).toBeDefined()
    })
  })

  describe('ExtractUnifiedComponentProps', () => {
    it('should extract props from component type', () => {
      // Mock component type
      type MockComponent = React.ComponentType<ButtonAPI>
      
      type ExtractedProps = ExtractUnifiedComponentProps<MockComponent>
      
      // Should be the same as ButtonAPI
      const props: ExtractedProps = {} as ButtonAPI
      
      expect(props).toBeDefined()
    })
  })

  describe('API consistency', () => {
    it('should maintain consistent prop patterns across components', () => {
      // Test that common props are consistently named
      const buttonProps: ButtonAPI = {
        size: 'md',
        variant: 'primary',
        color: 'success',
        rounded: true,
        elevated: true,
        disabled: false,
        loading: false
      }
      
      const inputProps: InputAPI = {
        size: 'md',
        variant: 'outline',
        color: 'primary',
        rounded: true,
        elevated: true,
        disabled: false,
        loading: false
      }
      
      const badgeProps: BadgeAPI = {
        size: 'md',
        variant: 'success',
        color: 'warning',
        rounded: true,
        elevated: true
      }
      
      // All should have consistent prop names
      expect(buttonProps.size).toBe('md')
      expect(inputProps.size).toBe('md')
      expect(badgeProps.size).toBe('md')
      
      expect(buttonProps.variant).toBe('primary')
      expect(inputProps.variant).toBe('outline')
      expect(badgeProps.variant).toBe('success')
    })

    it('should support optional props consistently', () => {
      // Test that optional props work consistently
      const minimalButton: ButtonAPI = {}
      const minimalInput: InputAPI = {}
      const minimalBadge: BadgeAPI = {}
      
      expect(minimalButton.size).toBeUndefined()
      expect(minimalInput.size).toBeUndefined()
      expect(minimalBadge.size).toBeUndefined()
    })
  })

  describe('Event handlers', () => {
    it('should support consistent event handler patterns', () => {
      const buttonProps: ButtonAPI = {
        onClick: jest.fn()
      }
      
      const inputProps: InputAPI = {
        onChange: jest.fn()
      }
      
      const modalProps: ModalAPI = {
        isOpen: false,
        onClose: jest.fn()
      }
      
      expect(typeof buttonProps.onClick).toBe('function')
      expect(typeof inputProps.onChange).toBe('function')
      expect(typeof modalProps.onClose).toBe('function')
    })
  })

  describe('Children prop', () => {
    it('should support children consistently', () => {
      const buttonProps: ButtonAPI = {
        children: 'Button Text'
      }
      
      const cardProps: CardAPI = {
        children: 'Card Content'
      }
      
      const alertProps: AlertAPI = {
        children: 'Alert Message'
      }
      
      expect(buttonProps.children).toBe('Button Text')
      expect(cardProps.children).toBe('Card Content')
      expect(alertProps.children).toBe('Alert Message')
    })
  })
}) 