// Accessibility utilities for Keypix UI Library
// Provides comprehensive ARIA attributes and accessibility helpers

import * as React from 'react'
import { generateId } from './unified-utils'

// ============================================================================
// ARIA ATTRIBUTES
// ============================================================================

export interface AriaAttributes {
  // Basic ARIA attributes
  'aria-label'?: string
  'aria-labelledby'?: string
  'aria-describedby'?: string
  'aria-description'?: string
  'aria-hidden'?: boolean
  'aria-disabled'?: boolean
  'aria-readonly'?: boolean
  'aria-required'?: boolean
  'aria-invalid'?: boolean
  'aria-errormessage'?: string
  
  // Live regions
  'aria-live'?: 'off' | 'polite' | 'assertive'
  'aria-atomic'?: boolean
  'aria-relevant'?: 'additions' | 'additions removals' | 'additions text' | 'all' | 'removals' | 'removals additions' | 'removals text' | 'text' | 'text additions' | 'text removals'
  'aria-busy'?: boolean
  
  // States and properties
  'aria-expanded'?: boolean
  'aria-selected'?: boolean
  'aria-checked'?: boolean | 'mixed'
  'aria-pressed'?: boolean
  'aria-current'?: boolean | 'page' | 'step' | 'location' | 'date' | 'time'
  'aria-haspopup'?: boolean | 'menu' | 'listbox' | 'tree' | 'grid' | 'dialog'
  'aria-controls'?: string
  'aria-owns'?: string
  'aria-activedescendant'?: string
  
  // Navigation
  'aria-orientation'?: 'horizontal' | 'vertical'
  'aria-sort'?: 'ascending' | 'descending' | 'none' | 'other'
  'aria-valuemin'?: number
  'aria-valuemax'?: number
  'aria-valuenow'?: number
  'aria-valuetext'?: string
  
  // Drag and drop
  'aria-dropeffect'?: 'copy' | 'execute' | 'link' | 'move' | 'none' | 'popup'
  'aria-grabbed'?: boolean
  
  // Relationships
  'aria-flowto'?: string
  'aria-details'?: string
  'aria-keyshortcuts'?: string
  'aria-roledescription'?: string
  
  // Additional ARIA attributes
  'aria-multiselectable'?: boolean
  'aria-posinset'?: number
  'aria-setsize'?: number
  'aria-level'?: number
  'aria-scope'?: 'row' | 'col' | 'rowgroup' | 'colgroup'
  
  // Role
  role?: string
}

// ============================================================================
// ROLE DEFINITIONS
// ============================================================================

export type AriaRole = 
  // Document structure roles
  | 'article' | 'banner' | 'complementary' | 'contentinfo' | 'form' | 'main' | 'navigation' | 'region' | 'search' | 'section'
  // Widget roles
  | 'button' | 'checkbox' | 'gridcell' | 'link' | 'menuitem' | 'menuitemcheckbox' | 'menuitemradio' | 'option' | 'progressbar' | 'radio' | 'scrollbar' | 'searchbox' | 'slider' | 'spinbutton' | 'switch' | 'tab' | 'tabpanel' | 'textbox' | 'treeitem'
  // Window roles
  | 'alertdialog' | 'dialog' | 'tooltip'
  // Abstract roles
  | 'command' | 'composite' | 'input' | 'landmark' | 'range' | 'roletype' | 'sectionhead' | 'select' | 'structure' | 'widget' | 'window'

// ============================================================================
// ACCESSIBILITY UTILITIES
// ============================================================================

/**
 * Create comprehensive accessibility attributes
 */
export function createAriaAttributes(options: {
  // Basic attributes
  label?: string
  labelledby?: string
  describedby?: string
  description?: string
  hidden?: boolean
  disabled?: boolean
  readonly?: boolean
  required?: boolean
  invalid?: boolean
  errorMessage?: string
  
  // Live regions
  live?: 'off' | 'polite' | 'assertive'
  atomic?: boolean
  relevant?: string
  busy?: boolean
  
  // States
  expanded?: boolean
  selected?: boolean
  checked?: boolean | 'mixed'
  pressed?: boolean
  current?: boolean | 'page' | 'step' | 'location' | 'date' | 'time'
  hasPopup?: boolean | 'menu' | 'listbox' | 'tree' | 'grid' | 'dialog'
  controls?: string
  owns?: string
  activeDescendant?: string
  
  // Navigation
  orientation?: 'horizontal' | 'vertical'
  sort?: 'ascending' | 'descending' | 'none' | 'other'
  valueMin?: number
  valueMax?: number
  valueNow?: number
  valueText?: string
  
  // Drag and drop
  dropEffect?: 'copy' | 'execute' | 'link' | 'move' | 'none' | 'popup'
  grabbed?: boolean
  
  // Relationships
  flowTo?: string
  details?: string
  keyShortcuts?: string
  roleDescription?: string
}): AriaAttributes {
  const aria: AriaAttributes = {}

  // Basic attributes
  if (options.label) aria['aria-label'] = options.label
  if (options.labelledby) aria['aria-labelledby'] = options.labelledby
  if (options.describedby) aria['aria-describedby'] = options.describedby
  if (options.description) aria['aria-description'] = options.description
  if (options.hidden !== undefined) aria['aria-hidden'] = options.hidden
  if (options.disabled !== undefined) aria['aria-disabled'] = options.disabled
  if (options.readonly !== undefined) aria['aria-readonly'] = options.readonly
  if (options.required !== undefined) aria['aria-required'] = options.required
  if (options.invalid !== undefined) aria['aria-invalid'] = options.invalid
  if (options.errorMessage) aria['aria-errormessage'] = options.errorMessage

  // Live regions
  if (options.live) aria['aria-live'] = options.live
  if (options.atomic !== undefined) aria['aria-atomic'] = options.atomic
  if (options.relevant) aria['aria-relevant'] = options.relevant as any
  if (options.busy !== undefined) aria['aria-busy'] = options.busy

  // States
  if (options.expanded !== undefined) aria['aria-expanded'] = options.expanded
  if (options.selected !== undefined) aria['aria-selected'] = options.selected
  if (options.checked !== undefined) aria['aria-checked'] = options.checked
  if (options.pressed !== undefined) aria['aria-pressed'] = options.pressed
  if (options.current !== undefined) aria['aria-current'] = options.current
  if (options.hasPopup !== undefined) aria['aria-haspopup'] = options.hasPopup
  if (options.controls) aria['aria-controls'] = options.controls
  if (options.owns) aria['aria-owns'] = options.owns
  if (options.activeDescendant) aria['aria-activedescendant'] = options.activeDescendant

  // Navigation
  if (options.orientation) aria['aria-orientation'] = options.orientation
  if (options.sort) aria['aria-sort'] = options.sort
  if (options.valueMin !== undefined) aria['aria-valuemin'] = options.valueMin
  if (options.valueMax !== undefined) aria['aria-valuemax'] = options.valueMax
  if (options.valueNow !== undefined) aria['aria-valuenow'] = options.valueNow
  if (options.valueText) aria['aria-valuetext'] = options.valueText

  // Drag and drop
  if (options.dropEffect) aria['aria-dropeffect'] = options.dropEffect
  if (options.grabbed !== undefined) aria['aria-grabbed'] = options.grabbed

  // Relationships
  if (options.flowTo) aria['aria-flowto'] = options.flowTo
  if (options.details) aria['aria-details'] = options.details
  if (options.keyShortcuts) aria['aria-keyshortcuts'] = options.keyShortcuts
  if (options.roleDescription) aria['aria-roledescription'] = options.roleDescription

  return aria
}

/**
 * Create accessible label with proper relationships
 */
export function createAccessibleLabel(options: {
  label?: string
  description?: string
  error?: string
  required?: boolean
  id?: string
  labelId?: string
  descriptionId?: string
  errorId?: string
}) {
  const {
    label,
    description,
    error,
    required,
    id = generateId('field'),
    labelId = generateId('label'),
    descriptionId = generateId('description'),
    errorId = generateId('error')
  } = options

  const aria: AriaAttributes = {
    'aria-labelledby': labelId,
    'aria-describedby': [descriptionId, errorId].filter(Boolean).join(' ') || undefined
  }

  if (required) aria['aria-required'] = true
  if (error) aria['aria-invalid'] = true

  return {
    id,
    labelId,
    descriptionId,
    errorId,
    aria,
    labelProps: label ? {
      id: labelId,
      htmlFor: id
    } : undefined,
    descriptionProps: description ? {
      id: descriptionId
    } : undefined,
    errorProps: error ? {
      id: errorId,
      role: 'alert',
      'aria-live': 'polite'
    } : undefined
  }
}

/**
 * Create accessible button attributes
 */
export function createButtonAria(options: {
  label?: string
  description?: string
  pressed?: boolean
  expanded?: boolean
  hasPopup?: boolean | 'menu' | 'listbox' | 'tree' | 'grid' | 'dialog'
  controls?: string
  disabled?: boolean
  loading?: boolean
  busy?: boolean
}) {
  const {
    label,
    description,
    pressed,
    expanded,
    hasPopup,
    controls,
    disabled,
    loading,
    busy
  } = options

  const aria: AriaAttributes = {
    role: 'button'
  }

  if (label) aria['aria-label'] = label
  if (description) aria['aria-describedby'] = generateId('description')
  if (pressed !== undefined) aria['aria-pressed'] = pressed
  if (expanded !== undefined) aria['aria-expanded'] = expanded
  if (hasPopup !== undefined) aria['aria-haspopup'] = hasPopup
  if (controls) aria['aria-controls'] = controls
  if (disabled) aria['aria-disabled'] = true
  if (loading || busy) aria['aria-busy'] = true

  return aria
}

/**
 * Create accessible input attributes
 */
export function createInputAria(options: {
  label?: string
  description?: string
  error?: string
  required?: boolean
  invalid?: boolean
  readonly?: boolean
  disabled?: boolean
  placeholder?: string
  autocomplete?: string
  type?: string
}) {
  const {
    label,
    description,
    error,
    required,
    invalid,
    readonly,
    disabled,
    placeholder,
    autocomplete,
    type
  } = options

  const aria: AriaAttributes = {}

  if (label) aria['aria-label'] = label
  if (description) aria['aria-describedby'] = generateId('description')
  if (error) aria['aria-errormessage'] = generateId('error')
  if (required) aria['aria-required'] = true
  if (invalid || error) aria['aria-invalid'] = true
  if (readonly) aria['aria-readonly'] = true
  if (disabled) aria['aria-disabled'] = true

  // Set appropriate role based on type
  if (type === 'search') {
    aria.role = 'searchbox'
  } else if (type === 'number') {
    aria.role = 'spinbutton'
  } else if (type === 'range') {
    aria.role = 'slider'
  } else {
    aria.role = 'textbox'
  }

  return aria
}

/**
 * Create accessible list attributes
 */
export function createListAria(options: {
  label?: string
  description?: string
  orientation?: 'horizontal' | 'vertical'
  multiselectable?: boolean
  required?: boolean
  disabled?: boolean
}) {
  const {
    label,
    description,
    orientation,
    multiselectable,
    required,
    disabled
  } = options

  const aria: AriaAttributes = {
    role: 'listbox'
  }

  if (label) aria['aria-label'] = label
  if (description) aria['aria-describedby'] = generateId('description')
  if (orientation) aria['aria-orientation'] = orientation
  if (multiselectable !== undefined) aria['aria-multiselectable'] = multiselectable
  if (required) aria['aria-required'] = true
  if (disabled) aria['aria-disabled'] = true

  return aria
}

/**
 * Create accessible list item attributes
 */
export function createListItemAria(options: {
  selected?: boolean
  disabled?: boolean
  posinset?: number
  setsize?: number
  level?: number
}) {
  const {
    selected,
    disabled,
    posinset,
    setsize,
    level
  } = options

  const aria: AriaAttributes = {
    role: 'option'
  }

  if (selected !== undefined) aria['aria-selected'] = selected
  if (disabled) aria['aria-disabled'] = true
  if (posinset !== undefined) aria['aria-posinset'] = posinset
  if (setsize !== undefined) aria['aria-setsize'] = setsize
  if (level !== undefined) aria['aria-level'] = level

  return aria
}

/**
 * Create accessible table attributes
 */
export function createTableAria(options: {
  label?: string
  description?: string
  sortable?: boolean
  sortDirection?: 'ascending' | 'descending' | 'none' | 'other'
  busy?: boolean
}) {
  const {
    label,
    description,
    sortable,
    sortDirection,
    busy
  } = options

  const aria: AriaAttributes = {
    role: 'table'
  }

  if (label) aria['aria-label'] = label
  if (description) aria['aria-describedby'] = generateId('description')
  if (sortable) aria['aria-sort'] = sortDirection || 'none'
  if (busy) aria['aria-busy'] = true

  return aria
}

/**
 * Create accessible table header attributes
 */
export function createTableHeaderAria(options: {
  sortable?: boolean
  sortDirection?: 'ascending' | 'descending' | 'none' | 'other'
  selected?: boolean
  scope?: 'row' | 'col' | 'rowgroup' | 'colgroup'
}) {
  const {
    sortable,
    sortDirection,
    selected,
    scope
  } = options

  const aria: AriaAttributes = {
    role: 'columnheader'
  }

  if (sortable) aria['aria-sort'] = sortDirection || 'none'
  if (selected !== undefined) aria['aria-selected'] = selected
  if (scope) aria['aria-scope'] = scope

  return aria
}

/**
 * Create accessible dialog attributes
 */
export function createDialogAria(options: {
  label?: string
  description?: string
  modal?: boolean
  busy?: boolean
  expanded?: boolean
}) {
  const {
    label,
    description,
    modal,
    busy,
    expanded
  } = options

  const aria: AriaAttributes = {
    role: modal ? 'alertdialog' : 'dialog'
  }

  if (label) aria['aria-label'] = label
  if (description) aria['aria-describedby'] = generateId('description')
  if (busy) aria['aria-busy'] = true
  if (expanded !== undefined) aria['aria-expanded'] = expanded

  return aria
}

/**
 * Create accessible progress attributes
 */
export function createProgressAria(options: {
  label?: string
  description?: string
  value?: number
  min?: number
  max?: number
  valueText?: string
  busy?: boolean
}) {
  const {
    label,
    description,
    value,
    min,
    max,
    valueText,
    busy
  } = options

  const aria: AriaAttributes = {
    role: 'progressbar'
  }

  if (label) aria['aria-label'] = label
  if (description) aria['aria-describedby'] = generateId('description')
  if (value !== undefined) aria['aria-valuenow'] = value
  if (min !== undefined) aria['aria-valuemin'] = min
  if (max !== undefined) aria['aria-valuemax'] = max
  if (valueText) aria['aria-valuetext'] = valueText
  if (busy) aria['aria-busy'] = true

  return aria
}

/**
 * Create accessible status attributes
 */
export function createStatusAria(options: {
  label?: string
  description?: string
  live?: 'off' | 'polite' | 'assertive'
  atomic?: boolean
  busy?: boolean
}) {
  const {
    label,
    description,
    live = 'polite',
    atomic = true,
    busy
  } = options

  const aria: AriaAttributes = {
    role: 'status',
    'aria-live': live,
    'aria-atomic': atomic
  }

  if (label) aria['aria-label'] = label
  if (description) aria['aria-describedby'] = generateId('description')
  if (busy) aria['aria-busy'] = true

  return aria
}

/**
 * Create accessible alert attributes
 */
export function createAlertAria(options: {
  label?: string
  description?: string
  atomic?: boolean
  busy?: boolean
}) {
  const {
    label,
    description,
    atomic = true,
    busy
  } = options

  const aria: AriaAttributes = {
    role: 'alert',
    'aria-live': 'assertive',
    'aria-atomic': atomic
  }

  if (label) aria['aria-label'] = label
  if (description) aria['aria-describedby'] = generateId('description')
  if (busy) aria['aria-busy'] = true

  return aria
}

/**
 * Create accessible tooltip attributes
 */
export function createTooltipAria(options: {
  label?: string
  description?: string
  controls?: string
}) {
  const {
    label,
    description,
    controls
  } = options

  const aria: AriaAttributes = {
    role: 'tooltip'
  }

  if (label) aria['aria-label'] = label
  if (description) aria['aria-describedby'] = generateId('description')
  if (controls) aria['aria-controls'] = controls

  return aria
}

// ============================================================================
// KEYBOARD NAVIGATION
// ============================================================================

/**
 * Handle keyboard navigation for lists
 */
export function handleListKeyboard(
  event: React.KeyboardEvent,
  options: {
    currentIndex: number
    totalItems: number
    onSelect: (index: number) => void
    onNavigate?: (index: number) => void
    orientation?: 'horizontal' | 'vertical'
    multiselectable?: boolean
  }
) {
  const {
    currentIndex,
    totalItems,
    onSelect,
    onNavigate,
    orientation = 'vertical',
    multiselectable = false
  } = options

  const isHorizontal = orientation === 'horizontal'

  switch (event.key) {
    case 'ArrowDown':
    case isHorizontal ? 'ArrowRight' : 'ArrowDown':
      event.preventDefault()
      const nextIndex = (currentIndex + 1) % totalItems
      onNavigate?.(nextIndex)
      break

    case 'ArrowUp':
    case isHorizontal ? 'ArrowLeft' : 'ArrowUp':
      event.preventDefault()
      const prevIndex = currentIndex === 0 ? totalItems - 1 : currentIndex - 1
      onNavigate?.(prevIndex)
      break

    case 'Home':
      event.preventDefault()
      onNavigate?.(0)
      break

    case 'End':
      event.preventDefault()
      onNavigate?.(totalItems - 1)
      break

    case 'Enter':
    case ' ':
      event.preventDefault()
      onSelect(currentIndex)
      break

    case 'Escape':
      event.preventDefault()
      // Handle escape action
      break
  }
}

/**
 * Handle keyboard navigation for modals
 */
export function handleModalKeyboard(
  event: React.KeyboardEvent,
  options: {
    onClose: () => void
    onConfirm?: () => void
    closeOnEscape?: boolean
  }
) {
  const { onClose, onConfirm, closeOnEscape = true } = options

  switch (event.key) {
    case 'Escape':
      if (closeOnEscape) {
        event.preventDefault()
        onClose()
      }
      break

    case 'Enter':
      if (onConfirm) {
        event.preventDefault()
        onConfirm()
      }
      break
  }
}

// ============================================================================
// FOCUS MANAGEMENT
// ============================================================================

/**
 * Trap focus within a container
 */
export function createFocusTrap(containerRef: React.RefObject<HTMLElement>) {
  const handleKeyDown = (event: KeyboardEvent) => {
    if (event.key !== 'Tab') return

    const container = containerRef.current
    if (!container) return

    const focusableElements = container.querySelectorAll(
      'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
    )

    const firstElement = focusableElements[0] as HTMLElement
    const lastElement = focusableElements[focusableElements.length - 1] as HTMLElement

    if (event.shiftKey) {
      if (document.activeElement === firstElement) {
        event.preventDefault()
        lastElement.focus()
      }
    } else {
      if (document.activeElement === lastElement) {
        event.preventDefault()
        firstElement.focus()
      }
    }
  }

  return handleKeyDown
}

/**
 * Focus first focusable element in container
 */
export function focusFirstElement(containerRef: React.RefObject<HTMLElement>) {
  const container = containerRef.current
  if (!container) return

  const focusableElements = container.querySelectorAll(
    'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
  )

  const firstElement = focusableElements[0] as HTMLElement
  if (firstElement) {
    firstElement.focus()
  }
}

/**
 * Focus last focusable element in container
 */
export function focusLastElement(containerRef: React.RefObject<HTMLElement>) {
  const container = containerRef.current
  if (!container) return

  const focusableElements = container.querySelectorAll(
    'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
  )

  const lastElement = focusableElements[focusableElements.length - 1] as HTMLElement
  if (lastElement) {
    lastElement.focus()
  }
}

// ============================================================================
// SCREEN READER UTILITIES
// ============================================================================

/**
 * Announce message to screen readers
 */
export function announceToScreenReader(message: string, priority: 'polite' | 'assertive' = 'polite') {
  const announcement = document.createElement('div')
  announcement.setAttribute('aria-live', priority)
  announcement.setAttribute('aria-atomic', 'true')
  announcement.style.position = 'absolute'
  announcement.style.left = '-10000px'
  announcement.style.width = '1px'
  announcement.style.height = '1px'
  announcement.style.overflow = 'hidden'

  document.body.appendChild(announcement)

  // Use setTimeout to ensure the element is in the DOM
  setTimeout(() => {
    announcement.textContent = message
  }, 100)

  // Remove the element after announcement
  setTimeout(() => {
    document.body.removeChild(announcement)
  }, 1000)
}

/**
 * Create screen reader only text
 */
export function createScreenReaderText(text: string): React.ReactElement {
  return React.createElement('span', {
    style: {
      position: 'absolute',
      width: '1px',
      height: '1px',
      padding: 0,
      margin: '-1px',
      overflow: 'hidden',
      clip: 'rect(0, 0, 0, 0)',
      whiteSpace: 'nowrap',
      border: 0
    }
  }, text)
}

// ============================================================================
// VALIDATION HELPERS
// ============================================================================

/**
 * Validate accessibility attributes
 */
export function validateAriaAttributes(aria: AriaAttributes): string[] {
  const errors: string[] = []

  // Check for conflicting attributes
  if (aria['aria-checked'] !== undefined && aria['aria-pressed'] !== undefined) {
    errors.push('aria-checked and aria-pressed cannot be used together')
  }

  if (aria['aria-expanded'] !== undefined && aria['aria-selected'] !== undefined) {
    errors.push('aria-expanded and aria-selected cannot be used together')
  }

  // Check for required attributes
  if (aria.role === 'progressbar') {
    if (aria['aria-valuenow'] === undefined) {
      errors.push('aria-valuenow is required for progressbar role')
    }
  }

  if (aria.role === 'slider') {
    if (aria['aria-valuemin'] === undefined || aria['aria-valuemax'] === undefined) {
      errors.push('aria-valuemin and aria-valuemax are required for slider role')
    }
  }

  return errors
}

/**
 * Generate accessibility report
 */
export function generateAccessibilityReport(element: HTMLElement): {
  issues: string[]
  warnings: string[]
  suggestions: string[]
} {
  const issues: string[] = []
  const warnings: string[] = []
  const suggestions: string[] = []

  // Check for missing alt text on images
  const images = element.querySelectorAll('img')
  images.forEach((img, index) => {
    if (!img.alt && !img.getAttribute('aria-label')) {
      issues.push(`Image ${index + 1} is missing alt text`)
    }
  })

  // Check for missing labels on form controls
  const formControls = element.querySelectorAll('input, select, textarea')
  formControls.forEach((control, index) => {
    const hasLabel = control.getAttribute('aria-label') || 
                    control.getAttribute('aria-labelledby') ||
                    control.id && element.querySelector(`label[for="${control.id}"]`)
    
    if (!hasLabel) {
      issues.push(`Form control ${index + 1} is missing label`)
    }
  })

  // Check for proper heading structure
  const headings = element.querySelectorAll('h1, h2, h3, h4, h5, h6')
  let previousLevel = 0
  headings.forEach((heading, index) => {
    const level = parseInt(heading.tagName.charAt(1))
    if (level > previousLevel + 1) {
      warnings.push(`Heading structure: h${level} follows h${previousLevel} (skipped levels)`)
    }
    previousLevel = level
  })

  // Check for sufficient color contrast (basic check)
  const textElements = element.querySelectorAll('p, span, div, h1, h2, h3, h4, h5, h6')
  textElements.forEach((el, index) => {
    const style = window.getComputedStyle(el)
    const color = style.color
    const backgroundColor = style.backgroundColor
    
    if (color === backgroundColor) {
      warnings.push(`Element ${index + 1} may have insufficient color contrast`)
    }
  })

  return { issues, warnings, suggestions }
} 