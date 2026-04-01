import IncreaseCounter from "./components/IncreaseCounter"
import DecreaseCounter from "./components/DecreaseCounter"

function App() {
  return (
    <main className="flex gap-4 justify-center items-center h-screen">
      <IncreaseCounter />
      <DecreaseCounter />
    </main>
  )
}

export default App