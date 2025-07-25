import { Button } from "./components/ui/Button"

function App() {
  return (
    <div className="p-10 space-x-4">
      <Button>Default</Button>
      <Button variant="destructive">Delete</Button>
      <Button variant="outline">Outline</Button>
      <Button variant="ghost">Ghost</Button>
      <Button variant="link">Link</Button>
      <Button size="sm">Small</Button>
    </div>
  )
}

export default App
