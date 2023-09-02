import { useStore } from "./store"

function App() {
  const { step, prev, next } = useStore(state => ({
    step: state.step,
    next: state.nextStep,
    prev: state.prevStep
  }))

  return (
    <main className="h-screen grid place-content-center">
      <h1 className="text-4xl font-bold text-blue-500">{step}</h1>
      <button onClick={prev}>prev</button>
      <button onClick={next}>next</button>
    </main>
  )
}

export default App
