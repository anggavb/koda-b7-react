import { useState } from "react"

import { NumberCounter, IncreaseCounter, DecreaseCounter } from "./components"

function App() {
  const [counter, setCounter] = useState(0)
  const incCounter = () => {
    setCounter(val => val < 10 ? val + 1 : val)
  }
  const decCounter = () => {
    setCounter(val => val > 0 ? val - 1 : val)
  }

  return (
    <main className="grid grid-cols-2 gap-4 justify-center items-center h-screen">
      <NumberCounter counter={counter} />

      <IncreaseCounter set={incCounter} />
      <DecreaseCounter set={decCounter} />
    </main>
  )
}

export default App