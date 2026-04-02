function ReviewList({form}) {
  return (
    <section className="grid grid-cols-2 gap-4 p-4 border-2 border-gray-300 rounded-lg">
      <h2 className="col-span-2 text-2xl font-bold mb-4">All Reviews</h2>
      {
        form.map((review, index) => (
          <div key={index} className="p-2 border border-gray-300 rounded-md">
            <p>{review.name}: {review.review}</p>
          </div>
        ))
      }
    </section>
  )
}

export default ReviewList