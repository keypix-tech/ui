# Contributing to Keypix UI

Thank you for your interest in contributing to Keypix UI! This document provides guidelines and information for contributors.

## 🚀 Getting Started

### Prerequisites

- Node.js >= 18.0.0
- npm >= 8.0.0
- Git

### Setup

1. Fork the repository
2. Clone your fork:
   ```bash
   git clone https://github.com/your-username/keypix-ui.git
   cd keypix-ui
   ```
3. Install dependencies:
   ```bash
   npm install
   ```
4. Start the development server:
   ```bash
   npm run dev
   ```

## 🎯 Development Guidelines

### Code Style

- Use TypeScript for all new code
- Follow the existing code style and patterns
- Use meaningful variable and function names
- Add JSDoc comments for public APIs
- Keep components small and focused

### Component Development

1. **Follow Atomic Design**: Place components in the appropriate directory:
   - `src/components/atoms/` - Basic building blocks
   - `src/components/molecules/` - Simple combinations of atoms
   - `src/components/organisms/` - Complex UI components

2. **Component Structure**:
   ```tsx
   // Component.tsx
   import * as React from "react"
   import { cn } from "../../lib/utils"
   
   export interface ComponentProps {
     // Define props here
   }
   
   const Component = React.forwardRef<HTMLDivElement, ComponentProps>(
     ({ className, ...props }, ref) => {
       return (
         <div ref={ref} className={cn("base-classes", className)} {...props} />
       )
     }
   )
   Component.displayName = "Component"
   
   export { Component }
   ```

3. **Export Structure**:
   ```tsx
   // index.ts
   export * from './Component'
   ```

### Testing

- Write tests for all new components
- Use React Testing Library for component testing
- Aim for >80% code coverage
- Run tests before submitting:
  ```bash
  npm run test
  npm run test:coverage
  ```

### Documentation

- Update README.md for new features
- Add examples in the demo app
- Document any breaking changes
- Update CHANGELOG.md

## 🔄 Pull Request Process

1. **Create a feature branch**:
   ```bash
   git checkout -b feature/your-feature-name
   ```

2. **Make your changes**:
   - Write code following the guidelines
   - Add tests for new functionality
   - Update documentation

3. **Run quality checks**:
   ```bash
   npm run lint
   npm run type-check
   npm run test
   npm run build
   ```

4. **Commit your changes**:
   ```bash
   git add .
   git commit -m "feat: add new component"
   ```

5. **Push and create PR**:
   ```bash
   git push origin feature/your-feature-name
   ```

### Commit Message Format

Use conventional commits:
- `feat:` New features
- `fix:` Bug fixes
- `docs:` Documentation changes
- `style:` Code style changes
- `refactor:` Code refactoring
- `test:` Test changes
- `chore:` Build/tooling changes

## 🐛 Reporting Issues

When reporting issues, please include:

- **Description**: Clear description of the problem
- **Steps to reproduce**: Step-by-step instructions
- **Expected behavior**: What you expected to happen
- **Actual behavior**: What actually happened
- **Environment**: OS, browser, Node.js version
- **Screenshots**: If applicable

## 📋 Issue Labels

- `bug` - Something isn't working
- `enhancement` - New feature or request
- `documentation` - Improvements or additions to documentation
- `good first issue` - Good for newcomers
- `help wanted` - Extra attention is needed
- `question` - Further information is requested

## 🏆 Recognition

Contributors will be recognized in:
- README.md contributors section
- Release notes
- GitHub contributors page

## 📞 Getting Help

- Create an issue for bugs or feature requests
- Join our community discussions
- Check existing issues and PRs

Thank you for contributing to Keypix UI! 🎉 