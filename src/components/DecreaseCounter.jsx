function DecreaseCounter({set}) {
  return (
    <button onClick={set} className="bg-red-300 p-4 rounded-md border mx-auto self-start">Decrement Number</button>
  )
}

export default DecreaseCounter