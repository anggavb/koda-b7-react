import { useState } from "react"

function DecreaseCounter() {
  const [counter, setCount] = useState(10)
  const incCounter = () => {
    setCount(val => val > 0 ? val - 1 : val)
  }

  return (
    <button onClick={incCounter} className="bg-red-300 p-4 rounded-md border">Counter Reduce: {counter}</button>
  )
}

export default DecreaseCounter