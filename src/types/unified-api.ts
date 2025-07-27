// Unified API interfaces for Keypix UI Library
// This file provides consistent interfaces across all components

import type { 
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
} from './unified'

// Remove Formable import since it's not used

// ============================================================================
// ATOMS - Basic building blocks
// ============================================================================

// Button API
export interface ButtonAPI extends BaseComponent, Sizeable, Variantable, Loadable, Iconable, Stylable, Accessible {
  /** Button variant */
  variant?: Variant
  /** Button size */
  size?: Size
  /** Loading state */
  loading?: boolean
  /** Loading text */
  loadingText?: string
  /** Left icon */
  leftIcon?: React.ReactNode
  /** Right icon */
  rightIcon?: React.ReactNode
  /** Icon position */
  iconPosition?: IconPosition
  /** Icon content */
  icon?: React.ReactNode
  /** Full width */
  fullWidth?: boolean
  /** Disable on loading */
  disableOnLoading?: boolean
  /** Button color */
  color?: Color
  /** Rounded corners */
  rounded?: boolean
  /** Elevated shadow */
  elevated?: boolean
  /** Border radius */
  borderRadius?: BorderRadius
  /** Shadow type */
  shadow?: Shadow
  /** Click handler */
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void
}

// Input API
export interface InputAPI extends BaseComponent, Sizeable, Variantable, Loadable, Iconable, Stylable, Accessible {
  /** Input label */
  label?: string
  /** Helper text */
  helperText?: string
  /** Error state */
  error?: boolean | string
  /** Required field */
  required?: boolean
  /** Left icon (alias) */
  prefix?: React.ReactNode
  /** Right icon (alias) */
  suffix?: React.ReactNode
  /** Left icon */
  leftIcon?: React.ReactNode
  /** Right icon */
  rightIcon?: React.ReactNode
  /** Icon position */
  iconPosition?: IconPosition
  /** Icon content */
  icon?: React.ReactNode
  /** Clearable input */
  clearable?: boolean
  /** Loading state */
  loading?: boolean
  /** On clear callback */
  onClear?: () => void
  /** Input size */
  size?: Size
  /** Input variant */
  variant?: Variant
  /** Input color */
  color?: Color
  /** Full width */
  fullWidth?: boolean
  /** Rounded corners */
  rounded?: boolean
  /** Elevated shadow */
  elevated?: boolean
  /** Border radius */
  borderRadius?: BorderRadius
  /** Border width */
  borderWidth?: 'none' | 'thin' | 'normal' | 'thick'
  /** Border color */
  borderColor?: Color
  /** Has border */
  bordered?: boolean
  /** Shadow type */
  shadow?: Shadow
  /** Field name */
  name?: string
  /** Field value */
  value?: string | number
  /** Change handler */
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void
  /** Placeholder text */
  placeholder?: string
  /** Input type */
  type?: string
}

// Badge API
export interface BadgeAPI extends BaseComponent, Sizeable, Variantable, Iconable, Stylable, Accessible {
  /** Badge variant */
  variant?: Variant
  /** Badge size */
  size?: Size
  /** Badge color */
  color?: Color
  /** Left icon */
  leftIcon?: React.ReactNode
  /** Right icon */
  rightIcon?: React.ReactNode
  /** Icon position */
  iconPosition?: IconPosition
  /** Icon content */
  icon?: React.ReactNode
  /** Removable badge */
  removable?: boolean
  /** On remove callback */
  onRemove?: () => void
  /** Rounded corners */
  rounded?: boolean
  /** Elevated shadow */
  elevated?: boolean
  /** Border radius */
  borderRadius?: BorderRadius
  /** Shadow type */
  shadow?: Shadow
  /** Badge content */
  children?: React.ReactNode
}

// Avatar API
export interface AvatarAPI extends BaseComponent, Sizeable, Statusable, Stylable, Accessible {
  /** Avatar size */
  size?: Size
  /** Image source */
  src?: string
  /** Alt text */
  alt?: string
  /** Fallback content */
  fallback?: React.ReactNode
  /** Status indicator */
  status?: Status
  /** Show status */
  showStatus?: boolean
  /** Rounded corners */
  rounded?: boolean
  /** Elevated shadow */
  elevated?: boolean
  /** Border radius */
  borderRadius?: BorderRadius
  /** Shadow type */
  shadow?: Shadow
  /** Click handler */
  onClick?: () => void
}

// AvatarGroup API
export interface AvatarGroupAPI extends BaseComponent, Sizeable, Stylable, Accessible {
  /** Group size */
  size?: Size
  /** Maximum avatars to show */
  max?: number
  /** Rounded corners */
  rounded?: boolean
  /** Elevated shadow */
  elevated?: boolean
  /** Border radius */
  borderRadius?: BorderRadius
  /** Shadow type */
  shadow?: Shadow
  /** Avatar children */
  children?: React.ReactNode
}

// Spinner API
export interface SpinnerAPI extends BaseComponent, Sizeable, Variantable, Loadable, Accessible {
  /** Spinner size */
  size?: Size
  /** Spinner variant */
  variant?: Variant
  /** Spinner color */
  color?: Color
  /** Loading text */
  loadingText?: string
  /** Text position */
  textPosition?: 'top' | 'bottom' | 'left' | 'right'
  /** Spinner type */
  type?: 'spinner' | 'dots' | 'pulse' | 'bars'
  /** Animation speed */
  speed?: 'slow' | 'normal' | 'fast'
}

// Card API
export interface CardAPI extends BaseComponent, Stylable, Accessible {
  /** Card variant */
  variant?: Variant
  /** Card color */
  color?: Color
  /** Rounded corners */
  rounded?: boolean
  /** Elevated shadow */
  elevated?: boolean
  /** Border radius */
  borderRadius?: BorderRadius
  /** Shadow type */
  shadow?: Shadow
  /** Has border */
  bordered?: boolean
  /** Clickable card */
  clickable?: boolean
  /** Click handler */
  onClick?: () => void
  /** Card content */
  children?: React.ReactNode
}

// CardHeader API
export interface CardHeaderAPI extends BaseComponent, Accessible {
  /** Header content */
  children?: React.ReactNode
}

// CardTitle API
export interface CardTitleAPI extends BaseComponent, Accessible {
  /** Title content */
  children?: React.ReactNode
}

// CardDescription API
export interface CardDescriptionAPI extends BaseComponent, Accessible {
  /** Description content */
  children?: React.ReactNode
}

// CardContent API
export interface CardContentAPI extends BaseComponent, Accessible {
  /** Content */
  children?: React.ReactNode
}

// ============================================================================
// MOLECULES - Composite components
// ============================================================================

// SearchBar API
export interface SearchBarAPI extends BaseComponent, Sizeable, Variantable, Iconable, Stylable, Accessible {
  /** Search placeholder */
  placeholder?: string
  /** Search value */
  value?: string
  /** On search callback */
  onSearch?: (value: string) => void
  /** On change callback */
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void
  /** Clearable search */
  clearable?: boolean
  /** Loading state */
  loading?: boolean
  /** Search size */
  size?: Size
  /** Search variant */
  variant?: Variant
  /** Search color */
  color?: Color
  /** Left icon */
  leftIcon?: React.ReactNode
  /** Right icon */
  rightIcon?: React.ReactNode
  /** Icon position */
  iconPosition?: IconPosition
  /** Icon content */
  icon?: React.ReactNode
  /** Full width */
  fullWidth?: boolean
  /** Rounded corners */
  rounded?: boolean
  /** Elevated shadow */
  elevated?: boolean
  /** Border radius */
  borderRadius?: BorderRadius
  /** Shadow type */
  shadow?: Shadow
  /** Field name */
  name?: string
  /** Error state */
  error?: boolean | string
  /** Helper text */
  helperText?: string
  /** Required field */
  required?: boolean
}

// Alert API
export interface AlertAPI extends BaseComponent, Variantable, Iconable, Stylable, Accessible {
  /** Alert variant */
  variant?: Variant
  /** Alert color */
  color?: Color
  /** Left icon */
  leftIcon?: React.ReactNode
  /** Right icon */
  rightIcon?: React.ReactNode
  /** Icon position */
  iconPosition?: IconPosition
  /** Icon content */
  icon?: React.ReactNode
  /** Dismissible alert */
  dismissible?: boolean
  /** On dismiss callback */
  onDismiss?: () => void
  /** Rounded corners */
  rounded?: boolean
  /** Elevated shadow */
  elevated?: boolean
  /** Border radius */
  borderRadius?: BorderRadius
  /** Shadow type */
  shadow?: Shadow
  /** Alert content */
  children?: React.ReactNode
}

// AlertTitle API
export interface AlertTitleAPI extends BaseComponent, Accessible {
  /** Title content */
  children?: React.ReactNode
}

// AlertDescription API
export interface AlertDescriptionAPI extends BaseComponent, Accessible {
  /** Description content */
  children?: React.ReactNode
}

// Modal API
export interface ModalAPI extends BaseComponent, Sizeable, Stylable, Accessible {
  /** Modal open state */
  isOpen: boolean
  /** On close callback */
  onClose: () => void
  /** Modal title */
  title?: string
  /** Modal description */
  description?: string
  /** Modal size */
  size?: Size
  /** Rounded corners */
  rounded?: boolean
  /** Elevated shadow */
  elevated?: boolean
  /** Border radius */
  borderRadius?: BorderRadius
  /** Shadow type */
  shadow?: Shadow
  /** Close on overlay click */
  closeOnOverlayClick?: boolean
  /** Close on escape key */
  closeOnEscape?: boolean
  /** Show close button */
  showCloseButton?: boolean
  /** Modal content */
  children?: React.ReactNode
}

// ============================================================================
// ORGANISMS - Complex components
// ============================================================================

// Header API
export interface HeaderAPI extends BaseComponent, Stylable, Accessible {
  /** Header title */
  title?: string
  /** Header subtitle */
  subtitle?: string
  /** Logo content */
  logo?: React.ReactNode
  /** Navigation items */
  navigation?: React.ReactNode
  /** Search component */
  search?: React.ReactNode
  /** User menu */
  userMenu?: React.ReactNode
  /** Action buttons */
  actions?: React.ReactNode
  /** Rounded corners */
  rounded?: boolean
  /** Elevated shadow */
  elevated?: boolean
  /** Border radius */
  borderRadius?: BorderRadius
  /** Shadow type */
  shadow?: Shadow
  /** Has border */
  bordered?: boolean
  /** On search callback */
  onSearch?: (value: string) => void
  /** On login callback */
  onLogin?: () => void
  /** On signup callback */
  onSignup?: () => void
}

// DataTable API
export interface DataTableAPI<T = Record<string, unknown>> extends BaseComponent, Sizeable, Stylable, Accessible {
  /** Table data */
  data: T[]
  /** Table columns */
  columns: UnifiedColumn<T>[]
  /** Searchable table */
  searchable?: boolean
  /** Sortable table */
  sortable?: boolean
  /** Pagination */
  pagination?: boolean
  /** Page size */
  pageSize?: number
  /** Current page */
  currentPage?: number
  /** Total pages */
  totalPages?: number
  /** Loading state */
  loading?: boolean
  /** Empty state */
  emptyState?: React.ReactNode
  /** Table size */
  size?: Size
  /** Rounded corners */
  rounded?: boolean
  /** Elevated shadow */
  elevated?: boolean
  /** Border radius */
  borderRadius?: BorderRadius
  /** Shadow type */
  shadow?: Shadow
  /** Has border */
  bordered?: boolean
  /** On row click */
  onRowClick?: (row: T) => void
  /** On page change */
  onPageChange?: (page: number) => void
  /** On sort change */
  onSortChange?: (column: keyof T, direction: 'asc' | 'desc') => void
  /** On search */
  onSearch?: (query: string) => void
}

// Column definition (renamed to avoid conflict)
export interface UnifiedColumn<T = any> {
  /** Column key */
  key: keyof T
  /** Column title */
  title: string
  /** Sortable column */
  sortable?: boolean
  /** Column width */
  width?: string | number
  /** Column render function */
  render?: (value: T[keyof T], row: T) => React.ReactNode
  /** Column alignment */
  align?: 'left' | 'center' | 'right'
  /** Hidden column */
  hidden?: boolean
}

// TimeChart API
export interface TimeChartAPI extends BaseComponent, Stylable, Accessible {
  /** Chart title */
  title?: string
  /** Start date */
  startDate: Date
  /** End date */
  endDate: Date
  /** Chart data */
  data: TimeChartData[]
  /** Chart events */
  events?: TimeChartEvent[]
  /** Current time */
  currentTime?: Date
  /** Zoom level */
  zoom?: number
  /** Show summary */
  showSummary?: boolean
  /** Show zoom controls */
  showZoomControls?: boolean
  /** Show filter controls */
  showFilterControls?: boolean
  /** Custom actions */
  actions?: React.ReactNode
  /** Rounded corners */
  rounded?: boolean
  /** Elevated shadow */
  elevated?: boolean
  /** Border radius */
  borderRadius?: BorderRadius
  /** Shadow type */
  shadow?: Shadow
  /** Has border */
  bordered?: boolean
  /** On zoom change */
  onZoomChange?: (zoom: number) => void
  /** On data point click */
  onDataPointClick?: (data: TimeChartData) => void
  /** On event click */
  onEventClick?: (event: TimeChartEvent) => void
}

// TimeChart data types
export interface TimeChartData {
  /** Data ID */
  id: string
  /** Data label */
  label: string
  /** Data color */
  color: string
  /** Start time */
  startTime: Date
  /** End time */
  endTime: Date
  /** Data value */
  value?: number
  /** Additional metadata */
  metadata?: Record<string, unknown>
}

export interface TimeChartEvent {
  /** Event ID */
  id: string
  /** Event time */
  time: Date
  /** Event type */
  type: 'warning' | 'error' | 'info' | 'success'
  /** Event icon */
  icon?: React.ReactNode
  /** Event label */
  label?: string
  /** Event description */
  description?: string
}

// ============================================================================
// PROVIDERS - Context providers
// ============================================================================

// ThemeProvider API
export interface ThemeProviderAPI extends BaseComponent, Accessible {
  /** Theme value */
  theme?: 'light' | 'dark' | 'system'
  /** Default theme */
  defaultTheme?: 'light' | 'dark' | 'system'
  /** Theme storage key */
  storageKey?: string
  /** Provider content */
  children?: React.ReactNode
}

// ============================================================================
// UTILITY TYPES
// ============================================================================

// Extract component props utility (renamed to avoid conflict)
export type ExtractUnifiedComponentProps<T> = T extends React.ComponentType<infer P> ? P : never

// Component API mapping
export interface ComponentAPIs {
  Button: ButtonAPI
  Input: InputAPI
  Badge: BadgeAPI
  Avatar: AvatarAPI
  AvatarGroup: AvatarGroupAPI
  Spinner: SpinnerAPI
  Card: CardAPI
  CardHeader: CardHeaderAPI
  CardTitle: CardTitleAPI
  CardDescription: CardDescriptionAPI
  CardContent: CardContentAPI
  SearchBar: SearchBarAPI
  Alert: AlertAPI
  AlertTitle: AlertTitleAPI
  AlertDescription: AlertDescriptionAPI
  Modal: ModalAPI
  Header: HeaderAPI
  DataTable: DataTableAPI
  TimeChart: TimeChartAPI
  ThemeProvider: ThemeProviderAPI
}

// Unified component props type
export type UnifiedComponentProps<T extends keyof ComponentAPIs> = ComponentAPIs[T]

// Re-export TimeChartData and TimeChartEvent to avoid conflicts
export type { TimeChartData, TimeChartEvent } from '../components/organisms/TimeChart' 