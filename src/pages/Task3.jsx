import { useState, useEffect } from "react"
import { Pokemon, SearchPokemon } from "../components"

function Task3() {
  const [pokemon, setPokemon] = useState([])
  const [allPokemon, setAllPokemon] = useState([])

  useEffect(() => {
    const URL = 'https://pokeapi.co/api/v2/pokemon?limit=30'
    
    ;(async () => {
      try {
        const response = await fetch(URL)
        if (!response.ok) throw response.status

        const { results } = await response.json()
        
        let data = results.map(async (value) => {
          const data = await fetch(value.url)
          if (!data.ok) throw data.status
          
          const { sprites, types } = await data.json()

          return {
            name: value.name,
            image: sprites.back_default,
            types: types.map(v => {
              return v.type.name
            })
          }
        })

        const final = await Promise.all(data)
        setPokemon(final)
        setAllPokemon(final)
      } catch (err) {
        console.log(`Status: ${err}`)
      }
    })()
  }, [])

  const filterPokemon = (search) => {
    if (!search || search.trim() === '') {
      setPokemon(allPokemon)
    } else {
      const results = [...pokemon].filter(val => val.name.startsWith(search))
      setPokemon(results)
    }
  }

  return (
    <main className="p-6 flex flex-col gap-8">
      <SearchPokemon search={filterPokemon} />
      <div className="grid grid-cols-4 gap-2.5">
        <Pokemon pokemon={pokemon} />
      </div>
    </main>
  )
}

export default Task3