function Review() {
  return (
    <main className="w-full flex justify-center items-center p-6">
      <form className="w-lg">
        <fieldset className="grid gap-4 border-2 border-gray-300 p-4 rounded-lg">
          <legend>Review</legend>
          <div className="flex flex-col gap-2">
            <label htmlFor="name">Name</label>
            <input type="text" name="name" id="name" placeholder="Write your name..." />
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="review">Review</label>
            <textarea name="review" id="review" rows="10"></textarea>
          </div>
        </fieldset>
      </form>
    </main>
  )
}

export default Review