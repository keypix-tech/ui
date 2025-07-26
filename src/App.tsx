import * as React from "react"
import { Button } from "./components/atoms/Button"
import { Input } from "./components/atoms/Input"
import { SearchBar } from "./components/molecules/SearchBar"
import { Header } from "./components/organisms/Header"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./components/atoms/Card"
import { Badge } from "./components/atoms/Badge"
import { Avatar, AvatarGroup } from "./components/atoms/Avatar"
import { Spinner } from "./components/atoms/Spinner"
import { Alert, AlertDescription, AlertTitle } from "./components/molecules/Alert"
import { Modal } from "./components/molecules/Modal"
import { DataTable } from "./components/organisms/DataTable"
import type { Column } from "./components/organisms/DataTable"
import { ThemeProvider } from "./components/providers/ThemeProvider"
import { useTheme } from "./components/providers"

function AppContent() {
  const { theme, setTheme } = useTheme()
  const [isModalOpen, setIsModalOpen] = React.useState(false)
  const [loading, setLoading] = React.useState(false)
  const [inputValue, setInputValue] = React.useState('')
  const [badges, setBadges] = React.useState(['Badge 1', 'Badge 2', 'Badge 3'])

  // Sample data for DataTable
  const sampleData = [
    { id: 1, name: 'John Doe', email: 'john@example.com', status: 'active', role: 'Admin' },
    { id: 2, name: 'Jane Smith', email: 'jane@example.com', status: 'inactive', role: 'User' },
    { id: 3, name: 'Bob Johnson', email: 'bob@example.com', status: 'active', role: 'Editor' },
  ]

  const columns: Column<typeof sampleData[0]>[] = [
    { key: 'id', title: 'ID', sortable: true },
    { key: 'name', title: 'Name', sortable: true },
    { key: 'email', title: 'Email', sortable: true },
    { 
      key: 'status', 
      title: 'Status', 
      sortable: true,
      render: (value: string | number) => (
        <Badge variant={String(value) === 'active' ? 'success' : 'secondary'}>
          {String(value)}
        </Badge>
      )
    },
    { key: 'role', title: 'Role', sortable: true },
  ]

  const handleLoadingClick = () => {
    setLoading(true)
    setTimeout(() => setLoading(false), 2000)
  }

  const handleRemoveBadge = (badgeToRemove: string) => {
    setBadges(badges.filter(badge => badge !== badgeToRemove))
  }

  return (
    <div className="min-h-screen bg-background p-6">
      {/* Organism Example */}
      <Header 
        title="Keypix UI - Premium Design System"
        onSearch={(value) => console.log('Search:', value)}
        onLogin={() => console.log('Login clicked')}
        onSignup={() => console.log('Signup clicked')}
      />
      
      <div className="p-10 space-y-8">
        {/* Theme Toggle */}
        <div className="flex items-center justify-between">
          <h1 className="text-3xl font-bold">Keypix UI Components</h1>
          <div className="flex items-center space-x-4">
            <span className="text-sm text-muted-foreground">Theme:</span>
            <select 
              value={theme} 
              onChange={(e) => setTheme(e.target.value as 'light' | 'dark' | 'system')}
              className="px-3 py-1 border rounded-md bg-background text-foreground"
            >
              <option value="light">Light</option>
              <option value="dark">Dark</option>
              <option value="system">System</option>
            </select>
          </div>
        </div>

        {/* Atoms Examples */}
        <section>
          <h2 className="text-2xl font-bold mb-6">Atoms</h2>
          <div className="space-y-8">
            {/* Buttons */}
            <Card>
              <CardHeader>
                <CardTitle>Buttons</CardTitle>
                <CardDescription>Enhanced button styles with loading states, icons, and better interactions</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-x-4">
                  <Button>Default</Button>
                  <Button variant="destructive">Delete</Button>
                  <Button variant="outline">Outline</Button>
                  <Button variant="ghost">Ghost</Button>
                  <Button variant="link">Link</Button>
                  <Button variant="secondary">Secondary</Button>
                  <Button variant="success">Success</Button>
                  <Button variant="warning">Warning</Button>
                  <Button variant="info">Info</Button>
                </div>
                
                <div className="space-x-4">
                  <Button size="xs">Extra Small</Button>
                  <Button size="sm">Small</Button>
                  <Button size="md">Medium</Button>
                  <Button size="lg">Large</Button>
                  <Button size="xl">Extra Large</Button>
                </div>

                <div className="space-x-4 space-y-5">
                  <Button 
                    loading={loading} 
                    loadingText="Loading..."
                    onClick={handleLoadingClick}
                  >
                    Loading Button
                  </Button>
                  <Button disabled>Disabled</Button>
                  <Button variant="secondary" fullWidth>Full Width</Button>
                </div>

                <div className="space-x-4">
                  <Button 
                    leftIcon={<span>🚀</span>}
                    rightIcon={<span>→</span>}
                  >
                    With Icons
                  </Button>
                  <Button size="icon" variant="outline">
                    <span>⚙️</span>
                  </Button>
                </div>

                {/* Test section for button icons */}
                <div className="border-t pt-4">
                  <h4 className="text-sm font-medium mb-2">Debug: Button Icons</h4>
                  <div className="grid grid-cols-3 gap-4 text-xs">
                    <div className="space-y-2">
                      <div className="font-medium">Left Icon:</div>
                      <Button size="sm" leftIcon={<span>📧</span>}>Email</Button>
                    </div>
                    <div className="space-y-2">
                      <div className="font-medium">Right Icon:</div>
                      <Button size="sm" rightIcon={<span>→</span>}>Next</Button>
                    </div>
                    <div className="space-y-2">
                      <div className="font-medium">Icon Only:</div>
                      <Button size="icon" variant="outline">
                        <span>🔍</span>
                      </Button>
                    </div>
                  </div>
                </div>

                {/* Test section for debugging */}
                <div className="border-t pt-4">
                  <h4 className="text-sm font-medium mb-2">Debug: Button Variants</h4>
                  <div className="grid grid-cols-3 gap-2 text-xs">
                    <div className="space-y-1">
                      <div className="font-medium">Default:</div>
                      <Button size="sm">Default</Button>
                    </div>
                    <div className="space-y-1">
                      <div className="font-medium">Secondary:</div>
                      <Button size="sm" variant="secondary">Secondary</Button>
                    </div>
                    <div className="space-y-1">
                      <div className="font-medium">Destructive:</div>
                      <Button size="sm" variant="destructive">Destructive</Button>
                    </div>
                    <div className="space-y-1">
                      <div className="font-medium">Ghost:</div>
                      <Button size="sm" variant="ghost">Ghost</Button>
                    </div>
                    <div className="space-y-1">
                      <div className="font-medium">Outline:</div>
                      <Button size="sm" variant="outline">Outline</Button>
                    </div>
                    <div className="space-y-1">
                      <div className="font-medium">Link:</div>
                      <Button size="sm" variant="link">Link</Button>
                    </div>
                  </div>
                </div>

                {/* Test section for button states */}
                <div className="border-t pt-4">
                  <h4 className="text-sm font-medium mb-2">Debug: Button States</h4>
                  <div className="grid grid-cols-2 gap-4 text-xs">
                    <div className="space-y-2">
                      <div className="font-medium">Normal vs Disabled:</div>
                      <div className="space-x-2">
                        <Button size="sm">Normal</Button>
                        <Button size="sm" disabled>Disabled</Button>
                      </div>
                    </div>
                    <div className="space-y-2">
                      <div className="font-medium">Loading State:</div>
                      <div className="space-x-2">
                        <Button size="sm" loading>Loading</Button>
                        <Button size="sm" loading loadingText="Wait...">Loading Text</Button>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Inputs */}
            <Card>
              <CardHeader>
                <CardTitle>Inputs</CardTitle>
                <CardDescription>Enhanced form inputs with labels, validation, icons, and clear functionality</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <Input 
                  label="Full Name"
                  placeholder="Enter your full name..."
                  required
                />
                <Input 
                  label="Email Address"
                  placeholder="Enter your email"
                  type="email"
                  prefix={<span>📧</span>}
                />
                <Input 
                  label="Search"
                  placeholder="Search..."
                  prefix={<span>🔍</span>}
                  clearable
                  onClear={() => console.log('Cleared')}
                />
                <Input 
                  label="Controlled Input"
                  placeholder="This is controlled..."
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  clearable
                  onClear={() => setInputValue('')}
                />
                <Input 
                  label="With Error"
                  placeholder="This will show an error"
                  error={true}
                  helperText="This field is required and cannot be empty"
                />
                <Input 
                  label="Loading Input"
                  placeholder="Loading state..."
                  loading={true}
                />
              </CardContent>
            </Card>

            {/* Badges */}
            <Card>
              <CardHeader>
                <CardTitle>Badges</CardTitle>
                <CardDescription>Enhanced status indicators with icons and removable functionality</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-x-2">
                  <Badge>Default</Badge>
                  <Badge variant="secondary">Secondary</Badge>
                  <Badge variant="destructive">Destructive</Badge>
                  <Badge variant="outline">Outline</Badge>
                  <Badge variant="success">Success</Badge>
                  <Badge variant="warning">Warning</Badge>
                  <Badge variant="info">Info</Badge>
                </div>
                <div className="space-x-2">
                  <Badge size="sm">Small</Badge>
                  <Badge size="md">Medium</Badge>
                  <Badge size="lg">Large</Badge>
                </div>
                <div className="space-x-2">
                  <Badge leftIcon={<span>✅</span>}>With Icon</Badge>
                  <Badge removable onRemove={() => console.log('Removed')}>
                    Removable
                  </Badge>
                </div>
                <div className="space-x-2">
                  {badges.map((badge, index) => (
                    <Badge 
                      key={index}
                      removable 
                      onRemove={() => handleRemoveBadge(badge)}
                    >
                      {badge}
                    </Badge>
                  ))}
                </div>

                {/* Test section for debugging badges */}
                <div className="border-t pt-4">
                  <h4 className="text-sm font-medium mb-2">Debug: Badge Variants</h4>
                  <div className="grid grid-cols-4 gap-2 text-xs">
                    <div className="space-y-1">
                      <div className="font-medium">Default:</div>
                      <Badge size="sm">Default</Badge>
                    </div>
                    <div className="space-y-1">
                      <div className="font-medium">Secondary:</div>
                      <Badge size="sm" variant="secondary">Secondary</Badge>
                    </div>
                    <div className="space-y-1">
                      <div className="font-medium">Destructive:</div>
                      <Badge size="sm" variant="destructive">Destructive</Badge>
                    </div>
                    <div className="space-y-1">
                      <div className="font-medium">Outline:</div>
                      <Badge size="sm" variant="outline">Outline</Badge>
                    </div>
                    <div className="space-y-1">
                      <div className="font-medium">Success:</div>
                      <Badge size="sm" variant="success">Success</Badge>
                    </div>
                    <div className="space-y-1">
                      <div className="font-medium">Warning:</div>
                      <Badge size="sm" variant="warning">Warning</Badge>
                    </div>
                    <div className="space-y-1">
                      <div className="font-medium">Info:</div>
                      <Badge size="sm" variant="info">Info</Badge>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Avatars */}
            <Card>
              <CardHeader>
                <CardTitle>Avatars</CardTitle>
                <CardDescription>Enhanced user profile images with status indicators and group display</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center space-x-4">
                  <Avatar src="https://github.com/shadcn.png" alt="User" status="online" />
                  <Avatar fallback="JD" status="away" />
                  <Avatar size="lg" fallback="AB" status="busy" />
                  <Avatar size="xl" fallback="CD" status="offline" />
                </div>
                
                <div className="space-y-2">
                  <h4 className="text-sm font-medium">Avatar Groups</h4>
                  <AvatarGroup max={3} size="md">
                    <Avatar src="https://github.com/shadcn.png" alt="User 1" />
                    <Avatar fallback="JD" />
                    <Avatar fallback="AB" />
                    <Avatar fallback="CD" />
                    <Avatar fallback="EF" />
                  </AvatarGroup>
                </div>
              </CardContent>
            </Card>

            {/* Spinners */}
            <Card>
              <CardHeader>
                <CardTitle>Spinners</CardTitle>
                <CardDescription>Enhanced loading indicators with multiple types and overlay support</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center space-x-4">
                  <Spinner size="xs" />
                  <Spinner size="sm" />
                  <Spinner size="md" />
                  <Spinner size="lg" />
                  <Spinner size="xl" />
                </div>
                <div className="flex items-center space-x-4">
                  <Spinner variant="primary" />
                  <Spinner variant="success" />
                  <Spinner variant="warning" />
                  <Spinner variant="error" />
                </div>
                <div className="flex items-center space-x-4">
                  <Spinner type="dots" />
                  <Spinner type="pulse" />
                  <Spinner type="bars" />
                  <Spinner type="spinner" />
                </div>
                <div className="flex items-center space-x-4">
                  <Spinner text="Loading..." />
                  <Spinner text="Processing..." textPosition="top" />
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Molecules Examples */}
        <section>
          <h2 className="text-2xl font-bold mb-6">Molecules</h2>
          <div className="space-y-8">
            {/* SearchBar */}
            <Card>
              <CardHeader>
                <CardTitle>Search Bar</CardTitle>
                <CardDescription>Search component with integrated button</CardDescription>
              </CardHeader>
              <CardContent>
                <SearchBar 
                  placeholder="Search components..."
                  onSearch={(value) => console.log('Search:', value)}
                />
              </CardContent>
            </Card>

            {/* Alerts */}
            <Card>
              <CardHeader>
                <CardTitle>Alerts</CardTitle>
                <CardDescription>Notification and status messages</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <Alert>
                  <AlertTitle>Default Alert</AlertTitle>
                  <AlertDescription>
                    This is a default alert message.
                  </AlertDescription>
                </Alert>
                <Alert variant="destructive">
                  <AlertTitle>Error</AlertTitle>
                  <AlertDescription>
                    This is an error alert message.
                  </AlertDescription>
                </Alert>
                <Alert variant="success">
                  <AlertTitle>Success</AlertTitle>
                  <AlertDescription>
                    This is a success alert message.
                  </AlertDescription>
                </Alert>
                <Alert variant="warning">
                  <AlertTitle>Warning</AlertTitle>
                  <AlertDescription>
                    This is a warning alert message.
                  </AlertDescription>
                </Alert>
                <Alert variant="info">
                  <AlertTitle>Info</AlertTitle>
                  <AlertDescription>
                    This is an info alert message.
                  </AlertDescription>
                </Alert>
              </CardContent>
            </Card>

            {/* Modal */}
            <Card>
              <CardHeader>
                <CardTitle>Modal</CardTitle>
                <CardDescription>Overlay dialogs and popups</CardDescription>
              </CardHeader>
              <CardContent>
                <Button onClick={() => setIsModalOpen(true)}>
                  Open Modal
                </Button>
                <Modal
                  isOpen={isModalOpen}
                  onClose={() => setIsModalOpen(false)}
                  title="Example Modal"
                  description="This is an example modal dialog"
                >
                  <div className="space-y-4">
                    <p>This is the modal content. You can put any components here.</p>
                    <div className="flex justify-end space-x-2">
                      <Button variant="outline" onClick={() => setIsModalOpen(false)}>
                        Cancel
                      </Button>
                      <Button onClick={() => setIsModalOpen(false)}>
                        Confirm
                      </Button>
                    </div>
                  </div>
                </Modal>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Organisms Examples */}
        <section>
          <h2 className="text-2xl font-bold mb-6">Organisms</h2>
          <div className="space-y-8">
            {/* DataTable */}
            <Card>
              <CardHeader>
                <CardTitle>Data Table</CardTitle>
                <CardDescription>Advanced table with sorting, filtering, and pagination</CardDescription>
              </CardHeader>
              <CardContent>
                <DataTable
                  data={sampleData}
                  columns={columns}
                  searchable
                  sortable
                  pagination
                  pageSize={5}
                  onRowClick={(row) => console.log('Row clicked:', row)}
                />
              </CardContent>
            </Card>
          </div>
        </section>
      </div>
    </div>
  )
}

function App() {
  return (
    <ThemeProvider>
      <AppContent />
    </ThemeProvider>
  )
}

export default App
