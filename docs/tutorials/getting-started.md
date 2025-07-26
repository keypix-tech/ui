# 🚀 Getting Started with KeyPix UI

A comprehensive guide to get you up and running with KeyPix UI in minutes.

## Prerequisites

Before you begin, make sure you have:

- **Node.js** 18+ installed
- **npm**, **yarn**, or **pnpm** package manager
- Basic knowledge of **React** and **TypeScript**
- A code editor (VS Code recommended)

## Quick Start (5 minutes)

### 1. Create a New React Project

```bash
# Using Create React App
npx create-react-app my-app --template typescript

# Using Vite (recommended)
npm create vite@latest my-app -- --template react-ts

# Using Next.js
npx create-next-app@latest my-app --typescript
```

### 2. Install KeyPix UI

```bash
cd my-app
npm install keypix-ui
```

### 3. Import and Use Components

```tsx
// src/App.tsx
import { Button, Card, CardContent, CardHeader, CardTitle, ThemeProvider } from 'keypix-ui'

function App() {
  return (
    <ThemeProvider>
      <div className="keypix-p-8">
        <Card>
          <CardHeader>
            <CardTitle>Welcome to KeyPix UI!</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="keypix-mb-4">
              This is your first KeyPix UI component. No configuration needed!
            </p>
            <Button>Get Started</Button>
          </CardContent>
        </Card>
      </div>
    </ThemeProvider>
  )
}

export default App
```

### 4. Start Your Development Server

```bash
npm run dev
# or
npm start
```

**That's it!** 🎉 Your app is now running with KeyPix UI components.

## Step-by-Step Tutorial

### Step 1: Project Setup

Let's create a complete application step by step.

#### Create the Project

```bash
npm create vite@latest keypix-demo -- --template react-ts
cd keypix-demo
npm install
```

#### Install Dependencies

```bash
npm install keypix-ui
```

### Step 2: Basic Layout

Create a basic layout with header and main content.

```tsx
// src/App.tsx
import { ThemeProvider } from 'keypix-ui'

function App() {
  return (
    <ThemeProvider>
      <div className="keypix-min-h-screen keypix-bg-background">
        <Header />
        <Main />
      </div>
    </ThemeProvider>
  )
}

export default App
```

#### Create Header Component

```tsx
// src/components/Header.tsx
import { Button } from 'keypix-ui'

export function Header() {
  return (
    <header className="keypix-border-b keypix-bg-card">
      <div className="keypix-container keypix-mx-auto keypix-px-4 keypix-py-4">
        <div className="keypix-flex keypix-items-center keypix-justify-between">
          <h1 className="keypix-text-xl keypix-font-bold">KeyPix Demo</h1>
          <nav className="keypix-flex keypix-gap-4">
            <Button variant="ghost">Home</Button>
            <Button variant="ghost">About</Button>
            <Button variant="ghost">Contact</Button>
          </nav>
        </div>
      </div>
    </header>
  )
}
```

#### Create Main Component

```tsx
// src/components/Main.tsx
import { Card, CardContent, CardHeader, CardTitle } from 'keypix-ui'

export function Main() {
  return (
    <main className="keypix-container keypix-mx-auto keypix-px-4 keypix-py-8">
      <div className="keypix-max-w-4xl keypix-mx-auto">
        <h2 className="keypix-text-3xl keypix-font-bold keypix-mb-8">
          Welcome to KeyPix UI
        </h2>
        
        <div className="keypix-grid keypix-grid-cols-1 md:keypix-grid-cols-2 keypix-gap-6">
          <Card>
            <CardHeader>
              <CardTitle>Getting Started</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="keypix-text-muted-foreground">
                Learn how to use KeyPix UI components in your React application.
              </p>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader>
              <CardTitle>Components</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="keypix-text-muted-foreground">
                Explore our collection of beautiful and accessible components.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </main>
  )
}
```

### Step 3: Add Interactive Features

Let's add some interactive features to make the app more engaging.

#### Create a Contact Form

```tsx
// src/components/ContactForm.tsx
import { useState } from 'react'
import { Button, Input, Card, CardContent, CardHeader, CardTitle, Alert } from 'keypix-ui'

export function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [showSuccess, setShowSuccess] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000))
    
    setIsSubmitting(false)
    setShowSuccess(true)
    setFormData({ name: '', email: '', message: '' })
    
    // Hide success message after 3 seconds
    setTimeout(() => setShowSuccess(false), 3000)
  }

  const handleChange = (field: string) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({ ...prev, [field]: e.target.value }))
  }

  return (
    <Card className="keypix-max-w-md keypix-mx-auto">
      <CardHeader>
        <CardTitle>Contact Us</CardTitle>
      </CardHeader>
      <CardContent>
        {showSuccess && (
          <Alert variant="success" className="keypix-mb-4">
            Message sent successfully!
          </Alert>
        )}
        
        <form onSubmit={handleSubmit} className="keypix-space-y-4">
          <Input
            label="Name"
            placeholder="Your name"
            value={formData.name}
            onChange={handleChange('name')}
            required
          />
          
          <Input
            label="Email"
            type="email"
            placeholder="your.email@example.com"
            value={formData.email}
            onChange={handleChange('email')}
            required
          />
          
          <div>
            <label className="keypix-block keypix-text-sm keypix-font-medium keypix-mb-2">
              Message
            </label>
            <textarea
              className="keypix-w-full keypix-p-3 keypix-border keypix-rounded-md keypix-bg-background keypix-text-foreground"
              placeholder="Your message..."
              rows={4}
              value={formData.message}
              onChange={handleChange('message')}
              required
            />
          </div>
          
          <Button 
            type="submit" 
            loading={isSubmitting}
            loadingText="Sending..."
            className="keypix-w-full"
          >
            Send Message
          </Button>
        </form>
      </CardContent>
    </Card>
  )
}
```

#### Update Main Component

```tsx
// src/components/Main.tsx
import { Card, CardContent, CardHeader, CardTitle, Button } from 'keypix-ui'
import { ContactForm } from './ContactForm'

export function Main() {
  return (
    <main className="keypix-container keypix-mx-auto keypix-px-4 keypix-py-8">
      <div className="keypix-max-w-4xl keypix-mx-auto">
        <h2 className="keypix-text-3xl keypix-font-bold keypix-mb-8">
          Welcome to KeyPix UI
        </h2>
        
        <div className="keypix-grid keypix-grid-cols-1 md:keypix-grid-cols-2 keypix-gap-6 keypix-mb-8">
          <Card>
            <CardHeader>
              <CardTitle>Getting Started</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="keypix-text-muted-foreground keypix-mb-4">
                Learn how to use KeyPix UI components in your React application.
              </p>
              <Button variant="outline">Learn More</Button>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader>
              <CardTitle>Components</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="keypix-text-muted-foreground keypix-mb-4">
                Explore our collection of beautiful and accessible components.
              </p>
              <Button variant="outline">Browse Components</Button>
            </CardContent>
          </Card>
        </div>
        
        <ContactForm />
      </div>
    </main>
  )
}
```

### Step 4: Add Theme Switching

Let's add theme switching functionality.

#### Create Theme Toggle

```tsx
// src/components/ThemeToggle.tsx
import { useTheme, Button } from 'keypix-ui'

export function ThemeToggle() {
  const { theme, setTheme } = useTheme()

  return (
    <div className="keypix-flex keypix-gap-2">
      <Button 
        variant={theme === 'light' ? 'default' : 'outline'}
        size="sm"
        onClick={() => setTheme('light')}
      >
        Light
      </Button>
      <Button 
        variant={theme === 'dark' ? 'default' : 'outline'}
        size="sm"
        onClick={() => setTheme('dark')}
      >
        Dark
      </Button>
      <Button 
        variant={theme === 'system' ? 'default' : 'outline'}
        size="sm"
        onClick={() => setTheme('system')}
      >
        System
      </Button>
    </div>
  )
}
```

#### Update Header

```tsx
// src/components/Header.tsx
import { Button } from 'keypix-ui'
import { ThemeToggle } from './ThemeToggle'

export function Header() {
  return (
    <header className="keypix-border-b keypix-bg-card">
      <div className="keypix-container keypix-mx-auto keypix-px-4 keypix-py-4">
        <div className="keypix-flex keypix-items-center keypix-justify-between">
          <h1 className="keypix-text-xl keypix-font-bold">KeyPix Demo</h1>
          <div className="keypix-flex keypix-items-center keypix-gap-4">
            <nav className="keypix-flex keypix-gap-4">
              <Button variant="ghost">Home</Button>
              <Button variant="ghost">About</Button>
              <Button variant="ghost">Contact</Button>
            </nav>
            <ThemeToggle />
          </div>
        </div>
      </div>
    </header>
  )
}
```

### Step 5: Add Search Functionality

Let's add a search bar to the header.

#### Create Search Component

```tsx
// src/components/Search.tsx
import { SearchBar } from 'keypix-ui'

export function Search() {
  const handleSearch = (query: string) => {
    console.log('Searching for:', query)
    // Implement your search logic here
  }

  return (
    <SearchBar 
      placeholder="Search components..."
      onSearch={handleSearch}
      className="keypix-w-64"
    />
  )
}
```

#### Update Header

```tsx
// src/components/Header.tsx
import { Button } from 'keypix-ui'
import { ThemeToggle } from './ThemeToggle'
import { Search } from './Search'

export function Header() {
  return (
    <header className="keypix-border-b keypix-bg-card">
      <div className="keypix-container keypix-mx-auto keypix-px-4 keypix-py-4">
        <div className="keypix-flex keypix-items-center keypix-justify-between">
          <h1 className="keypix-text-xl keypix-font-bold">KeyPix Demo</h1>
          <div className="keypix-flex keypix-items-center keypix-gap-4">
            <Search />
            <nav className="keypix-flex keypix-gap-4">
              <Button variant="ghost">Home</Button>
              <Button variant="ghost">About</Button>
              <Button variant="ghost">Contact</Button>
            </nav>
            <ThemeToggle />
          </div>
        </div>
      </div>
    </header>
  )
}
```

### Step 6: Add Data Table

Let's add a data table to showcase more components.

#### Create Data Table Component

```tsx
// src/components/UserTable.tsx
import { DataTable, Button, Badge, Avatar } from 'keypix-ui'

interface User {
  id: string
  name: string
  email: string
  role: string
  status: 'active' | 'inactive' | 'pending'
  avatar?: string
}

const users: User[] = [
  {
    id: '1',
    name: 'John Doe',
    email: 'john@example.com',
    role: 'Admin',
    status: 'active',
    avatar: 'https://i.pravatar.cc/150?img=1'
  },
  {
    id: '2',
    name: 'Jane Smith',
    email: 'jane@example.com',
    role: 'User',
    status: 'active',
    avatar: 'https://i.pravatar.cc/150?img=2'
  },
  {
    id: '3',
    name: 'Bob Johnson',
    email: 'bob@example.com',
    role: 'Editor',
    status: 'pending',
    avatar: 'https://i.pravatar.cc/150?img=3'
  }
]

const columns = [
  {
    key: 'avatar',
    header: '',
    accessor: (user: User) => user.avatar,
    render: (avatar: string) => <Avatar src={avatar} size="sm" />
  },
  {
    key: 'name',
    header: 'Name',
    accessor: (user: User) => user.name
  },
  {
    key: 'email',
    header: 'Email',
    accessor: (user: User) => user.email
  },
  {
    key: 'role',
    header: 'Role',
    accessor: (user: User) => user.role
  },
  {
    key: 'status',
    header: 'Status',
    accessor: (user: User) => user.status,
    render: (status: string) => (
      <Badge 
        variant={status === 'active' ? 'success' : status === 'pending' ? 'warning' : 'secondary'}
      >
        {status}
      </Badge>
    )
  },
  {
    key: 'actions',
    header: 'Actions',
    accessor: () => null,
    render: () => (
      <div className="keypix-flex keypix-gap-2">
        <Button size="sm" variant="outline">Edit</Button>
        <Button size="sm" variant="destructive">Delete</Button>
      </div>
    )
  }
]

export function UserTable() {
  return (
    <div className="keypix-space-y-4">
      <div className="keypix-flex keypix-items-center keypix-justify-between">
        <h3 className="keypix-text-lg keypix-font-semibold">Users</h3>
        <Button>Add User</Button>
      </div>
      <DataTable data={users} columns={columns} />
    </div>
  )
}
```

#### Update Main Component

```tsx
// src/components/Main.tsx
import { Card, CardContent, CardHeader, CardTitle, Button } from 'keypix-ui'
import { ContactForm } from './ContactForm'
import { UserTable } from './UserTable'

export function Main() {
  return (
    <main className="keypix-container keypix-mx-auto keypix-px-4 keypix-py-8">
      <div className="keypix-max-w-6xl keypix-mx-auto">
        <h2 className="keypix-text-3xl keypix-font-bold keypix-mb-8">
          Welcome to KeyPix UI
        </h2>
        
        <div className="keypix-grid keypix-grid-cols-1 md:keypix-grid-cols-2 keypix-gap-6 keypix-mb-8">
          <Card>
            <CardHeader>
              <CardTitle>Getting Started</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="keypix-text-muted-foreground keypix-mb-4">
                Learn how to use KeyPix UI components in your React application.
              </p>
              <Button variant="outline">Learn More</Button>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader>
              <CardTitle>Components</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="keypix-text-muted-foreground keypix-mb-4">
                Explore our collection of beautiful and accessible components.
              </p>
              <Button variant="outline">Browse Components</Button>
            </CardContent>
          </Card>
        </div>
        
        <div className="keypix-grid keypix-grid-cols-1 lg:keypix-grid-cols-2 keypix-gap-8">
          <Card>
            <CardHeader>
              <CardTitle>Contact Form</CardTitle>
            </CardHeader>
            <CardContent>
              <ContactForm />
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader>
              <CardTitle>User Management</CardTitle>
            </CardHeader>
            <CardContent>
              <UserTable />
            </CardContent>
          </Card>
        </div>
      </div>
    </main>
  )
}
```

## Final Result

Your application now includes:

- ✅ **Responsive Layout** with header and main content
- ✅ **Theme Switching** (light/dark/system)
- ✅ **Interactive Forms** with validation
- ✅ **Search Functionality**
- ✅ **Data Tables** with sorting and actions
- ✅ **Loading States** and error handling
- ✅ **Accessibility Features**

## Next Steps

1. **Customize Themes**: Learn how to customize colors and styles
2. **Add More Components**: Explore the full component library
3. **Build Real Features**: Use these patterns in your actual application
4. **Optimize Performance**: Learn about bundle optimization
5. **Add Tests**: Implement unit and integration tests

## Common Issues & Solutions

### Styles Not Loading

If styles aren't loading, make sure:

```tsx
// Import the library at the top of your main file
import 'keypix-ui'
```

### TypeScript Errors

If you get TypeScript errors:

```bash
npm install --save-dev @types/react @types/react-dom
```

### Build Issues

If you have build issues:

```bash
# Clear cache and reinstall
rm -rf node_modules package-lock.json
npm install
```

## Resources

- [📖 Full Documentation](./api.md)
- [🎨 Component Examples](./components/)
- [🎮 Interactive Playground](./playground.md)
- [🔧 API Reference](./api.md)
- [💡 Best Practices](./best-practices.md)

---

*This tutorial covers the basics. For advanced usage, check out our other guides!* 