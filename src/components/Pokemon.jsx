function Pokemon({pokemon}) {
  return (
    <>
      {
        pokemon.length ? pokemon.map((val, idx) => {
          return (<article key={`${idx}-${val.name}`} className="bg-blue-300 p-4 rounded-xl text-center">
            <h1>{val.name.toUpperCase()}</h1>
            <img src={val.image} alt="Image Pokemon" />
            <p>Types: {val.types.join(", ")}</p>
          </article>)
        }) : "Loading..."
      }
    </>
  )
}

export default Pokemon