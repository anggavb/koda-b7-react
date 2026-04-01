import { IncreaseCounter, DecreaseCounter } from "./components"

function App() {
  return (
    <main className="flex gap-4 justify-center items-center h-screen">
      <IncreaseCounter />
      <DecreaseCounter />
    </main>
  )
}

export default App