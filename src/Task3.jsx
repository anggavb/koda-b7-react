import { useState, useEffect } from "react"
import { Pokemon } from "./components"

function Task3() {
  const [pokemon, setPokemon] = useState([])

  useEffect(() => {
    const URL = 'https://pokeapi.co/api/v2/pokemon?limit=10'
    
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
      } catch (err) {
        console.log(`Status: ${err}`)
      }
    })()
  }, [])

  return (
    <main className="grid grid-cols-4 gap-2.5">
      <Pokemon pokemon={pokemon} />
    </main>
  )
}

export default Task3