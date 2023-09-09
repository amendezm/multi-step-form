import { BrowserRouter, Route, Routes } from "react-router-dom"

import { AppLayout } from "@/layouts"
import { StepsContainer } from "@/containers"
import { ThankYou } from "@/components"

function App() {
  return (
    <BrowserRouter>
      <main className="min-h-screen md:h-auto md:py-12 md:grid md:place-content-center bg-magnolia">
        <Routes>
          <Route path="/" element={<AppLayout />}>
            <Route index element={<StepsContainer />} />
            <Route path="/thank-you" element={<ThankYou />} />
          </Route>
        </Routes>
      </main>
    </BrowserRouter>
  )
}

export default App
