# keypix-ui

A minimalistic and lightweight UI kit for React + TypeScript applications. Built as a clean alternative to shadcn/ui with focus on simplicity and customization.

## ✨ Features

- **TypeScript First**: Full TypeScript support with proper type definitions
- **TailwindCSS**: Built with TailwindCSS for easy styling and customization
- **Lightweight**: Minimal bundle size, no unnecessary dependencies
- **Customizable**: Easy to extend and modify components
- **Modern**: Built with React 18+ and modern tooling

## 🚀 Installation

```bash
npm install keypix-ui
```

## 📦 Setup Tailwind CSS

This UI kit requires Tailwind CSS to be installed and configured in your project.

### 1. Install Tailwind CSS

```bash
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p
```

### 2. Configure Tailwind CSS

In your `tailwind.config.js`:

```js
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
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
@tailwind base;
@tailwind components;
@tailwind utilities;
```

## 📖 Usage

```tsx
import { Button } from "keypix-ui";

function App() {
  return (
    <Button variant="destructive">Delete</Button>
  );
}
```

## 🎨 Components

### Button

A versatile button component with multiple variants and sizes.

```tsx
<Button>Default</Button>
<Button variant="destructive">Delete</Button>
<Button variant="outline">Outline</Button>
<Button variant="ghost">Ghost</Button>
<Button variant="link">Link</Button>
<Button size="sm">Small</Button>
```

**Props:**
- `variant`: `"default" | "destructive" | "outline" | "ghost" | "link"`
- `size`: `"sm" | "md" | "lg" | "icon"`

## 🛠️ Tech Stack

- React 18+
- TypeScript
- TailwindCSS
- class-variance-authority
- Vite

## 📦 NPM Package

Available on npm: [keypix-ui](https://www.npmjs.com/package/keypix-ui)

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📄 License

MIT License - see the [LICENSE](LICENSE) file for details.