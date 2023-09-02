import { AppLayout } from "@/layouts"

function App() {
  return (
    <main className="min-h-screen py-12 grid place-content-center bg-magnolia">
      <AppLayout>
        <aside>
          <ul>
            <li>1</li>
            <li>2</li>
            <li>3</li>
            <li>4</li>
            <li>5</li>
          </ul>
        </aside>
        <h1 className="text-marine-blue">Hello World</h1>
      </AppLayout>
    </main>
  )
}

export default App
