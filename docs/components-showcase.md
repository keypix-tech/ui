# Keypix UI Components Showcase

This page showcases all available components in Keypix UI with examples and usage patterns.

## 🚀 Getting Started

To see all components in action, run the development server:

```bash
npm run dev
```

Then visit [http://localhost:5173](http://localhost:5173) to see the interactive demo.

## 🧩 Component Categories

### Atoms (Basic Building Blocks)

#### Button
The most versatile component with multiple variants, sizes, and states.

```tsx
import { Button } from 'keypix-ui'

// Variants
<Button variant="default">Default</Button>
<Button variant="secondary">Secondary</Button>
<Button variant="destructive">Delete</Button>
<Button variant="outline">Outline</Button>
<Button variant="ghost">Ghost</Button>
<Button variant="link">Link</Button>
<Button variant="success">Success</Button>
<Button variant="warning">Warning</Button>
<Button variant="info">Info</Button>

// Sizes
<Button size="xs">Extra Small</Button>
<Button size="sm">Small</Button>
<Button size="md">Medium</Button>
<Button size="lg">Large</Button>
<Button size="xl">Extra Large</Button>
<Button size="icon">⚙️</Button>

// States
<Button loading>Loading...</Button>
<Button disabled>Disabled</Button>
<Button fullWidth>Full Width</Button>

// With Icons
<Button leftIcon={<span>📧</span>}>Email</Button>
<Button rightIcon={<span>→</span>}>Next</Button>
```

#### Input
Enhanced form inputs with validation, icons, and clear functionality.

```tsx
import { Input } from 'keypix-ui'

// Basic usage
<Input placeholder="Enter your name" />

// With label and validation
<Input 
  label="Email Address"
  type="email"
  placeholder="Enter your email"
  required
  error={!!emailError}
  helperText={emailError}
/>

// With icons
<Input 
  label="Search"
  placeholder="Search..."
  prefix={<span>🔍</span>}
  clearable
  onClear={() => setSearchValue('')}
/>

// Loading state
<Input 
  label="Loading Input"
  placeholder="Loading..."
  loading={true}
/>
```

#### Badge
Status indicators with icons and removable functionality.

```tsx
import { Badge } from 'keypix-ui'

// Variants
<Badge>Default</Badge>
<Badge variant="secondary">Secondary</Badge>
<Badge variant="destructive">Destructive</Badge>
<Badge variant="outline">Outline</Badge>
<Badge variant="success">Success</Badge>
<Badge variant="warning">Warning</Badge>
<Badge variant="info">Info</Badge>

// Sizes
<Badge size="sm">Small</Badge>
<Badge size="md">Medium</Badge>
<Badge size="lg">Large</Badge>

// With icons and removable
<Badge leftIcon={<span>✅</span>}>With Icon</Badge>
<Badge removable onRemove={() => console.log('Removed')}>
  Removable
</Badge>
```

#### Avatar
User profile images with status indicators and group display.

```tsx
import { Avatar, AvatarGroup } from 'keypix-ui'

// Basic avatar
<Avatar src="https://github.com/shadcn.png" alt="User" />

// With fallback and status
<Avatar fallback="JD" status="online" />
<Avatar fallback="AB" status="away" />
<Avatar fallback="CD" status="busy" />
<Avatar fallback="EF" status="offline" />

// Different sizes
<Avatar size="sm" fallback="SM" />
<Avatar size="md" fallback="MD" />
<Avatar size="lg" fallback="LG" />
<Avatar size="xl" fallback="XL" />

// Avatar groups
<AvatarGroup max={3} size="md">
  <Avatar src="https://github.com/shadcn.png" alt="User 1" />
  <Avatar fallback="JD" />
  <Avatar fallback="AB" />
  <Avatar fallback="CD" />
  <Avatar fallback="EF" />
</AvatarGroup>
```

#### Spinner
Loading indicators with multiple types and overlay support.

```tsx
import { Spinner } from 'keypix-ui'

// Sizes
<Spinner size="xs" />
<Spinner size="sm" />
<Spinner size="md" />
<Spinner size="lg" />
<Spinner size="xl" />

// Variants
<Spinner variant="primary" />
<Spinner variant="success" />
<Spinner variant="warning" />
<Spinner variant="error" />

// Types
<Spinner type="dots" />
<Spinner type="pulse" />
<Spinner type="bars" />
<Spinner type="spinner" />

// With text
<Spinner text="Loading..." />
<Spinner text="Processing..." textPosition="top" />
```

#### Card
Container component for organizing content.

```tsx
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from 'keypix-ui'

<Card>
  <CardHeader>
    <CardTitle>Card Title</CardTitle>
    <CardDescription>Card description goes here</CardDescription>
  </CardHeader>
  <CardContent>
    <p>Card content goes here</p>
  </CardContent>
</Card>
```

### Molecules (Combined Components)

#### SearchBar
Search input with integrated button and actions.

```tsx
import { SearchBar } from 'keypix-ui'

<SearchBar 
  placeholder="Search components..."
  onSearch={(value) => console.log('Search:', value)}
/>
```

#### Alert
Notification and status messages.

```tsx
import { Alert, AlertTitle, AlertDescription } from 'keypix-ui'

// Variants
<Alert>
  <AlertTitle>Default Alert</AlertTitle>
  <AlertDescription>This is a default alert message.</AlertDescription>
</Alert>

<Alert variant="destructive">
  <AlertTitle>Error</AlertTitle>
  <AlertDescription>This is an error alert message.</AlertDescription>
</Alert>

<Alert variant="success">
  <AlertTitle>Success</AlertTitle>
  <AlertDescription>This is a success alert message.</AlertDescription>
</Alert>

<Alert variant="warning">
  <AlertTitle>Warning</AlertTitle>
  <AlertDescription>This is a warning alert message.</AlertDescription>
</Alert>

<Alert variant="info">
  <AlertTitle>Info</AlertTitle>
  <AlertDescription>This is an info alert message.</AlertDescription>
</Alert>
```

#### Modal
Overlay dialogs and popups.

```tsx
import { Modal } from 'keypix-ui'

const [isOpen, setIsOpen] = useState(false)

<Button onClick={() => setIsOpen(true)}>
  Open Modal
</Button>

<Modal
  isOpen={isOpen}
  onClose={() => setIsOpen(false)}
  title="Example Modal"
  description="This is an example modal dialog"
>
  <div className="space-y-4">
    <p>This is the modal content. You can put any components here.</p>
    <div className="flex justify-end space-x-2">
      <Button variant="outline" onClick={() => setIsOpen(false)}>
        Cancel
      </Button>
      <Button onClick={() => setIsOpen(false)}>
        Confirm
      </Button>
    </div>
  </div>
</Modal>
```

### Organisms (Complex Components)

#### Header
Page navigation with search and user actions.

```tsx
import { Header } from 'keypix-ui'

<Header 
  title="Keypix UI - Premium Design System"
  onSearch={(value) => console.log('Search:', value)}
  onLogin={() => console.log('Login clicked')}
  onSignup={() => console.log('Signup clicked')}
/>
```

#### DataTable
Advanced table with sorting, filtering, and pagination.

```tsx
import { DataTable } from 'keypix-ui'
import type { Column } from 'keypix-ui'

const data = [
  { id: 1, name: 'John Doe', email: 'john@example.com', status: 'active', role: 'Admin' },
  { id: 2, name: 'Jane Smith', email: 'jane@example.com', status: 'inactive', role: 'User' },
  { id: 3, name: 'Bob Johnson', email: 'bob@example.com', status: 'active', role: 'Editor' },
]

const columns: Column<typeof data[0]>[] = [
  { key: 'id', title: 'ID', sortable: true },
  { key: 'name', title: 'Name', sortable: true },
  { key: 'email', title: 'Email', sortable: true },
  { 
    key: 'status', 
    title: 'Status', 
    sortable: true,
    render: (value: string | number) => (
      <Badge variant={String(value) === 'active' ? 'success' : 'secondary'}>
        {String(value)}
      </Badge>
    )
  },
  { key: 'role', title: 'Role', sortable: true },
]

<DataTable
  data={data}
  columns={columns}
  searchable
  sortable
  pagination
  pageSize={5}
  onRowClick={(row) => console.log('Row clicked:', row)}
/>
```

### Providers

#### ThemeProvider
Theme management with light/dark/system modes.

```tsx
import { ThemeProvider, useTheme } from 'keypix-ui'

function ThemeToggle() {
  const { theme, setTheme } = useTheme()

  return (
    <div className="flex gap-2">
      <Button 
        variant={theme === 'light' ? 'default' : 'outline'}
        onClick={() => setTheme('light')}
      >
        Light
      </Button>
      <Button 
        variant={theme === 'dark' ? 'default' : 'outline'}
        onClick={() => setTheme('dark')}
      >
        Dark
      </Button>
      <Button 
        variant={theme === 'system' ? 'default' : 'outline'}
        onClick={() => setTheme('system')}
      >
        System
      </Button>
    </div>
  )
}

function App() {
  return (
    <ThemeProvider defaultTheme="system">
      <ThemeToggle />
      {/* Your app content */}
    </ThemeProvider>
  )
}
```

## 🎨 Theme Customization

### CSS Variables

Keypix UI uses CSS variables for easy customization:

```css
:root {
  --primary: 221.2 83.2% 53.3%;
  --primary-foreground: 210 40% 98%;
  --secondary: 210 40% 96%;
  --secondary-foreground: 222.2 84% 4.9%;
  --background: 0 0% 100%;
  --foreground: 222.2 84% 4.9%;
  --border: 214.3 31.8% 91.4%;
  --radius: 0.5rem;
}

.dark {
  --background: 222.2 84% 4.9%;
  --foreground: 210 40% 98%;
  /* ... other dark theme variables */
}
```

### Custom Styling

```tsx
// Using className prop
<Button className="bg-red-500 hover:bg-red-600">
  Custom Button
</Button>

// Using CSS variables
<Button style={{ '--primary': '220 13% 91%' }}>
  Custom Primary
</Button>
```

## ♿ Accessibility

All components are built with accessibility in mind:

- **WCAG 2.1 AA compliant**
- **Keyboard navigation** support
- **Screen reader** friendly
- **High contrast** mode support
- **Reduced motion** preferences
- **ARIA attributes** on all components

```tsx
// Accessible button with proper labels
<Button 
  aria-label="Download file"
  aria-describedby="download-description"
>
  Download
</Button>
<div id="download-description" className="sr-only">
  Downloads the current file in PDF format
</div>
```

## 📱 Responsive Design

All components are mobile-first and responsive:

```tsx
// Responsive grid
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
  <Card>Card 1</Card>
  <Card>Card 2</Card>
  <Card>Card 3</Card>
</div>

// Responsive spacing
<div className="p-4 md:p-6 lg:p-8">
  Content with responsive padding
</div>
```

## 🧪 Testing

```tsx
import { render, screen } from '@testing-library/react'
import { Button } from 'keypix-ui'

test('renders button with text', () => {
  render(<Button>Click me</Button>)
  expect(screen.getByRole('button', { name: /click me/i })).toBeInTheDocument()
})

test('handles click events', () => {
  const handleClick = jest.fn()
  render(<Button onClick={handleClick}>Click me</Button>)
  
  fireEvent.click(screen.getByRole('button'))
  expect(handleClick).toHaveBeenCalledTimes(1)
})
```

---

For more detailed API documentation, see the [API Reference](./api.md). 