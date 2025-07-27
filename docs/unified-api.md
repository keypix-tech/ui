# Унифицированный API - Keypix UI Library

## Обзор

Унифицированный API предоставляет консистентные интерфейсы для всех компонентов библиотеки Keypix UI. Это обеспечивает единообразный подход к разработке и использованию компонентов.

## Основные принципы

### 1. Единообразие пропсов
Все компоненты следуют единым соглашениям по именованию и структуре пропсов:

```typescript
// Базовые пропсы для всех компонентов
interface BaseComponent {
  id?: string
  className?: string
  style?: React.CSSProperties
  'data-testid'?: string
  disabled?: boolean
  loading?: boolean
}
```

### 2. Унифицированные размеры
Все компоненты используют единую систему размеров:

```typescript
type Size = 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl'
```

### 3. Унифицированные варианты
Стандартные варианты для всех компонентов:

```typescript
type Variant = 
  | 'default' 
  | 'secondary' 
  | 'destructive' 
  | 'outline' 
  | 'ghost' 
  | 'link' 
  | 'success' 
  | 'warning' 
  | 'info'
```

### 4. Унифицированные цвета
Единая цветовая палитра:

```typescript
type Color = 
  | 'primary' 
  | 'secondary' 
  | 'success' 
  | 'warning' 
  | 'error' 
  | 'info' 
  | 'muted'
```

## Структура API

### Atoms (Атомы)

#### Button API
```typescript
interface ButtonAPI extends BaseComponent, Sizeable, Variantable, Loadable, Iconable, Stylable, Accessible {
  variant?: Variant
  size?: Size
  loading?: boolean
  loadingText?: string
  leftIcon?: React.ReactNode
  rightIcon?: React.ReactNode
  iconPosition?: IconPosition
  icon?: React.ReactNode
  fullWidth?: boolean
  disableOnLoading?: boolean
  color?: Color
  rounded?: boolean
  elevated?: boolean
  borderRadius?: BorderRadius
  shadow?: Shadow
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void
}
```

#### Input API
```typescript
interface InputAPI extends BaseComponent, Sizeable, Variantable, Loadable, Iconable, Stylable, Accessible {
  label?: string
  helperText?: string
  error?: boolean | string
  required?: boolean
  prefix?: React.ReactNode
  suffix?: React.ReactNode
  leftIcon?: React.ReactNode
  rightIcon?: React.ReactNode
  iconPosition?: IconPosition
  icon?: React.ReactNode
  clearable?: boolean
  loading?: boolean
  onClear?: () => void
  size?: Size
  variant?: Variant
  color?: Color
  fullWidth?: boolean
  rounded?: boolean
  elevated?: boolean
  borderRadius?: BorderRadius
  borderWidth?: 'none' | 'thin' | 'normal' | 'thick'
  borderColor?: Color
  bordered?: boolean
  shadow?: Shadow
  name?: string
  value?: string | number
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void
  placeholder?: string
  type?: string
}
```

#### Badge API
```typescript
interface BadgeAPI extends BaseComponent, Sizeable, Variantable, Iconable, Stylable, Accessible {
  variant?: Variant
  size?: Size
  color?: Color
  leftIcon?: React.ReactNode
  rightIcon?: React.ReactNode
  iconPosition?: IconPosition
  icon?: React.ReactNode
  removable?: boolean
  onRemove?: () => void
  rounded?: boolean
  elevated?: boolean
  borderRadius?: BorderRadius
  shadow?: Shadow
  children?: React.ReactNode
}
```

### Molecules (Молекулы)

#### SearchBar API
```typescript
interface SearchBarAPI extends BaseComponent, Sizeable, Variantable, Iconable, Stylable, Accessible {
  placeholder?: string
  value?: string
  onSearch?: (value: string) => void
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void
  clearable?: boolean
  loading?: boolean
  size?: Size
  variant?: Variant
  color?: Color
  leftIcon?: React.ReactNode
  rightIcon?: React.ReactNode
  iconPosition?: IconPosition
  icon?: React.ReactNode
  fullWidth?: boolean
  rounded?: boolean
  elevated?: boolean
  borderRadius?: BorderRadius
  shadow?: Shadow
  name?: string
  error?: boolean | string
  helperText?: string
  required?: boolean
}
```

#### Alert API
```typescript
interface AlertAPI extends BaseComponent, Variantable, Iconable, Stylable, Accessible {
  variant?: Variant
  color?: Color
  leftIcon?: React.ReactNode
  rightIcon?: React.ReactNode
  iconPosition?: IconPosition
  icon?: React.ReactNode
  dismissible?: boolean
  onDismiss?: () => void
  rounded?: boolean
  elevated?: boolean
  borderRadius?: BorderRadius
  shadow?: Shadow
  children?: React.ReactNode
}
```

#### Modal API
```typescript
interface ModalAPI extends BaseComponent, Sizeable, Stylable, Accessible {
  isOpen: boolean
  onClose: () => void
  title?: string
  description?: string
  size?: Size
  rounded?: boolean
  elevated?: boolean
  borderRadius?: BorderRadius
  shadow?: Shadow
  closeOnOverlayClick?: boolean
  closeOnEscape?: boolean
  showCloseButton?: boolean
  children?: React.ReactNode
}
```

### Organisms (Организмы)

#### Header API
```typescript
interface HeaderAPI extends BaseComponent, Stylable, Accessible {
  title?: string
  subtitle?: string
  logo?: React.ReactNode
  navigation?: React.ReactNode
  search?: React.ReactNode
  userMenu?: React.ReactNode
  actions?: React.ReactNode
  rounded?: boolean
  elevated?: boolean
  borderRadius?: BorderRadius
  shadow?: Shadow
  bordered?: boolean
  onSearch?: (value: string) => void
  onLogin?: () => void
  onSignup?: () => void
}
```

#### DataTable API
```typescript
interface DataTableAPI<T = Record<string, unknown>> extends BaseComponent, Sizeable, Stylable, Accessible {
  data: T[]
  columns: UnifiedColumn<T>[]
  searchable?: boolean
  sortable?: boolean
  pagination?: boolean
  pageSize?: number
  currentPage?: number
  totalPages?: number
  loading?: boolean
  emptyState?: React.ReactNode
  size?: Size
  rounded?: boolean
  elevated?: boolean
  borderRadius?: BorderRadius
  shadow?: Shadow
  bordered?: boolean
  onRowClick?: (row: T) => void
  onPageChange?: (page: number) => void
  onSortChange?: (column: keyof T, direction: 'asc' | 'desc') => void
  onSearch?: (query: string) => void
}
```

#### TimeChart API
```typescript
interface TimeChartAPI extends BaseComponent, Stylable, Accessible {
  title?: string
  startDate: Date
  endDate: Date
  data: TimeChartData[]
  events?: TimeChartEvent[]
  currentTime?: Date
  zoom?: number
  showSummary?: boolean
  showZoomControls?: boolean
  showFilterControls?: boolean
  actions?: React.ReactNode
  rounded?: boolean
  elevated?: boolean
  borderRadius?: BorderRadius
  shadow?: Shadow
  bordered?: boolean
  onZoomChange?: (zoom: number) => void
  onDataPointClick?: (data: TimeChartData) => void
  onEventClick?: (event: TimeChartEvent) => void
}
```

## Унифицированные хуки

### useComponentState
Управление состоянием компонента с возможностью персистентности:

```typescript
const { state, setState, resetState } = useComponentState(
  { size: 'md', variant: 'default' },
  { persist: true, storageKey: 'button-config' }
)
```

### useFormState
Управление состоянием формы с валидацией:

```typescript
const form = useFormState(
  { email: '', password: '' },
  {
    email: (value) => !value ? 'Email required' : undefined,
    password: (value) => value.length < 6 ? 'Min 6 characters' : undefined
  }
)
```

### useLoadingState
Управление состоянием загрузки:

```typescript
const { loading, setLoading, withLoading } = useLoadingState()

const handleSubmit = async () => {
  await withLoading(async () => {
    // async operation
  })
}
```

### useVisibilityState
Управление видимостью компонентов:

```typescript
const { visible, show, hide, toggle } = useVisibilityState()
```

### useSelectionState
Управление выбором элементов:

```typescript
const { selection, select, deselect, toggle, isSelected } = useSelectionState()
```

## Унифицированные утилиты

### createComponentClasses
Генерация CSS классов для компонентов:

```typescript
const classes = createComponentClasses('button', {
  size: 'md',
  variant: 'primary',
  rounded: true,
  elevated: true
})
```

### createComponentStyles
Генерация стилей для компонентов:

```typescript
const styles = createComponentStyles({
  size: 'md',
  borderRadius: 'lg',
  shadow: 'md',
  fullWidth: true
})
```

### createAccessibilityProps
Генерация accessibility атрибутов:

```typescript
const ariaProps = createAccessibilityProps({
  'aria-label': 'Submit form',
  'aria-describedby': 'form-description',
  role: 'button'
})
```

### createEventHandlers
Создание обработчиков событий:

```typescript
const handlers = createEventHandlers({
  onClick: handleClick,
  onFocus: handleFocus,
  disabled: false,
  loading: false
})
```

## Примеры использования

### Базовый компонент с унифицированным API

```typescript
import { ButtonAPI } from '@keypix/ui'

const MyButton: React.FC<ButtonAPI> = ({
  variant = 'default',
  size = 'md',
  loading = false,
  children,
  ...props
}) => {
  const classes = createComponentClasses('my-button', {
    variant,
    size,
    loading
  })

  return (
    <button className={classes} {...props}>
      {loading ? 'Loading...' : children}
    </button>
  )
}
```

### Форма с унифицированными хуками

```typescript
import { useFormState, validationRules } from '@keypix/ui'

const LoginForm = () => {
  const form = useFormState(
    { email: '', password: '' },
    {
      email: validationRules.email,
      password: validationRules.minLength(6)
    }
  )

  const handleSubmit = async () => {
    await form.handleSubmit(async (values) => {
      // Submit form
    })
  }

  return (
    <form onSubmit={handleSubmit}>
      <Input
        value={form.values.email}
        onChange={(e) => form.setFieldValue('email', e.target.value)}
        error={form.errors.email}
        onBlur={() => form.setFieldTouched('email')}
      />
      <Input
        type="password"
        value={form.values.password}
        onChange={(e) => form.setFieldValue('password', e.target.value)}
        error={form.errors.password}
        onBlur={() => form.setFieldTouched('password')}
      />
      <Button type="submit" loading={form.isSubmitting}>
        Login
      </Button>
    </form>
  )
}
```

### Компонент с унифицированными утилитами

```typescript
import { 
  createComponentClasses, 
  createAccessibilityProps,
  createEventHandlers 
} from '@keypix/ui'

const CustomCard: React.FC<CardAPI> = ({
  variant = 'default',
  elevated = false,
  children,
  onClick,
  ...props
}) => {
  const classes = createComponentClasses('card', {
    variant,
    elevated
  })

  const ariaProps = createAccessibilityProps({
    role: 'button',
    'aria-label': 'Clickable card'
  })

  const handlers = createEventHandlers({
    onClick,
    onKeyDown: (e) => {
      if (e.key === 'Enter' || e.key === ' ') {
        onClick?.(e as any)
      }
    }
  })

  return (
    <div 
      className={classes} 
      {...ariaProps}
      {...handlers}
      {...props}
    >
      {children}
    </div>
  )
}
```

## Преимущества унифицированного API

1. **Консистентность**: Все компоненты следуют единым соглашениям
2. **Предсказуемость**: Разработчики знают, чего ожидать от каждого компонента
3. **Переиспользование**: Общие интерфейсы позволяют легко переиспользовать логику
4. **Типобезопасность**: TypeScript обеспечивает проверку типов на этапе компиляции
5. **Документированность**: JSDoc комментарии обеспечивают хорошую документацию
6. **Расширяемость**: Легко добавлять новые компоненты, следуя установленным паттернам

## Миграция существующих компонентов

Для миграции существующих компонентов на унифицированный API:

1. Импортируйте соответствующие интерфейсы из `@keypix/ui`
2. Замените существующие типы на унифицированные
3. Используйте унифицированные хуки и утилиты
4. Обновите документацию компонента

```typescript
// До
interface ButtonProps {
  size?: 'small' | 'medium' | 'large'
  type?: 'primary' | 'secondary'
  // ...
}

// После
import { ButtonAPI } from '@keypix/ui'

const Button: React.FC<ButtonAPI> = (props) => {
  // implementation
}
``` 