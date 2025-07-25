# keypix-ui

A modern, scalable UI kit built with **Atomic Design Pattern** for React + TypeScript applications. Clean, composable, and highly customizable components.

## ✨ Features

- **Atomic Design**: Organized by Atoms, Molecules, Organisms, Templates, and Pages
- **TypeScript First**: Full TypeScript support with proper type definitions
- **TailwindCSS v4**: Built with the latest Tailwind CSS for easy styling
- **Composable**: Mix and match components to build complex interfaces
- **Modern**: Built with React 18+ and modern tooling
- **Scalable**: Perfect for large applications and design systems

## 🚀 Installation

```bash
npm install keypix-ui
```

## 📦 Setup Tailwind CSS

This UI kit requires Tailwind CSS v4 to be installed and configured in your project.

### 1. Install Tailwind CSS v4

```bash
npm install -D tailwindcss
```

### 2. Configure Tailwind CSS

Create `tailwind.config.js`:

```js
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/keypix-ui/**/*.{js,ts,jsx,tsx}" // Important: Include keypix-ui
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
```

### 3. Add Tailwind to your CSS

In your main CSS file (e.g., `src/index.css`):

```css
@import "tailwindcss/preflight";
@import "tailwindcss/utilities";
```

**Note**: Tailwind CSS v4 uses `@import` instead of `@tailwind` directives.

## 📖 Usage

### Import Components

```tsx
import { Button, Input, SearchBar, Header } from "keypix-ui";
```

### Basic Example

```tsx
import { Button, Input, SearchBar, Header } from "keypix-ui";

function App() {
  return (
    <div>
      <Header 
        title="My App"
        onSearch={(value) => console.log('Search:', value)}
        onLogin={() => console.log('Login')}
        onSignup={() => console.log('Signup')}
      />
      
      <div className="p-4">
        <SearchBar 
          placeholder="Search..."
          onSearch={(value) => console.log('Search:', value)}
        />
        
        <Button variant="destructive">Delete</Button>
      </div>
    </div>
  );
}
```

## 🎨 Atomic Design Components

### Atoms (Basic Building Blocks)

#### Button
```tsx
<Button>Default</Button>
<Button variant="destructive">Delete</Button>
<Button variant="outline">Outline</Button>
<Button variant="ghost">Ghost</Button>
<Button variant="link">Link</Button>
<Button variant="secondary">Secondary</Button>
<Button size="sm">Small</Button>
<Button size="lg">Large</Button>
```

**Props:**
- `variant`: `"default" | "destructive" | "outline" | "ghost" | "link" | "secondary"`
- `size`: `"sm" | "md" | "lg" | "icon"`

#### Input
```tsx
<Input placeholder="Enter text..." />
<Input type="email" placeholder="Email" />
<Input type="password" placeholder="Password" />
```

### Molecules (Simple Combinations)

#### SearchBar
```tsx
<SearchBar 
  placeholder="Search..."
  onSearch={(value) => console.log('Search:', value)}
/>
```

**Props:**
- `placeholder`: Search input placeholder
- `onSearch`: Callback function when search is triggered
- `className`: Additional CSS classes

### Organisms (Complex UI Sections)

#### Header
```tsx
<Header 
  title="App Title"
  onSearch={(value) => console.log('Search:', value)}
  onLogin={() => console.log('Login')}
  onSignup={() => console.log('Signup')}
/>
```

**Props:**
- `title`: Header title
- `onSearch`: Search callback function
- `onLogin`: Login button callback
- `onSignup`: Signup button callback
- `className`: Additional CSS classes

## 🏗️ Architecture

This library follows the **Atomic Design Pattern**:

- **Atoms**: Basic building blocks (Button, Input, etc.)
- **Molecules**: Simple combinations of atoms (SearchBar)
- **Organisms**: Complex UI sections (Header, Footer, etc.)
- **Templates**: Page layouts (coming soon)
- **Pages**: Specific page implementations (coming soon)

## 🛠️ Tech Stack

- React 18+
- TypeScript
- TailwindCSS v4
- class-variance-authority
- Vite

## 📦 NPM Package

Available on npm: [keypix-ui](https://www.npmjs.com/package/keypix-ui)

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

### Development

1. Fork the repository
2. Create a feature branch
3. Follow the Atomic Design pattern
4. Add tests if applicable
5. Submit a PR

## 📄 License

MIT License - see the [LICENSE](LICENSE) file for details.