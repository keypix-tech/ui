import { Button, Input, SearchBar, Header } from "./components/index"

function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Organism Example */}
      <Header 
        title="KeyPix UI - Atomic Design"
        onSearch={(value) => console.log('Search:', value)}
        onLogin={() => console.log('Login clicked')}
        onSignup={() => console.log('Signup clicked')}
      />
      
      <div className="p-10 space-y-8">
        {/* Atoms Examples */}
        <section>
          <h2 className="text-2xl font-bold mb-4">Atoms</h2>
          <div className="space-y-4">
            <div className="space-x-4">
              <Button>Default</Button>
              <Button variant="destructive">Delete</Button>
              <Button variant="outline">Outline</Button>
              <Button variant="ghost">Ghost</Button>
              <Button variant="link">Link</Button>
              <Button variant="secondary">Secondary</Button>
            </div>
            
            <div className="space-x-4">
              <Button size="sm">Small</Button>
              <Button size="md">Medium</Button>
              <Button size="lg">Large</Button>
            </div>
            
            <div className="max-w-md">
              <Input placeholder="Enter your name..." />
            </div>
          </div>
        </section>

        {/* Molecules Examples */}
        <section>
          <h2 className="text-2xl font-bold mb-4">Molecules</h2>
          <div className="max-w-md">
            <SearchBar 
              placeholder="Search components..."
              onSearch={(value) => console.log('Search:', value)}
            />
          </div>
        </section>
      </div>
    </div>
  )
}

export default App
