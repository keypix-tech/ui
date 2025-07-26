# KeyPix UI

A premium React component library built with TypeScript, Tailwind CSS, and Atomic Design principles. Designed to be the most comprehensive and beautiful UI library available.

## ✨ Features

- 🎨 **Atomic Design Pattern** - Organized components from atoms to organisms
- 🌙 **Dark Mode Support** - Built-in theme switching with system preference detection
- 📦 **TypeScript First** - Full type safety and IntelliSense support
- 🎯 **Tailwind CSS v4** - Latest utility-first styling with custom design system
- ⚡ **Zero Runtime** - No additional JavaScript bundle size
- 🔧 **Highly Customizable** - Easy to extend and customize
- 📱 **Responsive** - Mobile-first design approach
- 🎭 **Modern Animations** - Smooth transitions and micro-interactions
- 🎪 **Advanced Components** - Data tables, modals, alerts, and more
- 🎨 **Design System** - Consistent spacing, colors, and typography

## Installation

```bash
npm install keypix-ui
```

## Setup

### 1. Install peer dependencies

This library requires the following peer dependencies:

```json
{
  "react": ">=18.0.0",
  "react-dom": ">=18.0.0",
  "tailwindcss": ">=4.0.0"
}
```

### 2. Import CSS styles

In your main file (e.g., `main.tsx` or `App.tsx`):

```tsx
import 'keypix-ui/dist/theme.css'
```

### 3. Configure Tailwind CSS

Update your `tailwind.config.js`:

```js
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/keypix-ui/**/*.{js,ts,jsx,tsx}"
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
      },
    },
  },
  plugins: [],
}
```

## Quick Start

```tsx
import 'keypix-ui/dist/theme.css'
import { ThemeProvider } from 'keypix-ui'
import { Button, Input, SearchBar } from 'keypix-ui'

function App() {
  return (
    <ThemeProvider>
      <div>
        <Button>Click me</Button>
        <Input placeholder="Enter text..." />
        <SearchBar 
          placeholder="Search..."
          onSearch={(value) => console.log(value)}
        />
      </div>
    </ThemeProvider>
  )
}
```

## 🎨 Components

### Atoms

#### Button

```tsx
import { Button } from 'keypix-ui'

// Variants
<Button>Default</Button>
<Button variant="destructive">Delete</Button>
<Button variant="outline">Outline</Button>
<Button variant="ghost">Ghost</Button>
<Button variant="link">Link</Button>
<Button variant="secondary">Secondary</Button>

// Sizes
<Button size="sm">Small</Button>
<Button size="md">Medium</Button>
<Button size="lg">Large</Button>
```

#### Input

```tsx
import { Input } from 'keypix-ui'

<Input placeholder="Enter your name..." />
<Input type="email" placeholder="Email address" />
<Input 
  placeholder="With error" 
  error={true}
  helperText="This field is required"
/>
```

#### Badge

```tsx
import { Badge } from 'keypix-ui'

<Badge>Default</Badge>
<Badge variant="success">Success</Badge>
<Badge variant="warning">Warning</Badge>
<Badge variant="destructive">Error</Badge>
<Badge variant="outline">Outline</Badge>
```

#### Avatar

```tsx
import { Avatar } from 'keypix-ui'

<Avatar src="https://example.com/avatar.jpg" alt="User" />
<Avatar fallback="JD" />
<Avatar size="lg" fallback="AB" />
```

#### Spinner

```tsx
import { Spinner } from 'keypix-ui'

<Spinner size="md" />
<Spinner variant="primary" />
<Spinner variant="success" />
```

#### Card

```tsx
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from 'keypix-ui'

<Card>
  <CardHeader>
    <CardTitle>Card Title</CardTitle>
    <CardDescription>Card description</CardDescription>
  </CardHeader>
  <CardContent>
    <p>Card content goes here</p>
  </CardContent>
</Card>
```

### Molecules

#### SearchBar

```tsx
import { SearchBar } from 'keypix-ui'

<SearchBar 
  placeholder="Search components..."
  onSearch={(value) => console.log('Search:', value)}
  disabled={false}
/>
```

#### Alert

```tsx
import { Alert, AlertTitle, AlertDescription } from 'keypix-ui'

<Alert>
  <AlertTitle>Default Alert</AlertTitle>
  <AlertDescription>This is a default alert message.</AlertDescription>
</Alert>

<Alert variant="destructive">
  <AlertTitle>Error</AlertTitle>
  <AlertDescription>This is an error message.</AlertDescription>
</Alert>
```

#### Modal

```tsx
import { Modal } from 'keypix-ui'

<Modal
  isOpen={isOpen}
  onClose={() => setIsOpen(false)}
  title="Example Modal"
  description="Modal description"
>
  <p>Modal content goes here</p>
</Modal>
```

### Organisms

#### Header

```tsx
import { Header } from 'keypix-ui'

<Header 
  title="My App"
  onSearch={(value) => console.log('Search:', value)}
  onLogin={() => console.log('Login clicked')}
  onSignup={() => console.log('Signup clicked')}
  showSearch={true}
/>
```

#### DataTable

```tsx
import { DataTable } from 'keypix-ui'

const data = [
  { id: 1, name: 'John Doe', email: 'john@example.com', status: 'active' },
  { id: 2, name: 'Jane Smith', email: 'jane@example.com', status: 'inactive' },
]

const columns = [
  { key: 'id', title: 'ID', sortable: true },
  { key: 'name', title: 'Name', sortable: true },
  { key: 'email', title: 'Email', sortable: true },
  { key: 'status', title: 'Status', sortable: true },
]

<DataTable
  data={data}
  columns={columns}
  searchable
  sortable
  pagination
  onRowClick={(row) => console.log('Row clicked:', row)}
/>
```

## 🌙 Theme System

KeyPix UI includes a comprehensive theme system with dark mode support:

```tsx
import { ThemeProvider, useTheme } from 'keypix-ui'

function App() {
  const { theme, setTheme } = useTheme()
  
  return (
    <div>
      <select value={theme} onChange={(e) => setTheme(e.target.value)}>
        <option value="light">Light</option>
        <option value="dark">Dark</option>
        <option value="system">System</option>
      </select>
    </div>
  )
}
```

## 🎨 Design System

The library includes a complete design system with:

- **Colors**: Primary, secondary, success, warning, error variants
- **Typography**: Consistent font sizes, weights, and line heights
- **Spacing**: Standardized spacing scale
- **Shadows**: Multiple shadow levels for depth
- **Animations**: Pre-built animation utilities

## 🚀 Development

### Setup

```bash
git clone <repository>
cd keypix-ui
npm install
```

### Scripts

- `npm run dev` - Start development server
- `npm run build` - Build the library
- `npm run lint` - Run ESLint
- `npm run type-check` - Run TypeScript type checking
- `npm run preview` - Preview the build

### Project Structure

```
src/
├── components/
│   ├── atoms/          # Basic building blocks
│   ├── molecules/      # Simple combinations of atoms
│   ├── organisms/      # Complex UI components
│   └── providers/      # Context providers
├── lib/
│   ├── utils.ts        # Utility functions
│   ├── design-system.ts # Design tokens
│   ├── animations.ts   # Animation utilities
│   └── theme.ts        # Theme management
├── styles/
│   └── theme.css       # CSS variables
└── index.ts           # Main export file
```

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Add tests if applicable
5. Submit a pull request

## 🏆 Why KeyPix UI?

- **🎯 Production Ready**: Built with enterprise-grade TypeScript and modern React patterns
- **🎨 Beautiful by Default**: Carefully crafted design that looks great out of the box
- **⚡ Performance Optimized**: Zero runtime overhead, tree-shakeable components
- **🔧 Developer Experience**: Excellent TypeScript support and comprehensive documentation
- **🌍 Accessibility**: Built with accessibility in mind, following WCAG guidelines
- **📱 Responsive**: Mobile-first design that works on all screen sizes
- **🎭 Modern**: Latest React 18+ features with concurrent rendering support

## 🤝 Contributing

We welcome contributions! Please see our [Contributing Guide](CONTRIBUTING.md) for details.

## 📄 License

MIT License - see [LICENSE](LICENSE) file for details

---

Made with ❤️ by the KeyPix UI team