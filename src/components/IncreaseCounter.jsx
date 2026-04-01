import { useState } from "react"

function IncreaseCounter() {
  const [counter, setCount] = useState(0)
  const incCounter = () => {
    setCount(val => val < 10 ? val + 1 : val + 0)
  }

  return (
    <button onClick={incCounter} className="bg-green-300 p-4 rounded-md border">Counter Add: {counter}</button>
  )
}

export default IncreaseCounter