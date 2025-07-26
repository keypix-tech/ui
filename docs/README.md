# 📚 KeyPix UI Documentation

Welcome to the comprehensive documentation for KeyPix UI - the most optimized React component library.

## 🚀 Quick Start

Get started with KeyPix UI in minutes:

```bash
npm install keypix-ui
```

```tsx
import { Button, Card, ThemeProvider } from 'keypix-ui'

function App() {
  return (
    <ThemeProvider>
      <Card>
        <Button>Hello KeyPix UI!</Button>
      </Card>
    </ThemeProvider>
  )
}
```

## 📖 Documentation Sections

### 🎯 Getting Started
- **[Quick Start Guide](./tutorials/getting-started.md)** - Get up and running in 5 minutes
- **[Installation](./tutorials/getting-started.md#installation)** - Installation instructions
- **[Basic Usage](./tutorials/getting-started.md#quick-start)** - Basic component usage

### 🎨 Components
- **[Button](./components/button.md)** - Versatile button component
- **[Input](./components/input.md)** - Form input component
- **[Card](./components/card.md)** - Content container
- **[Badge](./components/badge.md)** - Status indicators
- **[Avatar](./components/avatar.md)** - User profile images
- **[Spinner](./components/spinner.md)** - Loading indicators
- **[SearchBar](./components/search-bar.md)** - Search functionality
- **[Alert](./components/alert.md)** - Notification messages
- **[Modal](./components/modal.md)** - Overlay dialogs
- **[Header](./components/header.md)** - Navigation header
- **[DataTable](./components/data-table.md)** - Tabular data
- **[ThemeProvider](./components/theme-provider.md)** - Theme management

### 🔧 API Reference
- **[Complete API](./api.md)** - Full API documentation
- **[TypeScript Types](./api.md#typescript-support)** - Type definitions
- **[CSS Variables](./api.md#css-variables)** - Theme customization
- **[Utility Classes](./api.md#utility-classes)** - Available utilities

### 🎮 Interactive Resources
- **[Playground](./playground.md)** - Interactive component testing
- **[Storybook](https://ui.keypix.uz/storybook)** - Component showcase
- **[Examples](./tutorials/getting-started.md#examples)** - Code examples

### 🔄 Migration Guides
- **[From MUI](./migration/migrating-from-other-libraries.md#from-mui)** - MUI migration
- **[From Chakra UI](./migration/migrating-from-other-libraries.md#from-chakra-ui)** - Chakra UI migration
- **[From Ant Design](./migration/migrating-from-other-libraries.md#from-ant-design)** - Ant Design migration
- **[From shadcn/ui](./migration/migrating-from-other-libraries.md#from-shadcnui)** - shadcn/ui migration
- **[From Tailwind UI](./migration/migrating-from-other-libraries.md#from-tailwind-ui)** - Tailwind UI migration
- **[From Bootstrap](./migration/migrating-from-other-libraries.md#from-bootstrap)** - Bootstrap migration

### 💡 Advanced Topics
- **[Customization](./tutorials/getting-started.md#customization)** - Theme customization
- **[Accessibility](./tutorials/getting-started.md#accessibility)** - A11Y features
- **[Performance](./api.md#performance)** - Optimization tips
- **[Testing](./tutorials/getting-started.md#testing)** - Testing strategies

## 🎯 Key Features

### ⚡ Performance
- **13.47 KB** gzipped bundle size
- **264ms** loading time on slow 3G
- **Tree shaking** support
- **Code splitting** ready

### 🎨 Design
- **Modern aesthetics** with clean design
- **Dark/Light themes** built-in
- **CSS variables** for easy customization
- **Responsive** mobile-first approach

### ♿ Accessibility
- **WCAG 2.1 AA** compliant
- **Keyboard navigation** support
- **Screen reader** friendly
- **High contrast** mode support

### 🔧 Developer Experience
- **TypeScript** first
- **Zero configuration** setup
- **Comprehensive** documentation
- **Interactive** examples

## 📊 Performance Metrics

| Metric | Value |
|--------|-------|
| **Bundle Size** | 13.47 KB gzipped |
| **Loading Time** | 264ms on slow 3G |
| **Runtime** | 94ms on Snapdragon 410 |
| **Tree Shaking** | ✅ Fully supported |
| **Code Splitting** | ✅ Automatic |

## 🏗️ Architecture

KeyPix UI follows **Atomic Design** principles:

- **Atoms**: Basic building blocks (Button, Input, Badge)
- **Molecules**: Simple combinations (SearchBar, Alert)
- **Organisms**: Complex components (Header, DataTable)
- **Providers**: Context providers (ThemeProvider)

## 🎨 Design System

### Color Palette
- **Primary**: Blue (#3b82f6)
- **Secondary**: Gray (#64748b)
- **Success**: Green (#22c55e)
- **Warning**: Yellow (#eab308)
- **Error**: Red (#ef4444)
- **Info**: Blue (#3b82f6)

### Typography
- **Font Family**: System fonts
- **Font Sizes**: 12px to 48px scale
- **Line Heights**: Optimized for readability
- **Font Weights**: 400, 500, 600, 700

### Spacing
- **Base Unit**: 4px
- **Scale**: 0.25rem to 4rem
- **Responsive**: Mobile-first approach

## 🔧 Customization

### CSS Variables
```css
:root {
  --primary: 221.2 83.2% 53.3%;
  --primary-foreground: 210 40% 98%;
  --background: 0 0% 100%;
  --foreground: 222.2 84% 4.9%;
  --border: 214.3 31.8% 91.4%;
  --radius: 0.5rem;
}
```

### Theme Switching
```tsx
import { ThemeProvider, useTheme } from 'keypix-ui'

function App() {
  return (
    <ThemeProvider defaultTheme="system">
      <YourApp />
    </ThemeProvider>
  )
}
```

## 🧪 Testing

### Unit Tests
```tsx
import { render, screen } from '@testing-library/react'
import { Button } from 'keypix-ui'

test('renders button with text', () => {
  render(<Button>Click me</Button>)
  expect(screen.getByRole('button', { name: /click me/i })).toBeInTheDocument()
})
```

### Accessibility Tests
```tsx
test('button is accessible', () => {
  render(<Button aria-label="Submit form">Submit</Button>)
  expect(screen.getByRole('button', { name: /submit form/i })).toBeInTheDocument()
})
```

## 🚀 Getting Help

### 📚 Resources
- **[API Reference](./api.md)** - Complete component documentation
- **[Examples](./tutorials/getting-started.md#examples)** - Code examples
- **[Playground](./playground.md)** - Interactive testing

### 💬 Community
- **[GitHub Issues](https://github.com/keypix-tech/ui/issues)** - Bug reports
- **[Discussions](https://github.com/keypix-tech/ui/discussions)** - Questions & help
- **[Email](mailto:keypixteam@gmail.com)** - Direct support

### 🔍 Search
Use the search functionality to quickly find what you're looking for:
- Component APIs
- Code examples
- Migration guides
- Best practices

## 📈 Roadmap

### 🎯 Upcoming Features
- [ ] **More Components**
  - [ ] DataGrid with advanced features
  - [ ] DatePicker with calendar
  - [ ] MultiSelect with search
  - [ ] FileUpload with drag & drop
  - [ ] RichTextEditor

- [ ] **Enhanced Features**
  - [ ] Animation library
  - [ ] Form validation
  - [ ] Internationalization
  - [ ] Server-side rendering

- [ ] **Developer Experience**
  - [ ] CLI tool for scaffolding
  - [ ] VS Code extension
  - [ ] Figma plugin
  - [ ] Design tokens export

### 🎨 Design System
- [ ] **Design Tokens** - Export to various formats
- [ ] **Icon Library** - Comprehensive icon set
- [ ] **Animation System** - Micro-interactions
- [ ] **Theme Builder** - Visual theme editor

## 🤝 Contributing

We welcome contributions! See our [Contributing Guide](../CONTRIBUTING.md) for details.

### 🐛 Reporting Issues
- Use the [GitHub issue tracker](https://github.com/keypix-tech/ui/issues)
- Include reproduction steps
- Provide browser and OS information

### 💡 Feature Requests
- Check existing issues first
- Describe the use case clearly
- Consider the impact on bundle size

### 🔧 Pull Requests
- Follow the coding standards
- Add tests for new features
- Update documentation

## 📄 License

KeyPix UI is licensed under the MIT License. See the [LICENSE](../LICENSE) file for details.

---

<div align="center">

**Made with ❤️ by [KeyPix Team](https://keypix.uz)**

[Website](https://ui.keypix.uz) • [GitHub](https://github.com/keypix-tech/ui) • [Twitter](https://twitter.com/keypixtech)

</div> 