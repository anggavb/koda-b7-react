import { useState, useEffect } from "react"

import { ReviewCard, ReviewList } from "../components"

function Review() {
  const [form, setForm] = useState(() => {
    const reviews = localStorage.getItem('reviews')
    return reviews ? JSON.parse(reviews) : []
  })

  const addReview = (name, review) => {
    setForm([...form, { name, review }])
  }

  useEffect(() => {
    localStorage.setItem('reviews', JSON.stringify(form))
  }, [form])

  return (
    <main className="w-full flex gap-4 justify-center items-center p-6">
      <ReviewCard addReview={addReview} />

      <ReviewList form={form} />
    </main>
  )
}

export default Review