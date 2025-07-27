# Keypix UI Library

Современная библиотека React компонентов с унифицированным API для создания консистентных пользовательских интерфейсов.

## 🚀 Особенности

- **Унифицированный API** - консистентные интерфейсы для всех компонентов
- **TypeScript** - полная типизация и автодополнение
- **Atomic Design** - структура компонентов по принципу атомарного дизайна
- **Accessibility** - встроенная поддержка доступности
- **Customizable** - гибкая система темизации и кастомизации
- **Modern** - современные React паттерны и хуки

## 📦 Установка

```bash
npm install @keypix/ui
# или
yarn add @keypix/ui
```

## 🎯 Быстрый старт

```tsx
import { Button, Input, Card, CardContent, CardHeader, CardTitle } from '@keypix/ui'

function App() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Welcome to Keypix UI</CardTitle>
      </CardHeader>
      <CardContent>
        <Input 
          label="Email" 
          placeholder="Enter your email"
          leftIcon="📧"
        />
        <Button variant="primary" leftIcon="🚀">
          Get Started
        </Button>
      </CardContent>
    </Card>
  )
}
```

## 🏗️ Унифицированный API

Keypix UI использует унифицированную систему API, обеспечивающую консистентность во всех компонентах:

### Базовые принципы

```tsx
// Все компоненты следуют единым соглашениям
<Button size="md" variant="primary" color="success" />
<Input size="md" variant="outline" color="primary" />
<Badge size="md" variant="success" color="warning" />
```

### Унифицированные размеры

```tsx
type Size = 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl'
```

### Унифицированные варианты

```tsx
type Variant = 'default' | 'primary' | 'secondary' | 'success' | 'warning' | 'error' | 'outline' | 'ghost'
```

### Унифицированные цвета

```tsx
type Color = 'primary' | 'secondary' | 'success' | 'warning' | 'error' | 'info' | 'muted'
```

## 🧩 Компоненты

### Atoms (Атомы)

Базовые строительные блоки интерфейса:

- **Button** - кнопки с различными вариантами и состояниями
- **Input** - поля ввода с валидацией и иконками
- **Badge** - бейджи для статусов и меток
- **Avatar** - аватары пользователей с статусами
- **Spinner** - индикаторы загрузки
- **Card** - карточки для группировки контента

### Molecules (Молекулы)

Составные компоненты:

- **SearchBar** - поисковая строка с кнопкой
- **Alert** - уведомления и предупреждения
- **Modal** - модальные окна и диалоги

### Organisms (Организмы)

Сложные компоненты:

- **Header** - заголовок приложения с навигацией
- **DataTable** - таблицы данных с сортировкой и пагинацией
- **TimeChart** - временные диаграммы для планирования

## 🎣 Унифицированные хуки

### useFormState

Управление состоянием формы с валидацией:

```tsx
import { useFormState, validationRules } from '@keypix/ui'

const form = useFormState(
  { email: '', password: '' },
  {
    email: validationRules.email,
    password: validationRules.minLength(6)
  }
)

// Использование
<Input
  value={form.values.email}
  onChange={(e) => form.setFieldValue('email', e.target.value)}
  error={form.errors.email}
/>
```

### useLoadingState

Управление состоянием загрузки:

```tsx
import { useLoadingState } from '@keypix/ui'

const { loading, withLoading } = useLoadingState()

const handleSubmit = async () => {
  await withLoading(async () => {
    // async operation
  })
}
```

### useVisibilityState

Управление видимостью компонентов:

```tsx
import { useVisibilityState } from '@keypix/ui'

const { visible, show, hide, toggle } = useVisibilityState()

// Использование
<Modal isOpen={visible} onClose={hide} />
```

### useSelectionState

Управление выбором элементов:

```tsx
import { useSelectionState } from '@keypix/ui'

const { selection, select, deselect, isSelected } = useSelectionState()

// Использование
<DataTable onRowClick={(row) => select(row.id)} />
```

## 🛠️ Унифицированные утилиты

### createComponentClasses

Генерация CSS классов для компонентов:

```tsx
import { createComponentClasses } from '@keypix/ui'

const classes = createComponentClasses('button', {
  size: 'md',
  variant: 'primary',
  rounded: true,
  elevated: true
})
```

### createAccessibilityProps

Генерация accessibility атрибутов:

```tsx
import { createAccessibilityProps } from '@keypix/ui'

const ariaProps = createAccessibilityProps({
  'aria-label': 'Submit form',
  'aria-describedby': 'form-description',
  role: 'button'
})
```

### createEventHandlers

Создание обработчиков событий:

```tsx
import { createEventHandlers } from '@keypix/ui'

const handlers = createEventHandlers({
  onClick: handleClick,
  onFocus: handleFocus,
  disabled: false,
  loading: false
})
```

## 🎨 Темизация

### ThemeProvider

```tsx
import { ThemeProvider } from '@keypix/ui'

function App() {
  return (
    <ThemeProvider theme="dark">
      <YourApp />
    </ThemeProvider>
  )
}
```

### Кастомные темы

```tsx
import { createTheme } from '@keypix/ui'

const customTheme = createTheme({
  colors: {
    primary: '#007bff',
    secondary: '#6c757d',
    success: '#28a745',
    warning: '#ffc107',
    error: '#dc3545'
  },
  spacing: {
    xs: '0.25rem',
    sm: '0.5rem',
    md: '1rem',
    lg: '1.5rem',
    xl: '3rem'
  }
})
```

## 📚 Примеры

### Простая форма

```tsx
import { 
  Button, 
  Input, 
  Card, 
  CardContent, 
  CardHeader, 
  CardTitle,
  useFormState,
  validationRules 
} from '@keypix/ui'

function LoginForm() {
  const form = useFormState(
    { email: '', password: '' },
    {
      email: validationRules.email,
      password: validationRules.minLength(6)
    }
  )

  return (
    <Card>
      <CardHeader>
        <CardTitle>Login</CardTitle>
      </CardHeader>
      <CardContent>
        <Input
          label="Email"
          value={form.values.email}
          onChange={(e) => form.setFieldValue('email', e.target.value)}
          error={form.errors.email}
          leftIcon="📧"
        />
        <Input
          label="Password"
          type="password"
          value={form.values.password}
          onChange={(e) => form.setFieldValue('password', e.target.value)}
          error={form.errors.password}
          leftIcon="🔒"
        />
        <Button 
          variant="primary" 
          fullWidth
          disabled={!form.isValid}
        >
          Login
        </Button>
      </CardContent>
    </Card>
  )
}
```

### Таблица данных

```tsx
import { DataTable, Badge } from '@keypix/ui'

const data = [
  { id: 1, name: 'John Doe', email: 'john@example.com', status: 'active' },
  { id: 2, name: 'Jane Smith', email: 'jane@example.com', status: 'inactive' }
]

const columns = [
  { key: 'id', title: 'ID', sortable: true },
  { key: 'name', title: 'Name', sortable: true },
  { key: 'email', title: 'Email', sortable: true },
  { 
    key: 'status', 
    title: 'Status', 
    sortable: true,
    render: (value) => (
      <Badge variant={value === 'active' ? 'success' : 'secondary'}>
        {value}
      </Badge>
    )
  }
]

function UsersTable() {
  return (
    <DataTable
      data={data}
      columns={columns}
      searchable
      sortable
      pagination
      pageSize={10}
    />
  )
}
```

### Временная диаграмма

```tsx
import { TimeChart } from '@keypix/ui'

const data = [
  {
    id: 'task-1',
    label: 'Development',
    color: '#3b82f6',
    startTime: new Date('2024-01-15T09:00:00'),
    endTime: new Date('2024-01-15T12:00:00'),
    value: 3.0
  }
]

const events = [
  {
    id: 'event-1',
    time: new Date('2024-01-15T10:30:00'),
    type: 'info',
    icon: 'ℹ️',
    label: 'Code Review',
    description: 'Code review scheduled'
  }
]

function ProjectTimeline() {
  return (
    <TimeChart
      title="Project Timeline"
      startDate={new Date('2024-01-15T08:00:00')}
      endDate={new Date('2024-01-15T18:00:00')}
      data={data}
      events={events}
      currentTime={new Date('2024-01-15T11:00:00')}
      showSummary
      showZoomControls
    />
  )
}
```

## 🔧 Разработка

### Установка зависимостей

```bash
npm install
```

### Запуск в режиме разработки

```bash
npm run dev
```

### Сборка

```bash
npm run build
```

### Тестирование

```bash
npm test
```

## 📖 Документация

- [Унифицированный API](./docs/unified-api.md) - подробное описание унифицированного API
- [Компоненты](./docs/components/) - документация по компонентам
- [Туториалы](./docs/tutorials/) - руководства по использованию
- [Миграция](./docs/migration/) - руководства по миграции

## 🤝 Вклад в проект

Мы приветствуем вклад в развитие библиотеки! Пожалуйста, ознакомьтесь с [руководством по вкладу](./CONTRIBUTING.md).

## 📄 Лицензия

MIT License - см. файл [LICENSE](./LICENSE) для подробностей.

## 🆘 Поддержка

Если у вас есть вопросы или проблемы:

- Создайте [issue](https://github.com/keypix/ui/issues)
- Обратитесь к [документации](./docs/)
- Присоединитесь к нашему [Discord](https://discord.gg/keypix)

---

**Keypix UI** - создано с ❤️ для сообщества React разработчиков.
