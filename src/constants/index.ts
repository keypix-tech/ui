// Constants for Keypix UI Library

// Component variants
export const BUTTON_VARIANTS = ['default', 'secondary', 'destructive', 'outline', 'ghost', 'link', 'success', 'warning', 'info'] as const

export const BUTTON_SIZES = ['xs', 'sm', 'md', 'lg', 'xl', 'icon'] as const

export const BADGE_VARIANTS = ['default', 'secondary', 'destructive', 'outline', 'success', 'warning', 'info'] as const

export const BADGE_SIZES = ['sm', 'md', 'lg'] as const

export const INPUT_SIZES = ['sm', 'md', 'lg'] as const

export const SPINNER_VARIANTS = ['primary', 'success', 'warning', 'error'] as const

export const SPINNER_TYPES = ['dots', 'pulse', 'bars', 'spinner'] as const

export const SPINNER_SIZES = ['xs', 'sm', 'md', 'lg', 'xl'] as const

export const ALERT_VARIANTS = ['default', 'destructive', 'success', 'warning', 'info'] as const

export const TIME_CHART_EVENT_TYPES = ['warning', 'error', 'info', 'success'] as const

// Theme constants
export const THEMES = ['light', 'dark', 'system'] as const

export const BREAKPOINTS = ['xs', 'sm', 'md', 'lg', 'xl', '2xl'] as const

export const GRID_COLS = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12] as const

// Animation constants
export const ANIMATION_TYPES = ['fade', 'slide', 'scale', 'rotate', 'bounce'] as const

export const ANIMATION_DURATIONS = {
  fast: 150,
  normal: 300,
  slow: 500,
  slower: 700
} as const

export const ANIMATION_EASINGS = {
  linear: 'linear',
  easeIn: 'ease-in',
  easeOut: 'ease-out',
  easeInOut: 'ease-in-out',
  bounce: 'cubic-bezier(0.68, -0.55, 0.265, 1.55)'
} as const

// Color constants
export const COLOR_SCHEMES = ['primary', 'secondary', 'success', 'warning', 'error', 'info'] as const

// Default values
export const DEFAULT_VALUES = {
  button: {
    variant: 'default',
    size: 'md',
    loading: false,
    fullWidth: false,
    disableOnLoading: true
  },
  badge: {
    variant: 'default',
    size: 'md',
    removable: false
  },
  input: {
    size: 'md',
    clearable: false,
    loading: false
  },
  spinner: {
    variant: 'primary',
    type: 'spinner',
    size: 'md'
  },
  alert: {
    variant: 'default'
  },
  timeChart: {
    zoom: 1,
    showSummary: true,
    showZoomControls: true,
    showFilterControls: true
  },
  dataTable: {
    loading: false,
    searchable: false,
    sortable: false,
    pagination: false,
    pageSize: 10
  }
} as const

// Z-index constants
export const Z_INDEX = {
  dropdown: 1000,
  sticky: 1020,
  fixed: 1030,
  modalBackdrop: 1040,
  modal: 1050,
  popover: 1060,
  tooltip: 1070,
  toast: 1080
} as const

// Spacing constants
export const SPACING = {
  xs: '0.25rem',
  sm: '0.5rem',
  md: '1rem',
  lg: '1.5rem',
  xl: '2rem',
  '2xl': '3rem',
  '3xl': '4rem'
} as const

// Border radius constants
export const BORDER_RADIUS = {
  none: '0',
  sm: '0.125rem',
  md: '0.25rem',
  lg: '0.5rem',
  xl: '0.75rem',
  '2xl': '1rem',
  full: '9999px'
} as const

// Font size constants
export const FONT_SIZES = {
  xs: '0.75rem',
  sm: '0.875rem',
  md: '1rem',
  lg: '1.125rem',
  xl: '1.25rem',
  '2xl': '1.5rem',
  '3xl': '1.875rem',
  '4xl': '2.25rem'
} as const

// Font weight constants
export const FONT_WEIGHTS = {
  thin: '100',
  extralight: '200',
  light: '300',
  normal: '400',
  medium: '500',
  semibold: '600',
  bold: '700',
  extrabold: '800',
  black: '900'
} as const

// Line height constants
export const LINE_HEIGHTS = {
  none: '1',
  tight: '1.25',
  snug: '1.375',
  normal: '1.5',
  relaxed: '1.625',
  loose: '2'
} as const

// Shadow constants
export const SHADOWS = {
  none: 'none',
  sm: '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
  md: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
  lg: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
  xl: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
  '2xl': '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
  inner: 'inset 0 2px 4px 0 rgba(0, 0, 0, 0.06)'
} as const

// Transition constants
export const TRANSITIONS = {
  none: 'none',
  all: 'all 150ms cubic-bezier(0.4, 0, 0.2, 1)',
  colors: 'color 150ms cubic-bezier(0.4, 0, 0.2, 1), background-color 150ms cubic-bezier(0.4, 0, 0.2, 1), border-color 150ms cubic-bezier(0.4, 0, 0.2, 1), text-decoration-color 150ms cubic-bezier(0.4, 0, 0.2, 1), fill 150ms cubic-bezier(0.4, 0, 0.2, 1), stroke 150ms cubic-bezier(0.4, 0, 0.2, 1)',
  opacity: 'opacity 150ms cubic-bezier(0.4, 0, 0.2, 1)',
  shadow: 'box-shadow 150ms cubic-bezier(0.4, 0, 0.2, 1)',
  transform: 'transform 150ms cubic-bezier(0.4, 0, 0.2, 1)'
} as const 