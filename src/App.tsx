import { AppLayout } from "@/layouts"
import { Sidebar } from "@/components"

function App() {
  return (
    <main className="min-h-screen py-12 grid place-content-center bg-magnolia">
      <AppLayout>
        <Sidebar />
        <h1 className="text-marine-blue">Hello World</h1>
      </AppLayout>
    </main>
  )
}

export default App
