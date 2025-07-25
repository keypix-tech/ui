import { Button } from "./components/ui/Button"

function App() {
  return (
    <div className="p-10 space-y-4">
      <div className="space-x-4">
        <Button>Default</Button>
        <Button variant="destructive">Delete</Button>
        <Button variant="outline">Outline</Button>
        <Button variant="ghost">Ghost</Button>
        <Button variant="link">Link</Button>
      </div>
      
      <div className="space-x-4">
        <Button size="sm">Small</Button>
        <Button size="md">Medium</Button>
        <Button size="lg">Large</Button>
      </div>
      
      <div className="space-x-4">
        <Button variant="outline" size="sm">Small Outline</Button>
        <Button variant="destructive" size="lg">Large Delete</Button>
        <Button variant="ghost" size="sm">Small Ghost</Button>
      </div>
    </div>
  )
}

export default App
