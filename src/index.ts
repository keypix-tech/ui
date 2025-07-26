// Auto-inject styles when library is imported
import './lib/auto-styles'

// Atomic Design Pattern Components
export * from './components/atoms'
export * from './components/molecules'
export * from './components/organisms'
export * from './components/providers'

// Re-export utils and design system
export { cn } from './lib/utils'
export * from './lib/design-system'
export * from './lib/animations'
export * from './lib/theme'