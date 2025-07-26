# Button

A versatile button component with multiple variants, sizes, and states. Supports loading states, icons, and full accessibility features.

## Import

```tsx
import { Button } from 'keypix-ui'
```

## Usage

### Basic Button

```tsx
<Button>Click me</Button>
```

### Button Variants

```tsx
<Button variant="default">Default</Button>
<Button variant="secondary">Secondary</Button>
<Button variant="destructive">Delete</Button>
<Button variant="outline">Outline</Button>
<Button variant="ghost">Ghost</Button>
<Button variant="link">Link</Button>
<Button variant="success">Success</Button>
<Button variant="warning">Warning</Button>
<Button variant="info">Info</Button>
```

### Button Sizes

```tsx
<Button size="xs">Extra Small</Button>
<Button size="sm">Small</Button>
<Button size="md">Medium</Button>
<Button size="lg">Large</Button>
<Button size="xl">Extra Large</Button>
<Button size="icon">
  <SettingsIcon />
</Button>
```

### Loading State

```tsx
<Button loading>Processing...</Button>
<Button loading loadingText="Saving...">Save</Button>
```

### With Icons

```tsx
<Button leftIcon={<DownloadIcon />}>Download</Button>
<Button rightIcon={<ArrowRightIcon />}>Next</Button>
<Button leftIcon={<DownloadIcon />} rightIcon={<ArrowRightIcon />}>
  Download & Continue
</Button>
```

### Disabled State

```tsx
<Button disabled>Disabled Button</Button>
<Button loading disabled>Loading & Disabled</Button>
```

### Full Width

```tsx
<Button fullWidth>Full Width Button</Button>
```

### Accessibility

```tsx
<Button 
  aria-label="Download file"
  aria-describedby="download-description"
>
  Download
</Button>
<div id="download-description" className="keypix-sr-only">
  Downloads the current file in PDF format
</div>
```

## API Reference

### Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `variant` | `'default' \| 'secondary' \| 'destructive' \| 'outline' \| 'ghost' \| 'link' \| 'success' \| 'warning' \| 'info'` | `'default'` | The visual style variant of the button |
| `size` | `'xs' \| 'sm' \| 'md' \| 'lg' \| 'xl' \| 'icon'` | `'md'` | The size of the button |
| `loading` | `boolean` | `false` | Whether the button is in a loading state |
| `loadingText` | `string` | - | Text to show when loading |
| `leftIcon` | `React.ReactNode` | - | Icon to show on the left side |
| `rightIcon` | `React.ReactNode` | - | Icon to show on the right side |
| `fullWidth` | `boolean` | `false` | Whether the button should take full width |
| `disabled` | `boolean` | `false` | Whether the button is disabled |
| `disableOnLoading` | `boolean` | `true` | Whether to disable button when loading |
| `ariaLabel` | `string` | - | Accessible label for screen readers |
| `ariaDescription` | `string` | - | Description for screen readers |
| `ariaLive` | `'off' \| 'polite' \| 'assertive'` | - | Live region for dynamic content |

### Events

| Event | Type | Description |
|-------|------|-------------|
| `onClick` | `(event: React.MouseEvent<HTMLButtonElement>) => void` | Fired when the button is clicked |

### CSS Classes

The Button component uses the following CSS classes:

- `.keypix-button` - Base button styles
- `.keypix-button-{variant}` - Variant-specific styles
- `.keypix-button-{size}` - Size-specific styles
- `.keypix-button:disabled` - Disabled state styles
- `.keypix-button:focus-visible` - Focus styles

## Examples

### Form Submit Button

```tsx
function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    try {
      await submitForm()
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      {/* form fields */}
      <Button 
        type="submit" 
        loading={isSubmitting}
        loadingText="Sending..."
        disabled={isSubmitting}
      >
        Send Message
      </Button>
    </form>
  )
}
```

### Action Buttons

```tsx
function ActionButtons() {
  return (
    <div className="keypix-flex keypix-gap-2">
      <Button variant="outline" onClick={handleCancel}>
        Cancel
      </Button>
      <Button variant="destructive" onClick={handleDelete}>
        Delete
      </Button>
      <Button onClick={handleSave}>
        Save Changes
      </Button>
    </div>
  )
}
```

### Icon Button

```tsx
function IconButtons() {
  return (
    <div className="keypix-flex keypix-gap-2">
      <Button size="icon" aria-label="Settings">
        <SettingsIcon />
      </Button>
      <Button size="icon" aria-label="Edit">
        <EditIcon />
      </Button>
      <Button size="icon" variant="destructive" aria-label="Delete">
        <TrashIcon />
      </Button>
    </div>
  )
}
```

### Loading States

```tsx
function LoadingExamples() {
  return (
    <div className="keypix-space-y-4">
      <Button loading>Loading...</Button>
      <Button loading loadingText="Processing...">Submit</Button>
      <Button loading leftIcon={<SpinnerIcon />}>Loading with Icon</Button>
    </div>
  )
}
```

## Accessibility

The Button component follows accessibility best practices:

- **Keyboard Navigation**: Can be focused and activated with keyboard
- **Screen Readers**: Proper ARIA attributes and labels
- **Loading States**: `aria-busy` attribute when loading
- **Disabled States**: Proper `aria-disabled` attribute
- **Focus Management**: Visible focus indicators
- **Live Regions**: Support for dynamic content announcements

### Best Practices

1. **Always provide accessible labels** for icon-only buttons
2. **Use descriptive text** for button content
3. **Provide loading feedback** for async actions
4. **Maintain focus order** in your application
5. **Test with screen readers** to ensure accessibility

## Customization

### Custom Styling

```tsx
// Using className
<Button className="keypix-bg-red-500 hover:keypix-bg-red-600">
  Custom Button
</Button>

// Using CSS variables
<Button style={{ '--primary': '220 13% 91%' }}>
  Custom Primary
</Button>
```

### Custom Variants

```css
/* Custom button variant */
.keypix-button-custom {
  background: linear-gradient(45deg, #ff6b6b, #4ecdc4);
  color: white;
  border: none;
}

.keypix-button-custom:hover {
  background: linear-gradient(45deg, #ff5252, #26a69a);
}
```

```tsx
<Button className="keypix-button-custom">
  Custom Gradient Button
</Button>
```

## Related Components

- [Input](./input.md) - Form input component
- [Card](./card.md) - Content container
- [Badge](./badge.md) - Status indicator
- [Spinner](./spinner.md) - Loading indicator 