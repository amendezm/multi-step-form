import { BrowserRouter, Route, Routes } from "react-router-dom"

import { AppLayout } from "@/layouts"
import { StepsContainer } from "@/containers"
import { ThankYou } from "@/components"

function App() {
  return (
    <BrowserRouter>
      <main className="min-h-screen py-12 grid place-content-center bg-magnolia">
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
