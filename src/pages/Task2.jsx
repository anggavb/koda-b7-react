import { useState } from "react"
import { Form, TableForm } from "../components"

function Task2() {
  const [products, setForm] = useState([])
  const submitProduct = (product) => {
    setForm(data => [...data, ...[product]])
  }

  return (
    <main className="flex flex-col gap-8">
      <Form onSubmit={submitProduct} />
      <TableForm products={products} />
    </main>
  )
}

export default Task2