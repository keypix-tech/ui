# TimeChart

Универсальный компонент временного графика для отображения данных на временной шкале. Идеально подходит для логистических систем, мониторинга активности, планирования задач и других временных данных.

## Особенности

- 📊 **Временная шкала** - отображение данных на горизонтальной временной оси
- 🎨 **Цветовое кодирование** - каждый тип данных имеет свой цвет
- 🔍 **Масштабирование** - встроенные элементы управления зумом
- 📍 **События** - отметки важных событий на временной шкале
- 📱 **Адаптивность** - горизонтальная прокрутка для больших временных диапазонов
- ⚡ **Интерактивность** - обработчики событий для кликов и изменений

## Использование

```tsx
import { TimeChart, TimeChartData, TimeChartEvent } from 'keypix-ui'

const data: TimeChartData[] = [
  {
    id: 'work-shift',
    label: 'Работа',
    color: '#3b82f6',
    startTime: new Date('2024-07-16T08:00:00'),
    endTime: new Date('2024-07-16T18:00:00'),
    value: 10.0
  },
  {
    id: 'break',
    label: 'Перерыв',
    color: '#10b981',
    startTime: new Date('2024-07-16T12:00:00'),
    endTime: new Date('2024-07-16T13:00:00'),
    value: 1.0
  }
]

const events: TimeChartEvent[] = [
  {
    id: 'meeting',
    time: new Date('2024-07-16T14:00:00'),
    type: 'info',
    icon: '📅',
    label: 'Встреча',
    description: 'Ежедневная встреча команды'
  }
]

function MyComponent() {
  return (
    <TimeChart
      title="Расписание дня"
      startDate={new Date('2024-07-16T06:00:00')}
      endDate={new Date('2024-07-16T22:00:00')}
      data={data}
      events={events}
      currentTime={new Date()}
      onDataPointClick={(data) => console.log('Clicked:', data)}
      onEventClick={(event) => console.log('Event:', event)}
    />
  )
}
```

## Props

### TimeChartProps

| Prop | Тип | По умолчанию | Описание |
|------|-----|--------------|----------|
| `title` | `string` | - | Заголовок графика |
| `startDate` | `Date` | **required** | Начальная дата временного диапазона |
| `endDate` | `Date` | **required** | Конечная дата временного диапазона |
| `data` | `TimeChartData[]` | **required** | Массив данных для отображения |
| `events` | `TimeChartEvent[]` | `[]` | Массив событий для отметки на шкале |
| `currentTime` | `Date` | - | Текущее время (отображается как вертикальная линия) |
| `zoom` | `number` | `1` | Уровень масштабирования |
| `showSummary` | `boolean` | `true` | Показывать панель с итогами |
| `showZoomControls` | `boolean` | `true` | Показывать элементы управления зумом |
| `showFilterControls` | `boolean` | `true` | Показывать кнопку фильтра |
| `actions` | `React.ReactNode` | - | Дополнительные действия в заголовке |
| `onZoomChange` | `(zoom: number) => void` | - | Обработчик изменения зума |
| `onTimeRangeChange` | `(start: Date, end: Date) => void` | - | Обработчик изменения временного диапазона |
| `onDataPointClick` | `(data: TimeChartData) => void` | - | Обработчик клика по данным |
| `onEventClick` | `(event: TimeChartEvent) => void` | - | Обработчик клика по событию |
| `className` | `string` | - | Дополнительные CSS классы |

### TimeChartData

| Поле | Тип | Описание |
|------|-----|----------|
| `id` | `string` | Уникальный идентификатор |
| `label` | `string` | Отображаемое название |
| `color` | `string` | Цвет для отображения (HEX, RGB, CSS color) |
| `startTime` | `Date` | Время начала |
| `endTime` | `Date` | Время окончания |
| `value` | `number` | Дополнительное числовое значение |
| `metadata` | `Record<string, unknown>` | Дополнительные метаданные |

### TimeChartEvent

| Поле | Тип | Описание |
|------|-----|----------|
| `id` | `string` | Уникальный идентификатор |
| `time` | `Date` | Время события |
| `type` | `'warning' \| 'error' \| 'info' \| 'success'` | Тип события |
| `icon` | `React.ReactNode` | Иконка события |
| `label` | `string` | Название события |
| `description` | `string` | Описание события |

## Примеры использования

### Логистическая система

```tsx
const driverData: TimeChartData[] = [
  {
    id: 'off-duty',
    label: 'OFF',
    color: '#6b7280',
    startTime: new Date('2024-07-16T06:00:00'),
    endTime: new Date('2024-07-16T08:00:00'),
    value: 2.0
  },
  {
    id: 'on-duty',
    label: 'ON',
    color: '#3b82f6',
    startTime: new Date('2024-07-16T08:00:00'),
    endTime: new Date('2024-07-16T18:00:00'),
    value: 10.0
  },
  {
    id: 'driving',
    label: 'D',
    color: '#059669',
    startTime: new Date('2024-07-16T18:00:00'),
    endTime: new Date('2024-07-16T22:00:00'),
    value: 4.0
  }
]

<TimeChart
  title="Driver Activity Log"
  startDate={new Date('2024-07-16T06:00:00')}
  endDate={new Date('2024-07-17T06:00:00')}
  data={driverData}
  showSummary={true}
  showZoomControls={true}
/>
```

### Планирование задач

```tsx
const taskData: TimeChartData[] = [
  {
    id: 'development',
    label: 'Разработка',
    color: '#3b82f6',
    startTime: new Date('2024-07-16T09:00:00'),
    endTime: new Date('2024-07-16T12:00:00'),
    value: 3.0
  },
  {
    id: 'meeting',
    label: 'Встреча',
    color: '#f59e0b',
    startTime: new Date('2024-07-16T12:00:00'),
    endTime: new Date('2024-07-16T13:00:00'),
    value: 1.0
  },
  {
    id: 'testing',
    label: 'Тестирование',
    color: '#10b981',
    startTime: new Date('2024-07-16T14:00:00'),
    endTime: new Date('2024-07-16T17:00:00'),
    value: 3.0
  }
]

<TimeChart
  title="Расписание дня"
  startDate={new Date('2024-07-16T08:00:00')}
  endDate={new Date('2024-07-16T18:00:00')}
  data={taskData}
  currentTime={new Date()}
  onDataPointClick={(task) => console.log('Task clicked:', task.label)}
/>
```

### Мониторинг системы

```tsx
const systemData: TimeChartData[] = [
  {
    id: 'normal',
    label: 'Нормальная работа',
    color: '#10b981',
    startTime: new Date('2024-07-16T00:00:00'),
    endTime: new Date('2024-07-16T14:00:00'),
    value: 14.0
  },
  {
    id: 'maintenance',
    label: 'Обслуживание',
    color: '#f59e0b',
    startTime: new Date('2024-07-16T14:00:00'),
    endTime: new Date('2024-07-16T16:00:00'),
    value: 2.0
  },
  {
    id: 'error',
    label: 'Ошибка',
    color: '#ef4444',
    startTime: new Date('2024-07-16T16:00:00'),
    endTime: new Date('2024-07-16T17:00:00'),
    value: 1.0
  }
]

const systemEvents: TimeChartEvent[] = [
  {
    id: 'alert-1',
    time: new Date('2024-07-16T16:30:00'),
    type: 'error',
    icon: '🚨',
    label: 'Системная ошибка',
    description: 'Критическая ошибка в модуле обработки данных'
  }
]

<TimeChart
  title="Мониторинг системы"
  startDate={new Date('2024-07-16T00:00:00')}
  endDate={new Date('2024-07-17T00:00:00')}
  data={systemData}
  events={systemEvents}
  showFilterControls={false}
  actions={
    <Button size="sm" variant="outline">
      Экспорт
    </Button>
  }
/>
```

## Стилизация

Компонент использует систему стилей Keypix UI с префиксом `keypix-`. Основные CSS классы:

- `.keypix-time-chart` - основной контейнер
- `.keypix-time-chart-header` - заголовок с элементами управления
- `.keypix-time-chart-body` - область с графиком
- `.keypix-time-chart-timeline` - временная шкала
- `.keypix-time-chart-data-row` - строка с данными
- `.keypix-time-chart-event` - событие на временной шкале

## Доступность

Компонент включает поддержку доступности:

- Семантическая разметка с использованием `role` атрибутов
- Поддержка навигации с клавиатуры
- ARIA атрибуты для скринридеров
- Контрастные цвета для лучшей читаемости
- Фокусные состояния для интерактивных элементов 