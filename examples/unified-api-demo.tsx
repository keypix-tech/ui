import * as React from 'react'
import {
  Button,
  Input,
  Badge,
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  Alert,
  Modal,
  DataTable,
  TimeChart,
  useFormState,
  useLoadingState,
  useVisibilityState,
  useSelectionState,
  createComponentClasses,
  createAccessibilityProps,
  validationRules,
  type ButtonAPI,
  type InputAPI,
  type BadgeAPI,
  type DataTableAPI,
  type TimeChartAPI
} from '@keypix/ui'

// ============================================================================
// ДЕМОНСТРАЦИЯ УНИФИЦИРОВАННОГО API
// ============================================================================

export function UnifiedAPIDemo() {
  // Унифицированные хуки
  const { loading, withLoading } = useLoadingState()
  const { visible, show, hide, toggle } = useVisibilityState()
  const { selection, select, deselect, isSelected } = useSelectionState<string>()

  // Форма с унифицированными хуками
  const form = useFormState(
    { email: '', password: '', confirmPassword: '' },
    {
      email: validationRules.email,
      password: validationRules.minLength(6),
      confirmPassword: (value) => {
        if (value !== form.values.password) {
          return 'Passwords do not match'
        }
      }
    }
  )

  // Обработчики
  const handleSubmit = async () => {
    await withLoading(async () => {
      await new Promise(resolve => setTimeout(resolve, 2000))
      console.log('Form submitted:', form.values)
    })
  }

  const handleRowSelect = (row: any) => {
    if (isSelected(row.id)) {
      deselect(row.id)
    } else {
      select(row.id)
    }
  }

  // Данные для таблицы
  const tableData = [
    { id: '1', name: 'John Doe', email: 'john@example.com', status: 'active' },
    { id: '2', name: 'Jane Smith', email: 'jane@example.com', status: 'inactive' },
    { id: '3', name: 'Bob Johnson', email: 'bob@example.com', status: 'active' },
  ]

  const tableColumns = [
    { key: 'id', title: 'ID', sortable: true },
    { key: 'name', title: 'Name', sortable: true },
    { key: 'email', title: 'Email', sortable: true },
    { 
      key: 'status', 
      title: 'Status', 
      sortable: true,
      render: (value: string) => (
        <Badge variant={value === 'active' ? 'success' : 'secondary'}>
          {value}
        </Badge>
      )
    },
  ]

  // Данные для TimeChart
  const timeChartData = [
    {
      id: 'task-1',
      label: 'Development',
      color: '#3b82f6',
      startTime: new Date('2024-01-15T09:00:00'),
      endTime: new Date('2024-01-15T12:00:00'),
      value: 3.0
    },
    {
      id: 'task-2',
      label: 'Testing',
      color: '#10b981',
      startTime: new Date('2024-01-15T13:00:00'),
      endTime: new Date('2024-01-15T16:00:00'),
      value: 3.0
    },
    {
      id: 'task-3',
      label: 'Review',
      color: '#f59e0b',
      startTime: new Date('2024-01-15T16:00:00'),
      endTime: new Date('2024-01-15T17:00:00'),
      value: 1.0
    }
  ]

  const timeChartEvents = [
    {
      id: 'event-1',
      time: new Date('2024-01-15T10:30:00'),
      type: 'info' as const,
      icon: 'ℹ️',
      label: 'Code Review',
      description: 'Code review scheduled'
    },
    {
      id: 'event-2',
      time: new Date('2024-01-15T14:15:00'),
      type: 'warning' as const,
      icon: '⚠️',
      label: 'Test Failure',
      description: 'Some tests are failing'
    }
  ]

  return (
    <div className="p-8 space-y-8">
      <div className="text-center">
        <h1 className="text-3xl font-bold mb-4">Унифицированный API Demo</h1>
        <p className="text-gray-600">
          Демонстрация консистентных интерфейсов и унифицированных хуков
        </p>
      </div>

      {/* Форма с унифицированными хуками */}
      <Card>
        <CardHeader>
          <CardTitle>Форма с унифицированными хуками</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <Input
            label="Email"
            value={form.values.email}
            onChange={(e) => form.setFieldValue('email', e.target.value)}
            onBlur={() => form.setFieldTouched('email')}
            error={form.errors.email}
            required
            leftIcon="📧"
            clearable
            onClear={() => form.setFieldValue('email', '')}
          />
          
          <Input
            label="Password"
            type="password"
            value={form.values.password}
            onChange={(e) => form.setFieldValue('password', e.target.value)}
            onBlur={() => form.setFieldTouched('password')}
            error={form.errors.password}
            required
            leftIcon="🔒"
          />
          
          <Input
            label="Confirm Password"
            type="password"
            value={form.values.confirmPassword}
            onChange={(e) => form.setFieldValue('confirmPassword', e.target.value)}
            onBlur={() => form.setFieldTouched('confirmPassword')}
            error={form.errors.confirmPassword}
            required
            leftIcon="🔒"
          />

          <div className="flex gap-4">
            <Button
              onClick={handleSubmit}
              loading={loading}
              loadingText="Submitting..."
              variant="primary"
              leftIcon="🚀"
              fullWidth
            >
              Submit Form
            </Button>
            
            <Button
              onClick={form.resetForm}
              variant="outline"
              leftIcon="🔄"
            >
              Reset
            </Button>
          </div>

          {form.isDirty && (
            <Alert variant="info">
              Form has been modified
            </Alert>
          )}
        </CardContent>
      </Card>

      {/* Унифицированные компоненты */}
      <Card>
        <CardHeader>
          <CardTitle>Унифицированные компоненты</CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          {/* Buttons */}
          <div>
            <h3 className="text-lg font-semibold mb-3">Buttons</h3>
            <div className="flex flex-wrap gap-2">
              <Button size="sm" variant="default">Default</Button>
              <Button size="sm" variant="primary">Primary</Button>
              <Button size="sm" variant="success">Success</Button>
              <Button size="sm" variant="warning">Warning</Button>
              <Button size="sm" variant="error">Error</Button>
              <Button size="sm" variant="outline">Outline</Button>
              <Button size="sm" variant="ghost">Ghost</Button>
            </div>
          </div>

          {/* Badges */}
          <div>
            <h3 className="text-lg font-semibold mb-3">Badges</h3>
            <div className="flex flex-wrap gap-2">
              <Badge variant="default">Default</Badge>
              <Badge variant="success">Success</Badge>
              <Badge variant="warning">Warning</Badge>
              <Badge variant="error">Error</Badge>
              <Badge variant="outline">Outline</Badge>
              <Badge removable onRemove={() => console.log('Removed')}>
                Removable
              </Badge>
            </div>
          </div>

          {/* Modal Control */}
          <div>
            <h3 className="text-lg font-semibold mb-3">Modal Control</h3>
            <div className="flex gap-2">
              <Button onClick={show} variant="primary">
                Show Modal
              </Button>
              <Button onClick={hide} variant="outline">
                Hide Modal
              </Button>
              <Button onClick={toggle} variant="ghost">
                Toggle Modal
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* DataTable с унифицированным API */}
      <Card>
        <CardHeader>
          <CardTitle>DataTable с унифицированным API</CardTitle>
        </CardHeader>
        <CardContent>
          <DataTable
            data={tableData}
            columns={tableColumns}
            searchable
            sortable
            pagination
            pageSize={5}
            onRowClick={handleRowSelect}
            size="md"
            elevated
            rounded
          />
          
          {selection.length > 0 && (
            <div className="mt-4">
              <p>Selected: {selection.join(', ')}</p>
              <Button
                onClick={() => selection.forEach(deselect)}
                variant="outline"
                size="sm"
              >
                Clear Selection
              </Button>
            </div>
          )}
        </CardContent>
      </Card>

      {/* TimeChart с унифицированным API */}
      <Card>
        <CardHeader>
          <CardTitle>TimeChart с унифицированным API</CardTitle>
        </CardHeader>
        <CardContent>
          <TimeChart
            title="Project Timeline"
            startDate={new Date('2024-01-15T08:00:00')}
            endDate={new Date('2024-01-15T18:00:00')}
            data={timeChartData}
            events={timeChartEvents}
            currentTime={new Date('2024-01-15T11:00:00')}
            zoom={1}
            showSummary
            showZoomControls
            showFilterControls
            onDataPointClick={(data) => console.log('Data clicked:', data)}
            onEventClick={(event) => console.log('Event clicked:', event)}
            elevated
            rounded
          />
        </CardContent>
      </Card>

      {/* Modal */}
      <Modal
        isOpen={visible}
        onClose={hide}
        title="Унифицированный Modal"
        description="Этот модал использует унифицированный API"
        size="md"
        elevated
        rounded
      >
        <div className="space-y-4">
          <p>Этот модал демонстрирует унифицированный API для модальных окон.</p>
          
          <div className="flex gap-2">
            <Button onClick={hide} variant="outline">
              Cancel
            </Button>
            <Button onClick={hide} variant="primary">
              Confirm
            </Button>
          </div>
        </div>
      </Modal>
    </div>
  )
}

// ============================================================================
// ПРИМЕР КАСТОМНОГО КОМПОНЕНТА С УНИФИЦИРОВАННЫМ API
// ============================================================================

interface CustomButtonProps extends ButtonAPI {
  /** Дополнительная функциональность */
  pulse?: boolean
  /** Кастомная анимация */
  animation?: 'bounce' | 'shake' | 'rotate'
}

export const CustomButton: React.FC<CustomButtonProps> = ({
  variant = 'default',
  size = 'md',
  loading = false,
  pulse = false,
  animation,
  children,
  className,
  ...props
}) => {
  // Используем унифицированные утилиты
  const classes = createComponentClasses('custom-button', {
    variant,
    size,
    loading,
    disabled: props.disabled
  })

  const ariaProps = createAccessibilityProps({
    'aria-label': typeof children === 'string' ? children : 'Custom button',
    role: 'button'
  })

  const animationClasses = {
    bounce: 'animate-bounce',
    shake: 'animate-pulse',
    rotate: 'animate-spin'
  }

  return (
    <button
      className={`${classes} ${pulse ? 'animate-pulse' : ''} ${animation ? animationClasses[animation] : ''} ${className || ''}`}
      {...ariaProps}
      {...props}
    >
      {loading ? (
        <span className="flex items-center gap-2">
          <div className="w-4 h-4 border-2 border-current border-t-transparent rounded-full animate-spin" />
          Loading...
        </span>
      ) : (
        children
      )}
    </button>
  )
}

// ============================================================================
// ПРИМЕР КОМПОЗИЦИИ С УНИФИЦИРОВАННЫМИ ХУКАМИ
// ============================================================================

export function AdvancedFormDemo() {
  const { loading, withLoading } = useLoadingState()
  const { visible, show } = useVisibilityState()
  const { selection, select, isSelected } = useSelectionState<string>()

  const form = useFormState(
    { 
      name: '', 
      email: '', 
      preferences: [] as string[],
      notifications: true 
    },
    {
      name: validationRules.required,
      email: validationRules.email,
      preferences: (value) => {
        if (value.length === 0) {
          return 'Please select at least one preference'
        }
      }
    }
  )

  const preferences = [
    { id: 'news', label: 'News Updates' },
    { id: 'marketing', label: 'Marketing Emails' },
    { id: 'product', label: 'Product Updates' },
    { id: 'support', label: 'Support Notifications' }
  ]

  const handlePreferenceToggle = (prefId: string) => {
    const current = form.values.preferences
    const updated = current.includes(prefId)
      ? current.filter(id => id !== prefId)
      : [...current, prefId]
    
    form.setFieldValue('preferences', updated)
  }

  const handleSubmit = async () => {
    await withLoading(async () => {
      // Симуляция API вызова
      await new Promise(resolve => setTimeout(resolve, 2000))
      show() // Показать модал успеха
    })
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>Advanced Form с унифицированными хуками</CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        <Input
          label="Name"
          value={form.values.name}
          onChange={(e) => form.setFieldValue('name', e.target.value)}
          onBlur={() => form.setFieldTouched('name')}
          error={form.errors.name}
          required
          leftIcon="👤"
        />

        <Input
          label="Email"
          value={form.values.email}
          onChange={(e) => form.setFieldValue('email', e.target.value)}
          onBlur={() => form.setFieldTouched('email')}
          error={form.errors.email}
          required
          leftIcon="📧"
        />

        <div>
          <label className="block text-sm font-medium mb-2">
            Preferences
          </label>
          <div className="space-y-2">
            {preferences.map(pref => (
              <label key={pref.id} className="flex items-center gap-2">
                <input
                  type="checkbox"
                  checked={form.values.preferences.includes(pref.id)}
                  onChange={() => handlePreferenceToggle(pref.id)}
                  className="rounded"
                />
                {pref.label}
              </label>
            ))}
          </div>
          {form.errors.preferences && (
            <p className="text-red-500 text-sm mt-1">{form.errors.preferences}</p>
          )}
        </div>

        <div>
          <label className="flex items-center gap-2">
            <input
              type="checkbox"
              checked={form.values.notifications}
              onChange={(e) => form.setFieldValue('notifications', e.target.checked)}
              className="rounded"
            />
            Receive notifications
          </label>
        </div>

        <Button
          onClick={handleSubmit}
          loading={loading}
          loadingText="Saving..."
          variant="primary"
          fullWidth
          disabled={!form.isValid}
        >
          Save Preferences
        </Button>
      </CardContent>

      <Modal
        isOpen={visible}
        onClose={() => {}} // Пустая функция, так как модал закрывается автоматически
        title="Success!"
        description="Your preferences have been saved successfully."
        size="sm"
      >
        <div className="text-center">
          <div className="text-6xl mb-4">✅</div>
          <p className="text-gray-600 mb-4">
            Thank you for updating your preferences!
          </p>
          <Button onClick={() => window.location.reload()} variant="primary">
            Continue
          </Button>
        </div>
      </Modal>
    </Card>
  )
}

export default UnifiedAPIDemo 