import { useState } from "react"
import { NumberCounter, IncreaseCounter, DecreaseCounter, Form, TableForm } from "./components"

function App() {
  const [counter, setCounter] = useState(0)
  const incCounter = () => {
    setCounter(val => val < 10 ? val + 1 : val)
  }
  const decCounter = () => {
    setCounter(val => val > 0 ? val - 1 : val)
  }

  const [products, setForm] = useState([])
  const submitProduct = (product) => {
    setForm(data => [...data, ...[product]])
  }

  return (
    <main className="flex flex-col gap-8">
      <section className="grid grid-cols-2 gap-4 justify-center items-center pt-12 mb-12">
        <NumberCounter counter={counter} />

        <IncreaseCounter set={incCounter} />
        <DecreaseCounter set={decCounter} />
      </section>

      <Form onSubmit={submitProduct} />
      <TableForm products={products} />
    </main>
  )
}

export default App