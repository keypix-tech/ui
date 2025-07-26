# 🎮 Interactive Playground

Test and experiment with KeyPix UI components in real-time.

## Live Demo

<div id="playground-root">
  <div class="keypix-p-8 keypix-bg-background keypix-min-h-screen">
    <div class="keypix-max-w-6xl keypix-mx-auto">
      <h1 class="keypix-text-3xl keypix-font-bold keypix-mb-8">KeyPix UI Playground</h1>
      
      <!-- Component Selector -->
      <div class="keypix-mb-8">
        <h2 class="keypix-text-xl keypix-font-semibold keypix-mb-4">Choose Component</h2>
        <div class="keypix-flex keypix-gap-2 keypix-flex-wrap">
          <button class="keypix-px-4 keypix-py-2 keypix-bg-primary keypix-text-primary-foreground keypix-rounded keypix-text-sm">Button</button>
          <button class="keypix-px-4 keypix-py-2 keypix-bg-secondary keypix-text-secondary-foreground keypix-rounded keypix-text-sm">Input</button>
          <button class="keypix-px-4 keypix-py-2 keypix-bg-secondary keypix-text-secondary-foreground keypix-rounded keypix-text-sm">Card</button>
          <button class="keypix-px-4 keypix-py-2 keypix-bg-secondary keypix-text-secondary-foreground keypix-rounded keypix-text-sm">Badge</button>
          <button class="keypix-px-4 keypix-py-2 keypix-bg-secondary keypix-text-secondary-foreground keypix-rounded keypix-text-sm">Avatar</button>
        </div>
      </div>

      <!-- Controls Panel -->
      <div class="keypix-grid keypix-grid-cols-1 lg:keypix-grid-cols-3 keypix-gap-8">
        <div class="lg:keypix-col-span-1">
          <div class="keypix-bg-card keypix-border keypix-rounded-lg keypix-p-6">
            <h3 class="keypix-text-lg keypix-font-semibold keypix-mb-4">Controls</h3>
            
            <!-- Button Controls -->
            <div class="keypix-space-y-4">
              <div>
                <label class="keypix-block keypix-text-sm keypix-font-medium keypix-mb-2">Variant</label>
                <select class="keypix-w-full keypix-p-2 keypix-border keypix-rounded keypix-bg-background">
                  <option value="default">Default</option>
                  <option value="secondary">Secondary</option>
                  <option value="destructive">Destructive</option>
                  <option value="outline">Outline</option>
                  <option value="ghost">Ghost</option>
                  <option value="link">Link</option>
                  <option value="success">Success</option>
                  <option value="warning">Warning</option>
                  <option value="info">Info</option>
                </select>
              </div>

              <div>
                <label class="keypix-block keypix-text-sm keypix-font-medium keypix-mb-2">Size</label>
                <select class="keypix-w-full keypix-p-2 keypix-border keypix-rounded keypix-bg-background">
                  <option value="xs">Extra Small</option>
                  <option value="sm">Small</option>
                  <option value="md" selected>Medium</option>
                  <option value="lg">Large</option>
                  <option value="xl">Extra Large</option>
                  <option value="icon">Icon</option>
                </select>
              </div>

              <div class="keypix-flex keypix-items-center keypix-gap-2">
                <input type="checkbox" id="loading" class="keypix-rounded">
                <label for="loading" class="keypix-text-sm">Loading</label>
              </div>

              <div class="keypix-flex keypix-items-center keypix-gap-2">
                <input type="checkbox" id="disabled" class="keypix-rounded">
                <label for="disabled" class="keypix-text-sm">Disabled</label>
              </div>

              <div class="keypix-flex keypix-items-center keypix-gap-2">
                <input type="checkbox" id="fullWidth" class="keypix-rounded">
                <label for="fullWidth" class="keypix-text-sm">Full Width</label>
              </div>

              <div>
                <label class="keypix-block keypix-text-sm keypix-font-medium keypix-mb-2">Text</label>
                <input type="text" value="Click me" class="keypix-w-full keypix-p-2 keypix-border keypix-rounded keypix-bg-background">
              </div>
            </div>
          </div>
        </div>

        <!-- Preview Area -->
        <div class="lg:keypix-col-span-2">
          <div class="keypix-bg-card keypix-border keypix-rounded-lg keypix-p-6">
            <h3 class="keypix-text-lg keypix-font-semibold keypix-mb-4">Preview</h3>
            <div class="keypix-bg-background keypix-border keypix-rounded keypix-p-8 keypix-min-h-64 keypix-flex keypix-items-center keypix-justify-center">
              <button class="keypix-button keypix-button-default keypix-button-md">
                Click me
              </button>
            </div>
          </div>
        </div>
      </div>

      <!-- Code Output -->
      <div class="keypix-mt-8">
        <div class="keypix-bg-card keypix-border keypix-rounded-lg keypix-p-6">
          <h3 class="keypix-text-lg keypix-font-semibold keypix-mb-4">Code</h3>
          <pre class="keypix-bg-muted keypix-p-4 keypix-rounded keypix-text-sm keypix-overflow-x-auto"><code>&lt;Button variant="default" size="md"&gt;
  Click me
&lt;/Button&gt;</code></pre>
        </div>
      </div>
    </div>
  </div>
</div>

## Component Examples

### Button Playground

```tsx
import { Button } from 'keypix-ui'

// Interactive button with all variants
function ButtonPlayground() {
  const [variant, setVariant] = useState('default')
  const [size, setSize] = useState('md')
  const [loading, setLoading] = useState(false)
  const [disabled, setDisabled] = useState(false)
  const [text, setText] = useState('Click me')

  return (
    <div className="keypix-space-y-6">
      {/* Controls */}
      <div className="keypix-grid keypix-grid-cols-2 md:keypix-grid-cols-4 keypix-gap-4">
        <div>
          <label className="keypix-block keypix-text-sm keypix-font-medium keypix-mb-2">
            Variant
          </label>
          <select 
            value={variant} 
            onChange={(e) => setVariant(e.target.value)}
            className="keypix-w-full keypix-p-2 keypix-border keypix-rounded"
          >
            <option value="default">Default</option>
            <option value="secondary">Secondary</option>
            <option value="destructive">Destructive</option>
            <option value="outline">Outline</option>
            <option value="ghost">Ghost</option>
            <option value="link">Link</option>
            <option value="success">Success</option>
            <option value="warning">Warning</option>
            <option value="info">Info</option>
          </select>
        </div>

        <div>
          <label className="keypix-block keypix-text-sm keypix-font-medium keypix-mb-2">
            Size
          </label>
          <select 
            value={size} 
            onChange={(e) => setSize(e.target.value)}
            className="keypix-w-full keypix-p-2 keypix-border keypix-rounded"
          >
            <option value="xs">Extra Small</option>
            <option value="sm">Small</option>
            <option value="md">Medium</option>
            <option value="lg">Large</option>
            <option value="xl">Extra Large</option>
            <option value="icon">Icon</option>
          </select>
        </div>

        <div className="keypix-flex keypix-items-center keypix-gap-2">
          <input 
            type="checkbox" 
            id="loading" 
            checked={loading}
            onChange={(e) => setLoading(e.target.checked)}
            className="keypix-rounded"
          />
          <label htmlFor="loading" className="keypix-text-sm">Loading</label>
        </div>

        <div className="keypix-flex keypix-items-center keypix-gap-2">
          <input 
            type="checkbox" 
            id="disabled" 
            checked={disabled}
            onChange={(e) => setDisabled(e.target.checked)}
            className="keypix-rounded"
          />
          <label htmlFor="disabled" className="keypix-text-sm">Disabled</label>
        </div>
      </div>

      {/* Preview */}
      <div className="keypix-bg-muted keypix-p-8 keypix-rounded-lg keypix-flex keypix-items-center keypix-justify-center">
        <Button 
          variant={variant as any}
          size={size as any}
          loading={loading}
          disabled={disabled}
          onClick={() => alert('Button clicked!')}
        >
          {text}
        </Button>
      </div>

      {/* Code Output */}
      <div className="keypix-bg-card keypix-border keypix-rounded-lg keypix-p-4">
        <h4 className="keypix-text-sm keypix-font-medium keypix-mb-2">Generated Code:</h4>
        <pre className="keypix-text-xs keypix-overflow-x-auto">
          <code>{`<Button 
  variant="${variant}"
  size="${size}"
  ${loading ? 'loading' : ''}
  ${disabled ? 'disabled' : ''}
  onClick={() => alert('Button clicked!')}
>
  ${text}
</Button>`}</code>
        </pre>
      </div>
    </div>
  )
}
```

### Input Playground

```tsx
import { Input } from 'keypix-ui'

function InputPlayground() {
  const [value, setValue] = useState('')
  const [label, setLabel] = useState('Email')
  const [placeholder, setPlaceholder] = useState('Enter your email')
  const [error, setError] = useState(false)
  const [helperText, setHelperText] = useState('')
  const [required, setRequired] = useState(false)

  return (
    <div className="keypix-space-y-6">
      {/* Controls */}
      <div className="keypix-grid keypix-grid-cols-2 md:keypix-grid-cols-3 keypix-gap-4">
        <div>
          <label className="keypix-block keypix-text-sm keypix-font-medium keypix-mb-2">
            Label
          </label>
          <input 
            type="text" 
            value={label}
            onChange={(e) => setLabel(e.target.value)}
            className="keypix-w-full keypix-p-2 keypix-border keypix-rounded"
          />
        </div>

        <div>
          <label className="keypix-block keypix-text-sm keypix-font-medium keypix-mb-2">
            Placeholder
          </label>
          <input 
            type="text" 
            value={placeholder}
            onChange={(e) => setPlaceholder(e.target.value)}
            className="keypix-w-full keypix-p-2 keypix-border keypix-rounded"
          />
        </div>

        <div>
          <label className="keypix-block keypix-text-sm keypix-font-medium keypix-mb-2">
            Helper Text
          </label>
          <input 
            type="text" 
            value={helperText}
            onChange={(e) => setHelperText(e.target.value)}
            className="keypix-w-full keypix-p-2 keypix-border keypix-rounded"
          />
        </div>

        <div className="keypix-flex keypix-items-center keypix-gap-2">
          <input 
            type="checkbox" 
            id="error" 
            checked={error}
            onChange={(e) => setError(e.target.checked)}
            className="keypix-rounded"
          />
          <label htmlFor="error" className="keypix-text-sm">Error</label>
        </div>

        <div className="keypix-flex keypix-items-center keypix-gap-2">
          <input 
            type="checkbox" 
            id="required" 
            checked={required}
            onChange={(e) => setRequired(e.target.checked)}
            className="keypix-rounded"
          />
          <label htmlFor="required" className="keypix-text-sm">Required</label>
        </div>
      </div>

      {/* Preview */}
      <div className="keypix-bg-muted keypix-p-8 keypix-rounded-lg">
        <Input
          label={label}
          placeholder={placeholder}
          value={value}
          onChange={(e) => setValue(e.target.value)}
          error={error}
          helperText={helperText}
          required={required}
        />
      </div>

      {/* Code Output */}
      <div className="keypix-bg-card keypix-border keypix-rounded-lg keypix-p-4">
        <h4 className="keypix-text-sm keypix-font-medium keypix-mb-2">Generated Code:</h4>
        <pre className="keypix-text-xs keypix-overflow-x-auto">
          <code>{`<Input
  label="${label}"
  placeholder="${placeholder}"
  value={value}
  onChange={(e) => setValue(e.target.value)}
  ${error ? 'error' : ''}
  ${helperText ? `helperText="${helperText}"` : ''}
  ${required ? 'required' : ''}
/>`}</code>
        </pre>
      </div>
    </div>
  )
}
```

### Card Playground

```tsx
import { Card, CardHeader, CardTitle, CardContent, CardFooter, Button } from 'keypix-ui'

function CardPlayground() {
  const [variant, setVariant] = useState('default')
  const [interactive, setInteractive] = useState(false)
  const [selected, setSelected] = useState(false)
  const [title, setTitle] = useState('Card Title')
  const [content, setContent] = useState('This is the card content. You can customize it as needed.')

  return (
    <div className="keypix-space-y-6">
      {/* Controls */}
      <div className="keypix-grid keypix-grid-cols-2 md:keypix-grid-cols-4 keypix-gap-4">
        <div>
          <label className="keypix-block keypix-text-sm keypix-font-medium keypix-mb-2">
            Variant
          </label>
          <select 
            value={variant} 
            onChange={(e) => setVariant(e.target.value)}
            className="keypix-w-full keypix-p-2 keypix-border keypix-rounded"
          >
            <option value="default">Default</option>
            <option value="outlined">Outlined</option>
            <option value="elevated">Elevated</option>
          </select>
        </div>

        <div className="keypix-flex keypix-items-center keypix-gap-2">
          <input 
            type="checkbox" 
            id="interactive" 
            checked={interactive}
            onChange={(e) => setInteractive(e.target.checked)}
            className="keypix-rounded"
          />
          <label htmlFor="interactive" className="keypix-text-sm">Interactive</label>
        </div>

        <div className="keypix-flex keypix-items-center keypix-gap-2">
          <input 
            type="checkbox" 
            id="selected" 
            checked={selected}
            onChange={(e) => setSelected(e.target.checked)}
            className="keypix-rounded"
          />
          <label htmlFor="selected" className="keypix-text-sm">Selected</label>
        </div>

        <div>
          <label className="keypix-block keypix-text-sm keypix-font-medium keypix-mb-2">
            Title
          </label>
          <input 
            type="text" 
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="keypix-w-full keypix-p-2 keypix-border keypix-rounded"
          />
        </div>
      </div>

      {/* Preview */}
      <div className="keypix-bg-muted keypix-p-8 keypix-rounded-lg">
        <Card 
          variant={variant as any}
          interactive={interactive}
          selected={selected}
          className="keypix-max-w-md"
        >
          <CardHeader>
            <CardTitle>{title}</CardTitle>
          </CardHeader>
          <CardContent>
            <p>{content}</p>
          </CardContent>
          <CardFooter>
            <Button variant="outline" className="keypix-mr-2">Cancel</Button>
            <Button>Save</Button>
          </CardFooter>
        </Card>
      </div>

      {/* Code Output */}
      <div className="keypix-bg-card keypix-border keypix-rounded-lg keypix-p-4">
        <h4 className="keypix-text-sm keypix-font-medium keypix-mb-2">Generated Code:</h4>
        <pre className="keypix-text-xs keypix-overflow-x-auto">
          <code>{`<Card 
  variant="${variant}"
  ${interactive ? 'interactive' : ''}
  ${selected ? 'selected' : ''}
>
  <CardHeader>
    <CardTitle>${title}</CardTitle>
  </CardHeader>
  <CardContent>
    <p>${content}</p>
  </CardContent>
  <CardFooter>
    <Button variant="outline">Cancel</Button>
    <Button>Save</Button>
  </CardFooter>
</Card>`}</code>
        </pre>
      </div>
    </div>
  )
}
```

## Theme Customization

### Color Palette Generator

```tsx
import { useState } from 'react'

function ColorPaletteGenerator() {
  const [primaryColor, setPrimaryColor] = useState('#3b82f6')
  const [secondaryColor, setSecondaryColor] = useState('#64748b')
  const [accentColor, setAccentColor] = useState('#f59e0b')

  const generateCSSVariables = () => {
    return `:root {
  --primary: ${primaryColor};
  --primary-foreground: #ffffff;
  --secondary: ${secondaryColor};
  --secondary-foreground: #ffffff;
  --accent: ${accentColor};
  --accent-foreground: #ffffff;
}`
  }

  return (
    <div className="keypix-space-y-6">
      <h3 className="keypix-text-xl keypix-font-semibold">Theme Customization</h3>
      
      <div className="keypix-grid keypix-grid-cols-1 md:keypix-grid-cols-3 keypix-gap-4">
        <div>
          <label className="keypix-block keypix-text-sm keypix-font-medium keypix-mb-2">
            Primary Color
          </label>
          <input 
            type="color" 
            value={primaryColor}
            onChange={(e) => setPrimaryColor(e.target.value)}
            className="keypix-w-full keypix-h-12 keypix-border keypix-rounded"
          />
        </div>

        <div>
          <label className="keypix-block keypix-text-sm keypix-font-medium keypix-mb-2">
            Secondary Color
          </label>
          <input 
            type="color" 
            value={secondaryColor}
            onChange={(e) => setSecondaryColor(e.target.value)}
            className="keypix-w-full keypix-h-12 keypix-border keypix-rounded"
          />
        </div>

        <div>
          <label className="keypix-block keypix-text-sm keypix-font-medium keypix-mb-2">
            Accent Color
          </label>
          <input 
            type="color" 
            value={accentColor}
            onChange={(e) => setAccentColor(e.target.value)}
            className="keypix-w-full keypix-h-12 keypix-border keypix-rounded"
          />
        </div>
      </div>

      {/* Preview with custom colors */}
      <div className="keypix-bg-muted keypix-p-8 keypix-rounded-lg">
        <div className="keypix-flex keypix-gap-4 keypix-flex-wrap">
          <Button style={{ '--primary': primaryColor } as any}>Primary</Button>
          <Button variant="secondary" style={{ '--secondary': secondaryColor } as any}>Secondary</Button>
          <Button variant="outline" style={{ '--accent': accentColor } as any}>Accent</Button>
        </div>
      </div>

      {/* Generated CSS */}
      <div className="keypix-bg-card keypix-border keypix-rounded-lg keypix-p-4">
        <h4 className="keypix-text-sm keypix-font-medium keypix-mb-2">Generated CSS:</h4>
        <pre className="keypix-text-xs keypix-overflow-x-auto">
          <code>{generateCSSVariables()}</code>
        </pre>
      </div>
    </div>
  )
}
```

## Responsive Testing

### Viewport Simulator

```tsx
function ViewportSimulator() {
  const [viewport, setViewport] = useState('desktop')

  const viewportSizes = {
    mobile: { width: '375px', height: '667px' },
    tablet: { width: '768px', height: '1024px' },
    desktop: { width: '100%', height: 'auto' }
  }

  return (
    <div className="keypix-space-y-6">
      <h3 className="keypix-text-xl keypix-font-semibold">Responsive Testing</h3>
      
      <div className="keypix-flex keypix-gap-4 keypix-mb-4">
        <button 
          onClick={() => setViewport('mobile')}
          className={`keypix-px-4 keypix-py-2 keypix-rounded keypix-text-sm ${
            viewport === 'mobile' ? 'keypix-bg-primary keypix-text-primary-foreground' : 'keypix-bg-secondary'
          }`}
        >
          Mobile (375px)
        </button>
        <button 
          onClick={() => setViewport('tablet')}
          className={`keypix-px-4 keypix-py-2 keypix-rounded keypix-text-sm ${
            viewport === 'tablet' ? 'keypix-bg-primary keypix-text-primary-foreground' : 'keypix-bg-secondary'
          }`}
        >
          Tablet (768px)
        </button>
        <button 
          onClick={() => setViewport('desktop')}
          className={`keypix-px-4 keypix-py-2 keypix-rounded keypix-text-sm ${
            viewport === 'desktop' ? 'keypix-bg-primary keypix-text-primary-foreground' : 'keypix-bg-secondary'
          }`}
        >
          Desktop (Full)
        </button>
      </div>

      <div 
        className="keypix-bg-muted keypix-border-2 keypix-border-dashed keypix-border-muted-foreground keypix-mx-auto keypix-overflow-hidden"
        style={viewportSizes[viewport as keyof typeof viewportSizes]}
      >
        <div className="keypix-p-4">
          <div className="keypix-grid keypix-grid-cols-1 md:keypix-grid-cols-2 lg:keypix-grid-cols-3 keypix-gap-4">
            <Card>
              <CardHeader>
                <CardTitle>Responsive Card 1</CardTitle>
              </CardHeader>
              <CardContent>
                <p>This card adapts to different screen sizes.</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Responsive Card 2</CardTitle>
              </CardHeader>
              <CardContent>
                <p>Grid layout changes based on viewport.</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Responsive Card 3</CardTitle>
              </CardHeader>
              <CardContent>
                <p>Mobile: 1 column, Tablet: 2 columns, Desktop: 3 columns.</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}
```

## Accessibility Testing

### A11y Playground

```tsx
function A11yPlayground() {
  const [showFocusIndicator, setShowFocusIndicator] = useState(true)
  const [reducedMotion, setReducedMotion] = useState(false)
  const [highContrast, setHighContrast] = useState(false)

  return (
    <div className="keypix-space-y-6">
      <h3 className="keypix-text-xl keypix-font-semibold">Accessibility Testing</h3>
      
      <div className="keypix-grid keypix-grid-cols-1 md:keypix-grid-cols-3 keypix-gap-4">
        <div className="keypix-flex keypix-items-center keypix-gap-2">
          <input 
            type="checkbox" 
            id="focusIndicator" 
            checked={showFocusIndicator}
            onChange={(e) => setShowFocusIndicator(e.target.checked)}
            className="keypix-rounded"
          />
          <label htmlFor="focusIndicator" className="keypix-text-sm">Show Focus Indicators</label>
        </div>

        <div className="keypix-flex keypix-items-center keypix-gap-2">
          <input 
            type="checkbox" 
            id="reducedMotion" 
            checked={reducedMotion}
            onChange={(e) => setReducedMotion(e.target.checked)}
            className="keypix-rounded"
          />
          <label htmlFor="reducedMotion" className="keypix-text-sm">Reduced Motion</label>
        </div>

        <div className="keypix-flex keypix-items-center keypix-gap-2">
          <input 
            type="checkbox" 
            id="highContrast" 
            checked={highContrast}
            onChange={(e) => setHighContrast(e.target.checked)}
            className="keypix-rounded"
          />
          <label htmlFor="highContrast" className="keypix-text-sm">High Contrast</label>
        </div>
      </div>

      <div className="keypix-bg-muted keypix-p-8 keypix-rounded-lg">
        <div className="keypix-space-y-4">
          <h4 className="keypix-text-lg keypix-font-medium">Test Navigation</h4>
          <p className="keypix-text-sm keypix-text-muted-foreground">
            Use Tab key to navigate through these elements and test focus management.
          </p>
          
          <div className="keypix-flex keypix-gap-4 keypix-flex-wrap">
            <Button>First Button</Button>
            <Input placeholder="Test input" />
            <Button variant="secondary">Second Button</Button>
            <Button variant="outline">Third Button</Button>
          </div>

          <div className="keypix-mt-4">
            <h5 className="keypix-text-sm keypix-font-medium keypix-mb-2">Screen Reader Test</h5>
            <Button 
              aria-label="Download file"
              aria-describedby="download-description"
            >
              Download
            </Button>
            <div id="download-description" className="keypix-sr-only">
              Downloads the current file in PDF format
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
```

## Usage Instructions

1. **Choose a Component**: Select the component you want to test from the component selector
2. **Adjust Controls**: Use the controls panel to modify component properties
3. **View Preview**: See the component update in real-time in the preview area
4. **Copy Code**: Use the generated code in your project
5. **Test Responsive**: Switch between different viewport sizes
6. **Test Accessibility**: Use keyboard navigation and screen readers

## Tips

- **Keyboard Navigation**: Use Tab, Shift+Tab, Enter, and Space to navigate
- **Screen Readers**: Test with NVDA, JAWS, or VoiceOver
- **Color Contrast**: Use browser dev tools to check contrast ratios
- **Performance**: Monitor bundle size and loading times
- **Cross-browser**: Test in Chrome, Firefox, Safari, and Edge

---

*This playground helps you understand how KeyPix UI components work and how to customize them for your needs.* 