import { AppLayout } from "@/layouts"
import { Sidebar } from "@/components"
import { StepsContainer } from "@/containers"

function App() {
  return (
    <main className="min-h-screen py-12 grid place-content-center bg-magnolia">
      <AppLayout>
        <Sidebar />
        <StepsContainer />
      </AppLayout>
    </main>
  )
}

export default App
