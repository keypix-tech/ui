# 🔄 Migration Guide

Complete migration guides for switching from other UI libraries to KeyPix UI.

## Table of Contents

- [From MUI](#from-mui)
- [From Chakra UI](#from-chakra-ui)
- [From Ant Design](#from-ant-design)
- [From shadcn/ui](#from-shadcnui)
- [From Tailwind UI](#from-tailwind-ui)
- [From Bootstrap](#from-bootstrap)

---

## From MUI

### Overview

MUI (Material-UI) is a popular React component library based on Google's Material Design. This guide helps you migrate from MUI to KeyPix UI.

### Key Differences

| Feature | MUI | KeyPix UI |
|---------|-----|-----------|
| **Design System** | Material Design | Custom Design System |
| **Bundle Size** | 45 KB | 13.47 KB |
| **Styling** | Emotion/Styled Components | CSS Variables |
| **Theme** | ThemeProvider + createTheme | CSS Variables |
| **Icons** | @mui/icons-material | Custom/Any icons |

### Migration Steps

#### 1. Install KeyPix UI

```bash
npm uninstall @mui/material @mui/icons-material @emotion/react @emotion/styled
npm install keypix-ui
```

#### 2. Replace Theme Provider

**Before (MUI):**
```tsx
import { ThemeProvider, createTheme } from '@mui/material/styles'

const theme = createTheme({
  palette: {
    primary: {
      main: '#1976d2',
    },
    secondary: {
      main: '#dc004e',
    },
  },
})

function App() {
  return (
    <ThemeProvider theme={theme}>
      {/* Your app */}
    </ThemeProvider>
  )
}
```

**After (KeyPix UI):**
```tsx
import { ThemeProvider } from 'keypix-ui'

function App() {
  return (
    <ThemeProvider>
      {/* Your app */}
    </ThemeProvider>
  )
}
```

#### 3. Component Mapping

| MUI Component | KeyPix UI Component | Notes |
|---------------|---------------------|-------|
| `Button` | `Button` | Similar API, different variants |
| `TextField` | `Input` | Simplified API |
| `Card` | `Card` | Similar structure |
| `Chip` | `Badge` | Different styling |
| `Avatar` | `Avatar` | Similar API |
| `CircularProgress` | `Spinner` | Different animation |
| `Dialog` | `Modal` | Similar API |
| `AppBar` | `Header` | Different structure |

#### 4. Button Migration

**Before (MUI):**
```tsx
import { Button } from '@mui/material'

<Button variant="contained" color="primary" size="large">
  Click me
</Button>
<Button variant="outlined" color="secondary">
  Secondary
</Button>
<Button variant="text" disabled>
  Disabled
</Button>
```

**After (KeyPix UI):**
```tsx
import { Button } from 'keypix-ui'

<Button variant="default" size="lg">
  Click me
</Button>
<Button variant="outline">
  Secondary
</Button>
<Button variant="ghost" disabled>
  Disabled
</Button>
```

#### 5. Input Migration

**Before (MUI):**
```tsx
import { TextField } from '@mui/material'

<TextField
  label="Email"
  variant="outlined"
  type="email"
  required
  error={!!error}
  helperText={error}
  fullWidth
/>
```

**After (KeyPix UI):**
```tsx
import { Input } from 'keypix-ui'

<Input
  label="Email"
  type="email"
  required
  error={!!error}
  helperText={error}
  className="keypix-w-full"
/>
```

#### 6. Card Migration

**Before (MUI):**
```tsx
import { Card, CardContent, CardActions, CardMedia } from '@mui/material'

<Card>
  <CardMedia
    component="img"
    height="140"
    image="/static/images/cards/contemplative-reptile.jpg"
    alt="green iguana"
  />
  <CardContent>
    <Typography gutterBottom variant="h5" component="div">
      Lizard
    </Typography>
    <Typography variant="body2" color="text.secondary">
      Lizards are a widespread group of squamate reptiles...
    </Typography>
  </CardContent>
  <CardActions>
    <Button size="small">Share</Button>
    <Button size="small">Learn More</Button>
  </CardActions>
</Card>
```

**After (KeyPix UI):**
```tsx
import { Card, CardContent, CardHeader, CardTitle } from 'keypix-ui'

<Card>
  <img
    src="/static/images/cards/contemplative-reptile.jpg"
    alt="green iguana"
    className="keypix-w-full keypix-h-35 keypix-object-cover keypix-rounded-t-lg"
  />
  <CardHeader>
    <CardTitle>Lizard</CardTitle>
  </CardHeader>
  <CardContent>
    <p className="keypix-text-muted-foreground">
      Lizards are a widespread group of squamate reptiles...
    </p>
  </CardContent>
  <div className="keypix-p-4 keypix-flex keypix-gap-2">
    <Button size="sm">Share</Button>
    <Button size="sm" variant="outline">Learn More</Button>
  </div>
</Card>
```

#### 7. Typography Migration

**Before (MUI):**
```tsx
import { Typography } from '@mui/material'

<Typography variant="h1">Heading 1</Typography>
<Typography variant="body1" color="text.secondary">
  Body text
</Typography>
```

**After (KeyPix UI):**
```tsx
<h1 className="keypix-text-4xl keypix-font-bold">Heading 1</h1>
<p className="keypix-text-muted-foreground">Body text</p>
```

#### 8. Icon Migration

**Before (MUI):**
```tsx
import { DeleteIcon, EditIcon } from '@mui/icons-material'

<IconButton>
  <DeleteIcon />
</IconButton>
```

**After (KeyPix UI):**
```tsx
import { Button } from 'keypix-ui'

<Button size="icon" variant="ghost">
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M3 6h18M19 6v14a2 2 0 01-2 2H7a2 2 0 01-2-2V6m3 0V4a2 2 0 012-2h4a2 2 0 012 2v2" />
  </svg>
</Button>
```

---

## From Chakra UI

### Overview

Chakra UI is a popular component library with excellent accessibility features. This guide helps you migrate to KeyPix UI.

### Key Differences

| Feature | Chakra UI | KeyPix UI |
|---------|-----------|-----------|
| **Design System** | Custom Design System | Custom Design System |
| **Bundle Size** | 35 KB | 13.47 KB |
| **Styling** | Emotion + Style Props | CSS Variables |
| **Theme** | ThemeProvider + theme object | CSS Variables |
| **Responsive** | Array syntax | Tailwind classes |

### Migration Steps

#### 1. Install KeyPix UI

```bash
npm uninstall @chakra-ui/react @emotion/react @emotion/styled framer-motion
npm install keypix-ui
```

#### 2. Replace Theme Provider

**Before (Chakra UI):**
```tsx
import { ChakraProvider, extendTheme } from '@chakra-ui/react'

const theme = extendTheme({
  colors: {
    brand: {
      500: '#3b82f6',
    },
  },
})

function App() {
  return (
    <ChakraProvider theme={theme}>
      {/* Your app */}
    </ChakraProvider>
  )
}
```

**After (KeyPix UI):**
```tsx
import { ThemeProvider } from 'keypix-ui'

function App() {
  return (
    <ThemeProvider>
      {/* Your app */}
    </ThemeProvider>
  )
}
```

#### 3. Component Mapping

| Chakra UI Component | KeyPix UI Component | Notes |
|---------------------|---------------------|-------|
| `Button` | `Button` | Similar API |
| `Input` | `Input` | Similar API |
| `Box` | `div` | Use utility classes |
| `Flex` | `div` | Use flex utility classes |
| `Grid` | `div` | Use grid utility classes |
| `Text` | `p` | Use typography classes |
| `Heading` | `h1-h6` | Use typography classes |
| `Badge` | `Badge` | Similar API |
| `Avatar` | `Avatar` | Similar API |
| `Spinner` | `Spinner` | Similar API |
| `Modal` | `Modal` | Similar API |
| `Alert` | `Alert` | Similar API |

#### 4. Button Migration

**Before (Chakra UI):**
```tsx
import { Button } from '@chakra-ui/react'

<Button colorScheme="blue" size="lg" isLoading>
  Click me
</Button>
<Button variant="outline" colorScheme="red">
  Delete
</Button>
<Button variant="ghost" isDisabled>
  Disabled
</Button>
```

**After (KeyPix UI):**
```tsx
import { Button } from 'keypix-ui'

<Button variant="default" size="lg" loading>
  Click me
</Button>
<Button variant="destructive">
  Delete
</Button>
<Button variant="ghost" disabled>
  Disabled
</Button>
```

#### 5. Input Migration

**Before (Chakra UI):**
```tsx
import { Input, FormControl, FormLabel, FormErrorMessage } from '@chakra-ui/react'

<FormControl isInvalid={!!error}>
  <FormLabel>Email</FormLabel>
  <Input type="email" placeholder="Enter your email" />
  <FormErrorMessage>{error}</FormErrorMessage>
</FormControl>
```

**After (KeyPix UI):**
```tsx
import { Input } from 'keypix-ui'

<Input
  label="Email"
  type="email"
  placeholder="Enter your email"
  error={!!error}
  helperText={error}
/>
```

#### 6. Layout Migration

**Before (Chakra UI):**
```tsx
import { Box, Flex, Grid, GridItem } from '@chakra-ui/react'

<Box p={4} bg="gray.100">
  <Flex direction="column" gap={4}>
    <Grid templateColumns="repeat(3, 1fr)" gap={6}>
      <GridItem>Item 1</GridItem>
      <GridItem>Item 2</GridItem>
      <GridItem>Item 3</GridItem>
    </Grid>
  </Flex>
</Box>
```

**After (KeyPix UI):**
```tsx
<div className="keypix-p-4 keypix-bg-muted">
  <div className="keypix-flex keypix-flex-col keypix-gap-4">
    <div className="keypix-grid keypix-grid-cols-3 keypix-gap-6">
      <div>Item 1</div>
      <div>Item 2</div>
      <div>Item 3</div>
    </div>
  </div>
</div>
```

#### 7. Responsive Migration

**Before (Chakra UI):**
```tsx
<Box p={[2, 4, 6]} fontSize={["sm", "md", "lg"]}>
  Responsive content
</Box>
```

**After (KeyPix UI):**
```tsx
<div className="keypix-p-2 md:keypix-p-4 lg:keypix-p-6 keypix-text-sm md:keypix-text-base lg:keypix-text-lg">
  Responsive content
</div>
```

---

## From Ant Design

### Overview

Ant Design is a comprehensive UI library with enterprise features. This guide helps you migrate to KeyPix UI.

### Key Differences

| Feature | Ant Design | KeyPix UI |
|---------|------------|-----------|
| **Design System** | Ant Design | Custom Design System |
| **Bundle Size** | 55 KB | 13.47 KB |
| **Styling** | Less/CSS-in-JS | CSS Variables |
| **Theme** | ConfigProvider | CSS Variables |
| **Icons** | @ant-design/icons | Custom/Any icons |

### Migration Steps

#### 1. Install KeyPix UI

```bash
npm uninstall antd @ant-design/icons
npm install keypix-ui
```

#### 2. Replace Config Provider

**Before (Ant Design):**
```tsx
import { ConfigProvider } from 'antd'

function App() {
  return (
    <ConfigProvider
      theme={{
        token: {
          colorPrimary: '#1890ff',
        },
      }}
    >
      {/* Your app */}
    </ConfigProvider>
  )
}
```

**After (KeyPix UI):**
```tsx
import { ThemeProvider } from 'keypix-ui'

function App() {
  return (
    <ThemeProvider>
      {/* Your app */}
    </ThemeProvider>
  )
}
```

#### 3. Component Mapping

| Ant Design Component | KeyPix UI Component | Notes |
|----------------------|---------------------|-------|
| `Button` | `Button` | Similar API |
| `Input` | `Input` | Similar API |
| `Card` | `Card` | Similar structure |
| `Tag` | `Badge` | Different styling |
| `Avatar` | `Avatar` | Similar API |
| `Spin` | `Spinner` | Different animation |
| `Modal` | `Modal` | Similar API |
| `Alert` | `Alert` | Similar API |
| `Table` | `DataTable` | Different API |
| `Form` | Custom forms | Use React Hook Form |

#### 4. Button Migration

**Before (Ant Design):**
```tsx
import { Button } from 'antd'

<Button type="primary" size="large" loading>
  Click me
</Button>
<Button type="default" danger>
  Delete
</Button>
<Button type="text" disabled>
  Disabled
</Button>
```

**After (KeyPix UI):**
```tsx
import { Button } from 'keypix-ui'

<Button variant="default" size="lg" loading>
  Click me
</Button>
<Button variant="destructive">
  Delete
</Button>
<Button variant="ghost" disabled>
  Disabled
</Button>
```

#### 5. Table Migration

**Before (Ant Design):**
```tsx
import { Table } from 'antd'

const columns = [
  {
    title: 'Name',
    dataIndex: 'name',
    key: 'name',
  },
  {
    title: 'Age',
    dataIndex: 'age',
    key: 'age',
  },
]

<Table columns={columns} dataSource={data} />
```

**After (KeyPix UI):**
```tsx
import { DataTable } from 'keypix-ui'

const columns = [
  {
    key: 'name',
    header: 'Name',
    accessor: (item: any) => item.name,
  },
  {
    key: 'age',
    header: 'Age',
    accessor: (item: any) => item.age,
  },
]

<DataTable data={data} columns={columns} />
```

---

## From shadcn/ui

### Overview

shadcn/ui is a collection of reusable components built on top of Tailwind CSS. This guide helps you migrate to KeyPix UI.

### Key Differences

| Feature | shadcn/ui | KeyPix UI |
|---------|-----------|-----------|
| **Installation** | Copy components | npm install |
| **Bundle Size** | 0 KB (copied) | 13.47 KB |
| **Styling** | Tailwind CSS | CSS Variables |
| **Theme** | CSS Variables | CSS Variables |
| **Customization** | Full control | Pre-built + customizable |

### Migration Steps

#### 1. Install KeyPix UI

```bash
npm install keypix-ui
```

#### 2. Remove shadcn/ui Components

```bash
# Remove copied components
rm -rf src/components/ui
```

#### 3. Component Mapping

| shadcn/ui Component | KeyPix UI Component | Notes |
|---------------------|---------------------|-------|
| `Button` | `Button` | Similar API |
| `Input` | `Input` | Similar API |
| `Card` | `Card` | Similar structure |
| `Badge` | `Badge` | Similar API |
| `Avatar` | `Avatar` | Similar API |
| `Spinner` | `Spinner` | Similar API |
| `Dialog` | `Modal` | Similar API |
| `Alert` | `Alert` | Similar API |

#### 4. Button Migration

**Before (shadcn/ui):**
```tsx
import { Button } from "@/components/ui/button"

<Button variant="default" size="lg">
  Click me
</Button>
<Button variant="destructive">
  Delete
</Button>
<Button variant="ghost" disabled>
  Disabled
</Button>
```

**After (KeyPix UI):**
```tsx
import { Button } from 'keypix-ui'

<Button variant="default" size="lg">
  Click me
</Button>
<Button variant="destructive">
  Delete
</Button>
<Button variant="ghost" disabled>
  Disabled
</Button>
```

#### 5. Class Name Migration

**Before (shadcn/ui):**
```tsx
<div className="flex items-center justify-between p-4 bg-card border rounded-lg">
  <h2 className="text-lg font-semibold">Title</h2>
  <Button>Action</Button>
</div>
```

**After (KeyPix UI):**
```tsx
<div className="keypix-flex keypix-items-center keypix-justify-between keypix-p-4 keypix-bg-card keypix-border keypix-rounded-lg">
  <h2 className="keypix-text-lg keypix-font-semibold">Title</h2>
  <Button>Action</Button>
</div>
```

---

## From Tailwind UI

### Overview

Tailwind UI provides pre-built components using Tailwind CSS. This guide helps you migrate to KeyPix UI.

### Key Differences

| Feature | Tailwind UI | KeyPix UI |
|---------|-------------|-----------|
| **Installation** | Copy HTML | npm install |
| **Bundle Size** | 0 KB (copied) | 13.47 KB |
| **Styling** | Tailwind CSS | CSS Variables |
| **Theme** | Tailwind config | CSS Variables |
| **Interactivity** | Manual JavaScript | Built-in React |

### Migration Steps

#### 1. Install KeyPix UI

```bash
npm install keypix-ui
```

#### 2. Component Migration

**Before (Tailwind UI):**
```html
<button class="bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-lg">
  Click me
</button>
```

**After (KeyPix UI):**
```tsx
import { Button } from 'keypix-ui'

<Button variant="default">Click me</Button>
```

#### 3. Form Migration

**Before (Tailwind UI):**
```html
<form class="space-y-4">
  <div>
    <label class="block text-sm font-medium text-gray-700">Email</label>
    <input type="email" class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500">
  </div>
  <button type="submit" class="bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-lg">
    Submit
  </button>
</form>
```

**After (KeyPix UI):**
```tsx
import { Input, Button } from 'keypix-ui'

<form className="keypix-space-y-4">
  <Input
    label="Email"
    type="email"
  />
  <Button type="submit">Submit</Button>
</form>
```

---

## From Bootstrap

### Overview

Bootstrap is a popular CSS framework. This guide helps you migrate from Bootstrap to KeyPix UI.

### Key Differences

| Feature | Bootstrap | KeyPix UI |
|---------|-----------|-----------|
| **Framework** | CSS Framework | React Components |
| **Bundle Size** | 30 KB | 13.47 KB |
| **Styling** | CSS Classes | CSS Variables |
| **Theme** | CSS Variables | CSS Variables |
| **JavaScript** | jQuery/vanilla JS | React |

### Migration Steps

#### 1. Install KeyPix UI

```bash
npm install keypix-ui
```

#### 2. Remove Bootstrap

```bash
npm uninstall bootstrap @popperjs/core
```

#### 3. Component Mapping

| Bootstrap Component | KeyPix UI Component | Notes |
|---------------------|---------------------|-------|
| `.btn` | `Button` | Similar variants |
| `.form-control` | `Input` | Similar API |
| `.card` | `Card` | Similar structure |
| `.badge` | `Badge` | Similar API |
| `.spinner-border` | `Spinner` | Different animation |
| `.modal` | `Modal` | Similar API |
| `.alert` | `Alert` | Similar API |

#### 4. Button Migration

**Before (Bootstrap):**
```html
<button class="btn btn-primary btn-lg">Click me</button>
<button class="btn btn-outline-danger">Delete</button>
<button class="btn btn-secondary" disabled>Disabled</button>
```

**After (KeyPix UI):**
```tsx
import { Button } from 'keypix-ui'

<Button variant="default" size="lg">Click me</Button>
<Button variant="destructive">Delete</Button>
<Button variant="secondary" disabled>Disabled</Button>
```

#### 5. Grid Migration

**Before (Bootstrap):**
```html
<div class="container">
  <div class="row">
    <div class="col-md-6 col-lg-4">Column 1</div>
    <div class="col-md-6 col-lg-4">Column 2</div>
    <div class="col-md-6 col-lg-4">Column 3</div>
  </div>
</div>
```

**After (KeyPix UI):**
```tsx
<div className="keypix-container keypix-mx-auto">
  <div className="keypix-grid keypix-grid-cols-1 md:keypix-grid-cols-2 lg:keypix-grid-cols-3 keypix-gap-4">
    <div>Column 1</div>
    <div>Column 2</div>
    <div>Column 3</div>
  </div>
</div>
```

---

## Migration Checklist

### Before Migration

- [ ] **Audit Current Usage**: Identify all components in use
- [ ] **Plan Migration**: Decide on migration strategy (gradual vs. complete)
- [ ] **Backup Code**: Create a backup of your current implementation
- [ ] **Test Coverage**: Ensure you have good test coverage

### During Migration

- [ ] **Install KeyPix UI**: `npm install keypix-ui`
- [ ] **Replace Theme Provider**: Update your app's root component
- [ ] **Migrate Components**: Replace components one by one
- [ ] **Update Styling**: Convert class names and styles
- [ ] **Test Functionality**: Ensure all features work correctly
- [ ] **Update Tests**: Update component tests

### After Migration

- [ ] **Performance Check**: Verify bundle size and loading times
- [ ] **Accessibility Audit**: Test with screen readers and keyboard navigation
- [ ] **Cross-browser Testing**: Test in different browsers
- [ ] **Remove Old Dependencies**: Clean up unused packages
- [ ] **Documentation Update**: Update your project documentation

## Common Issues & Solutions

### Styling Conflicts

**Issue**: Old styles conflicting with KeyPix UI
**Solution**: Remove old CSS imports and reset styles

```css
/* Add to your global CSS */
* {
  box-sizing: border-box;
}

body {
  margin: 0;
  padding: 0;
}
```

### TypeScript Errors

**Issue**: TypeScript errors after migration
**Solution**: Update type imports and interfaces

```tsx
// Before
import { ButtonProps } from '@mui/material'

// After
import type { ButtonProps } from 'keypix-ui'
```

### Bundle Size Issues

**Issue**: Bundle size increased after migration
**Solution**: Use tree shaking and code splitting

```tsx
// Import only what you need
import { Button } from 'keypix-ui'
// Not: import * from 'keypix-ui'
```

### Performance Issues

**Issue**: Performance degradation after migration
**Solution**: Optimize component usage and lazy load

```tsx
// Lazy load heavy components
const DataTable = lazy(() => import('keypix-ui').then(m => ({ default: m.DataTable })))
```

## Support

If you encounter issues during migration:

1. **Check Documentation**: Review the [API Reference](./api.md)
2. **Search Issues**: Look for similar issues in our GitHub repository
3. **Create Issue**: Report bugs or request features
4. **Community Help**: Ask questions in our discussions

---

*This migration guide covers the most common scenarios. For specific cases, please refer to our documentation or create an issue.* 