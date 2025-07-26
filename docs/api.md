# API Reference

Complete API documentation for all KeyPix UI components.

## Table of Contents

- [Button](#button)
- [Input](#input)
- [Badge](#badge)
- [Avatar](#avatar)
- [Card](#card)
- [Spinner](#spinner)
- [SearchBar](#searchbar)
- [Alert](#alert)
- [Modal](#modal)
- [Header](#header)
- [DataTable](#datatable)
- [ThemeProvider](#themeprovider)

---

## Button

A versatile button component with multiple variants, sizes, and states.

### Props

```tsx
interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  /** Button variant */
  variant?: 'default' | 'secondary' | 'destructive' | 'outline' | 'ghost' | 'link' | 'success' | 'warning' | 'info'
  /** Button size */
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'icon'
  /** Loading state - shows spinner and disables button */
  loading?: boolean
  /** Text to show when loading */
  loadingText?: string
  /** Icon to show on the left side */
  leftIcon?: React.ReactNode
  /** Icon to show on the right side */
  rightIcon?: React.ReactNode
  /** Full width button */
  fullWidth?: boolean
  /** Disable button when loading */
  disableOnLoading?: boolean
  /** Accessible label for screen readers */
  ariaLabel?: string
  /** Description for screen readers */
  ariaDescription?: string
  /** Live region for dynamic content */
  ariaLive?: 'off' | 'polite' | 'assertive'
}
```

### Default Values

- `variant`: `'default'`
- `size`: `'md'`
- `loading`: `false`
- `fullWidth`: `false`
- `disableOnLoading`: `true`

---

## Input

A form input component with validation states and accessibility features.

### Props

```tsx
interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  /** Label for the input */
  label?: string
  /** Helper text below the input */
  helperText?: string
  /** Error state */
  error?: boolean
  /** Required field indicator */
  required?: boolean
  /** Left icon */
  leftIcon?: React.ReactNode
  /** Right icon */
  rightIcon?: React.ReactNode
}
```

### Default Values

- `error`: `false`
- `required`: `false`

---

## Badge

A status indicator component for labels and notifications.

### Props

```tsx
interface BadgeProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Badge variant */
  variant?: 'default' | 'secondary' | 'destructive' | 'outline' | 'success' | 'warning' | 'info'
  /** Badge size */
  size?: 'sm' | 'md' | 'lg'
  /** Icon to show on the left */
  leftIcon?: React.ReactNode
  /** Icon to show on the right */
  rightIcon?: React.ReactNode
  /** Whether the badge is removable */
  removable?: boolean
  /** Callback when badge is removed */
  onRemove?: () => void
}
```

### Default Values

- `variant`: `'default'`
- `size`: `'md'`
- `removable`: `false`

---

## Avatar

A user profile image component with fallback support.

### Props

```tsx
interface AvatarProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Image source URL */
  src?: string
  /** Alt text for the image */
  alt?: string
  /** Fallback text when image fails to load */
  fallback?: string
  /** Avatar size */
  size?: 'sm' | 'md' | 'lg' | 'xl'
  /** Whether to show status indicator */
  showStatus?: boolean
  /** Status type */
  status?: 'online' | 'offline' | 'away' | 'busy'
}
```

### Default Values

- `size`: `'md'`
- `showStatus`: `false`
- `status`: `'online'`

---

## Card

A content container component with header, content, and footer sections.

### Props

```tsx
interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Card variant */
  variant?: 'default' | 'outlined' | 'elevated'
  /** Whether card is interactive */
  interactive?: boolean
  /** Whether card is selected */
  selected?: boolean
}
```

### CardHeader Props

```tsx
interface CardHeaderProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Header content */
  children: React.ReactNode
}
```

### CardTitle Props

```tsx
interface CardTitleProps extends React.HTMLAttributes<HTMLHeadingElement> {
  /** Title content */
  children: React.ReactNode
}
```

### CardContent Props

```tsx
interface CardContentProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Content */
  children: React.ReactNode
}
```

### CardFooter Props

```tsx
interface CardFooterProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Footer content */
  children: React.ReactNode
}
```

### Default Values

- `variant`: `'default'`
- `interactive`: `false`
- `selected`: `false`

---

## Spinner

A loading indicator component with multiple sizes and types.

### Props

```tsx
interface SpinnerProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Spinner size */
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl'
  /** Spinner color */
  color?: 'default' | 'primary' | 'secondary' | 'white'
  /** Spinner type */
  type?: 'spinner' | 'dots' | 'bars'
  /** Whether to show loading text */
  showText?: boolean
  /** Loading text */
  text?: string
}
```

### Default Values

- `size`: `'md'`
- `color`: `'default'`
- `type`: `'spinner'`
- `showText`: `false`
- `text`: `'Loading...'`

---

## SearchBar

A search input component with integrated search functionality.

### Props

```tsx
interface SearchBarProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Placeholder text */
  placeholder?: string
  /** Search callback */
  onSearch: (value: string) => void
  /** Whether search bar is disabled */
  disabled?: boolean
  /** Initial search value */
  defaultValue?: string
  /** Debounce delay in milliseconds */
  debounceMs?: number
  /** Whether to show clear button */
  showClear?: boolean
  /** Custom search icon */
  searchIcon?: React.ReactNode
  /** Custom clear icon */
  clearIcon?: React.ReactNode
}
```

### Default Values

- `placeholder`: `'Search...'`
- `disabled`: `false`
- `debounceMs`: `300`
- `showClear`: `true`

---

## Alert

A notification component for displaying messages and status updates.

### Props

```tsx
interface AlertProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Alert variant */
  variant?: 'default' | 'success' | 'warning' | 'error' | 'info'
  /** Alert title */
  title?: string
  /** Alert description */
  description?: string
  /** Whether alert is dismissible */
  dismissible?: boolean
  /** Callback when alert is dismissed */
  onDismiss?: () => void
  /** Custom icon */
  icon?: React.ReactNode
  /** Action buttons */
  actions?: React.ReactNode
}
```

### Default Values

- `variant`: `'default'`
- `dismissible`: `false`

---

## Modal

An overlay dialog component for modals and popups.

### Props

```tsx
interface ModalProps {
  /** Whether modal is open */
  open: boolean
  /** Callback when modal should close */
  onClose: () => void
  /** Modal title */
  title?: string
  /** Modal content */
  children: React.ReactNode
  /** Modal size */
  size?: 'sm' | 'md' | 'lg' | 'xl' | 'full'
  /** Whether to show close button */
  showClose?: boolean
  /** Whether to close on backdrop click */
  closeOnBackdrop?: boolean
  /** Whether to close on escape key */
  closeOnEscape?: boolean
  /** Custom footer */
  footer?: React.ReactNode
  /** Whether modal is centered */
  centered?: boolean
}
```

### Default Values

- `size`: `'md'`
- `showClose`: `true`
- `closeOnBackdrop`: `true`
- `closeOnEscape`: `true`
- `centered`: `true`

---

## Header

A navigation header component with search and actions.

### Props

```tsx
interface HeaderProps extends React.HTMLAttributes<HTMLElement> {
  /** Header title */
  title?: string
  /** Header subtitle */
  subtitle?: string
  /** Logo or brand */
  logo?: React.ReactNode
  /** Navigation items */
  navigation?: React.ReactNode
  /** Search component */
  search?: React.ReactNode
  /** Action buttons */
  actions?: React.ReactNode
  /** User menu */
  userMenu?: React.ReactNode
  /** Whether header is sticky */
  sticky?: boolean
  /** Header variant */
  variant?: 'default' | 'minimal' | 'elevated'
}
```

### Default Values

- `sticky`: `false`
- `variant`: `'default'`

---

## DataTable

A data table component with sorting, filtering, and pagination.

### Props

```tsx
interface DataTableProps<T = any> {
  /** Table data */
  data: T[]
  /** Table columns configuration */
  columns: Column<T>[]
  /** Whether table is loading */
  loading?: boolean
  /** Pagination configuration */
  pagination?: PaginationConfig
  /** Sorting configuration */
  sorting?: SortingConfig
  /** Filtering configuration */
  filtering?: FilteringConfig
  /** Row selection configuration */
  selection?: SelectionConfig
  /** Custom row renderer */
  rowRenderer?: (item: T, index: number) => React.ReactNode
  /** Empty state component */
  emptyState?: React.ReactNode
  /** Table density */
  density?: 'compact' | 'comfortable' | 'spacious'
  /** Whether to show borders */
  bordered?: boolean
  /** Whether to show stripes */
  striped?: boolean
}
```

### Column Configuration

```tsx
interface Column<T> {
  /** Column key */
  key: string
  /** Column header */
  header: string
  /** Column accessor function */
  accessor: (item: T) => any
  /** Column renderer */
  render?: (value: any, item: T) => React.ReactNode
  /** Whether column is sortable */
  sortable?: boolean
  /** Whether column is filterable */
  filterable?: boolean
  /** Column width */
  width?: string | number
  /** Column alignment */
  align?: 'left' | 'center' | 'right'
}
```

### Default Values

- `loading`: `false`
- `density`: `'comfortable'`
- `bordered`: `false`
- `striped`: `false`

---

## ThemeProvider

A theme provider component for managing application themes.

### Props

```tsx
interface ThemeProviderProps {
  /** Provider children */
  children: React.ReactNode
  /** Default theme */
  defaultTheme?: 'light' | 'dark' | 'system'
  /** Local storage key for theme persistence */
  storageKey?: string
  /** Custom theme configuration */
  themes?: {
    light?: ThemeConfig
    dark?: ThemeConfig
  }
  /** Whether to enable system theme detection */
  enableSystem?: boolean
  /** Callback when theme changes */
  onThemeChange?: (theme: string) => void
}
```

### Theme Configuration

```tsx
interface ThemeConfig {
  /** CSS variables for the theme */
  variables?: Record<string, string>
  /** Custom CSS for the theme */
  styles?: string
}
```

### Default Values

- `defaultTheme`: `'system'`
- `storageKey`: `'keypix-ui-theme'`
- `enableSystem`: `true`

### useTheme Hook

```tsx
interface UseThemeReturn {
  /** Current theme */
  theme: 'light' | 'dark' | 'system'
  /** Function to set theme */
  setTheme: (theme: 'light' | 'dark' | 'system') => void
  /** Whether theme is system */
  isSystem: boolean
  /** Resolved theme (light or dark) */
  resolvedTheme: 'light' | 'dark'
}
```

---

## CSS Variables

KeyPix UI uses CSS variables for theming. Here are the available variables:

### Light Theme

```css
:root {
  --background: 0 0% 100%;
  --foreground: 222.2 84% 4.9%;
  --card: 0 0% 100%;
  --card-foreground: 222.2 84% 4.9%;
  --popover: 0 0% 100%;
  --popover-foreground: 222.2 84% 4.9%;
  --primary: 221.2 83.2% 53.3%;
  --primary-foreground: 210 40% 98%;
  --secondary: 210 40% 96%;
  --secondary-foreground: 222.2 84% 4.9%;
  --muted: 210 40% 96%;
  --muted-foreground: 215.4 16.3% 46.9%;
  --accent: 210 40% 96%;
  --accent-foreground: 222.2 84% 4.9%;
  --destructive: 0 84.2% 60.2%;
  --destructive-foreground: 210 40% 98%;
  --border: 214.3 31.8% 91.4%;
  --input: 214.3 31.8% 91.4%;
  --ring: 221.2 83.2% 53.3%;
  --radius: 0.5rem;
}
```

### Dark Theme

```css
.dark {
  --background: 222.2 84% 4.9%;
  --foreground: 210 40% 98%;
  --card: 222.2 84% 4.9%;
  --card-foreground: 210 40% 98%;
  --popover: 222.2 84% 4.9%;
  --popover-foreground: 210 40% 98%;
  --primary: 217.2 91.2% 59.8%;
  --primary-foreground: 222.2 84% 4.9%;
  --secondary: 217.2 32.6% 17.5%;
  --secondary-foreground: 210 40% 98%;
  --muted: 217.2 32.6% 17.5%;
  --muted-foreground: 215 20.2% 65.1%;
  --accent: 217.2 32.6% 17.5%;
  --accent-foreground: 210 40% 98%;
  --destructive: 0 62.8% 30.6%;
  --destructive-foreground: 210 40% 98%;
  --border: 217.2 32.6% 17.5%;
  --input: 217.2 32.6% 17.5%;
  --ring: 224.3 76.3% 94.1%;
}
```

---

## Utility Classes

KeyPix UI provides utility classes for common styling needs:

### Layout

- `.keypix-flex` - `display: flex`
- `.keypix-inline-flex` - `display: inline-flex`
- `.keypix-grid` - `display: grid`
- `.keypix-block` - `display: block`
- `.keypix-inline-block` - `display: inline-block`
- `.keypix-hidden` - `display: none`

### Spacing

- `.keypix-p-{size}` - Padding
- `.keypix-m-{size}` - Margin
- `.keypix-gap-{size}` - Gap
- `.keypix-space-x-{size}` - Horizontal spacing
- `.keypix-space-y-{size}` - Vertical spacing

### Sizing

- `.keypix-w-{size}` - Width
- `.keypix-h-{size}` - Height
- `.keypix-max-w-{size}` - Max width
- `.keypix-min-h-{size}` - Min height

### Typography

- `.keypix-text-{size}` - Font size
- `.keypix-font-{weight}` - Font weight
- `.keypix-text-{color}` - Text color
- `.keypix-text-center` - Text alignment

### Colors

- `.keypix-bg-{color}` - Background color
- `.keypix-text-{color}` - Text color
- `.keypix-border-{color}` - Border color

### Borders

- `.keypix-border` - Border
- `.keypix-border-{width}` - Border width
- `.keypix-rounded` - Border radius
- `.keypix-rounded-{size}` - Border radius size

### Effects

- `.keypix-shadow-{size}` - Box shadow
- `.keypix-opacity-{value}` - Opacity
- `.keypix-blur-{size}` - Backdrop blur

### Transitions

- `.keypix-transition` - Transition
- `.keypix-transition-{property}` - Transition property
- `.keypix-duration-{time}` - Transition duration
- `.keypix-ease-{type}` - Transition timing function

### Accessibility

- `.keypix-sr-only` - Screen reader only
- `.keypix-focus-visible` - Focus visible
- `.keypix-reduced-motion` - Reduced motion

---

## TypeScript Support

All components are fully typed with TypeScript. The library exports type definitions for all component props and utilities.

### Importing Types

```tsx
import type { ButtonProps, InputProps, ThemeConfig } from 'keypix-ui'
```

### Generic Components

Some components like `DataTable` support generics for type safety:

```tsx
interface User {
  id: string
  name: string
  email: string
}

<DataTable<User> data={users} columns={columns} />
```

---

## Browser Support

KeyPix UI supports all modern browsers:

- Chrome 90+
- Firefox 88+
- Safari 14+
- Edge 90+

### Polyfills

For older browsers, you may need to include polyfills for:

- CSS Custom Properties
- CSS Grid
- Intersection Observer API
- Resize Observer API

---

## Performance

KeyPix UI is optimized for performance:

- **Tree Shaking**: Unused components are automatically removed
- **Code Splitting**: Components can be loaded on demand
- **Minification**: Production builds are minified
- **Caching**: CSS is cached efficiently
- **Lazy Loading**: Styles are injected only when needed

### Bundle Size

- **Total**: 13.47 KB gzipped
- **Core**: 8.2 KB gzipped
- **Styles**: 5.27 KB gzipped

### Loading Performance

- **First Paint**: 264ms on slow 3G
- **Interactive**: 94ms on Snapdragon 410
- **Total Time**: 357ms on slow 3G 