function IncreaseCounter({set}) {
  return (
    <button onClick={set} className="bg-green-300 p-4 rounded-md border mx-auto self-start">Increment Number</button>
  )
}

export default IncreaseCounter