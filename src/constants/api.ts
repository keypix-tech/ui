// API Constants for Keypix UI Library

// Unified size constants
export const SIZES = ['xs', 'sm', 'md', 'lg', 'xl', '2xl'] as const

// Unified variant constants
export const VARIANTS = [
  'default', 
  'secondary', 
  'destructive', 
  'outline', 
  'ghost', 
  'link', 
  'success', 
  'warning', 
  'info'
] as const

// Unified color constants
export const COLORS = [
  'primary', 
  'secondary', 
  'success', 
  'warning', 
  'error', 
  'info', 
  'muted'
] as const

// Unified status constants
export const STATUSES = ['online', 'offline', 'away', 'busy', 'pending'] as const

// Unified icon position constants
export const ICON_POSITIONS = ['left', 'right'] as const

// Unified border radius constants
export const BORDER_RADIUSES = ['none', 'sm', 'md', 'lg', 'xl', 'full'] as const

// Unified shadow constants
export const SHADOWS = ['none', 'sm', 'md', 'lg', 'xl', '2xl'] as const

// Unified spinner type constants
export const SPINNER_TYPES = ['dots', 'spinner', 'pulse', 'bars'] as const

// Unified text position constants
export const TEXT_POSITIONS = ['top', 'bottom', 'left', 'right'] as const

// Unified modal size constants
export const MODAL_SIZES = ['sm', 'md', 'lg', 'xl', 'full'] as const

// Unified button type constants
export const BUTTON_TYPES = ['button', 'submit', 'reset'] as const

// Unified input type constants
export const INPUT_TYPES = [
  'text',
  'email',
  'password',
  'number',
  'tel',
  'url',
  'search',
  'date',
  'time',
  'datetime-local',
  'month',
  'week',
  'file',
  'checkbox',
  'radio',
  'range',
  'color',
  'hidden'
] as const

// Unified input mode constants
export const INPUT_MODES = [
  'none',
  'text',
  'tel',
  'url',
  'email',
  'numeric',
  'decimal',
  'search'
] as const

// Unified enter key hint constants
export const ENTER_KEY_HINTS = [
  'enter',
  'done',
  'go',
  'next',
  'previous',
  'search',
  'send'
] as const

// Unified border width constants
export const BORDER_WIDTHS = ['none', 'thin', 'normal', 'thick'] as const

// Unified density constants
export const DENSITIES = ['compact', 'comfortable', 'spacious'] as const

// Unified alignment constants
export const ALIGNMENTS = ['start', 'center', 'end', 'stretch'] as const

// Unified position constants
export const POSITIONS = ['top', 'bottom', 'left', 'right', 'center'] as const

// Unified animation constants
export const ANIMATIONS = ['fade', 'slide', 'scale', 'rotate', 'bounce', 'pulse'] as const

// Unified aria live constants
export const ARIA_LIVES = ['off', 'polite', 'assertive'] as const

// Default values for components
export const DEFAULTS = {
  // Button defaults
  button: {
    variant: 'default',
    size: 'md',
    loading: false,
    fullWidth: false,
    disableOnLoading: true,
    rounded: false,
    elevated: false,
    bordered: true,
    borderRadius: 'md'
  },
  
  // Input defaults
  input: {
    variant: 'default',
    size: 'md',
    loading: false,
    fullWidth: false,
    rounded: false,
    elevated: false,
    bordered: true,
    borderRadius: 'md',
    borderWidth: 'normal',
    clearable: false
  },
  
  // Badge defaults
  badge: {
    variant: 'default',
    size: 'md',
    rounded: false,
    elevated: false,
    bordered: false,
    borderRadius: 'md',
    removable: false
  },
  
  // Spinner defaults
  spinner: {
    variant: 'default',
    size: 'md',
    type: 'spinner',
    rounded: false,
    elevated: false,
    bordered: false,
    borderRadius: 'md'
  },
  
  // Alert defaults
  alert: {
    variant: 'default',
    dismissible: false
  },
  
  // Modal defaults
  modal: {
    size: 'md',
    closeOnOverlayClick: true,
    closeOnEscape: true
  },
  
  // DataTable defaults
  dataTable: {
    loading: false,
    searchable: false,
    sortable: false,
    pagination: false,
    pageSize: 10,
    density: 'comfortable',
    bordered: false,
    striped: false
  }
} as const

// Common prop names for consistency
export const PROP_NAMES = {
  // Size props
  SIZE: 'size',
  FULL_WIDTH: 'fullWidth',
  FULL_HEIGHT: 'fullHeight',
  
  // Variant props
  VARIANT: 'variant',
  COLOR: 'color',
  
  // Loading props
  LOADING: 'loading',
  LOADING_TEXT: 'loadingText',
  DISABLE_ON_LOADING: 'disableOnLoading',
  
  // Icon props
  LEFT_ICON: 'leftIcon',
  RIGHT_ICON: 'rightIcon',
  ICON_POSITION: 'iconPosition',
  ICON: 'icon',
  
  // Status props
  STATUS: 'status',
  SHOW_STATUS: 'showStatus',
  
  // Style props
  ROUNDED: 'rounded',
  ELEVATED: 'elevated',
  BORDER_RADIUS: 'borderRadius',
  BORDERED: 'bordered',
  BORDER_WIDTH: 'borderWidth',
  BORDER_COLOR: 'borderColor',
  
  // Form props
  NAME: 'name',
  VALUE: 'value',
  ON_CHANGE: 'onChange',
  ERROR: 'error',
  HELPER_TEXT: 'helperText',
  REQUIRED: 'required',
  CLEARABLE: 'clearable',
  ON_CLEAR: 'onClear',
  
  // Accessibility props
  ARIA_LABEL: 'aria-label',
  ARIA_DESCRIBEDBY: 'aria-describedby',
  ARIA_LIVE: 'aria-live',
  ARIA_BUSY: 'aria-busy',
  ARIA_EXPANDED: 'aria-expanded',
  ARIA_SELECTED: 'aria-selected',
  ARIA_CHECKED: 'aria-checked',
  ARIA_PRESSED: 'aria-pressed',
  ARIA_CURRENT: 'aria-current',
  
  // Common props
  ID: 'id',
  CLASS_NAME: 'className',
  STYLE: 'style',
  DISABLED: 'disabled',
  CHILDREN: 'children'
} as const

// CSS class name patterns for consistency
export const CSS_PATTERNS = {
  // Component base classes
  COMPONENT: 'keypix-{component}',
  COMPONENT_SIZE: 'keypix-{component}-{size}',
  COMPONENT_VARIANT: 'keypix-{component}-{variant}',
  COMPONENT_COLOR: 'keypix-{component}-{color}',
  
  // State classes
  DISABLED: 'keypix-disabled',
  LOADING: 'keypix-loading',
  ERROR: 'keypix-error',
  SUCCESS: 'keypix-success',
  WARNING: 'keypix-warning',
  
  // Layout classes
  FULL_WIDTH: 'keypix-w-full',
  FULL_HEIGHT: 'keypix-h-full',
  ROUNDED: 'keypix-rounded-full',
  ELEVATED: 'keypix-shadow-md',
  
  // Border classes
  BORDER_RADIUS: 'keypix-border-radius-{size}',
  BORDER_WIDTH: 'keypix-border-width-{width}',
  BORDER_COLOR: 'keypix-border-{color}',
  BORDERED: 'keypix-border',
  
  // Spacing classes
  PADDING: 'keypix-p-{size}',
  MARGIN: 'keypix-m-{size}',
  GAP: 'keypix-gap-{size}',
  
  // Flexbox classes
  FLEX: 'keypix-flex',
  FLEX_COL: 'keypix-flex-col',
  FLEX_ROW: 'keypix-flex-row',
  ITEMS_CENTER: 'keypix-items-center',
  JUSTIFY_CENTER: 'keypix-justify-center',
  
  // Position classes
  RELATIVE: 'keypix-relative',
  ABSOLUTE: 'keypix-absolute',
  FIXED: 'keypix-fixed',
  STICKY: 'keypix-sticky',
  
  // Text classes
  TEXT_CENTER: 'keypix-text-center',
  TEXT_LEFT: 'keypix-text-left',
  TEXT_RIGHT: 'keypix-text-right',
  FONT_BOLD: 'keypix-font-bold',
  FONT_MEDIUM: 'keypix-font-medium',
  
  // Animation classes
  ANIMATE_SPIN: 'keypix-animate-spin',
  ANIMATE_PULSE: 'keypix-animate-pulse',
  ANIMATE_BOUNCE: 'keypix-animate-bounce',
  TRANSITION: 'keypix-transition-all',
  
  // Interactive classes
  CURSOR_POINTER: 'keypix-cursor-pointer',
  CURSOR_DISABLED: 'keypix-cursor-not-allowed',
  HOVER_OPACITY: 'hover:keypix-opacity-80',
  FOCUS_RING: 'focus:keypix-ring-2',
  
  // Utility classes
  SR_ONLY: 'keypix-sr-only',
  OVERFLOW_HIDDEN: 'keypix-overflow-hidden',
  Z_INDEX: 'keypix-z-{index}'
} as const 