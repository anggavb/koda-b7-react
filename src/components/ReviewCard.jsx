function ReviewCard({ addReview }) {
  const handleSubmit = (e) => {
    e.preventDefault()

    const name = e.target.name.value
    const review = e.target.review.value
    addReview(name, review)

    alert('Review submitted successfully!')

    e.target.name.value = ''
    e.target.review.value = ''
  }

  return (
    <form className="w-lg" onSubmit={handleSubmit}>
      <fieldset className="grid gap-4 border-2 border-gray-300 p-4 rounded-lg">
        <legend className="font-bold text-lg">Review</legend>
        <div className="flex flex-col gap-2">
          <label htmlFor="name">Name</label>
          <input type="text" name="name" id="name" placeholder="Write your name..." className="border border-gray-300 p-2 rounded-md" />
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="review">Review</label>
          <textarea name="review" id="review" rows="10" className="border border-gray-300 p-2 rounded-md"></textarea>
        </div>
        <button type="submit" className="bg-emerald-400 hover:bg-emerald-500 text-white font-bold py-2 px-4 rounded-md cursor-pointer">Submit</button>
      </fieldset>
    </form>
  )
}

export default ReviewCard