import { useEffect, useState } from "react";
import { useParams } from "react-router";

function Task5Slug() {
  const { id, _ } = useParams();
  const [character, setCharacter] = useState(null);

  useEffect(() => {
    (async () => {
      const URL = `https://rickandmortyapi.com/api/character/${id}`;
      try {
        const response = await fetch(URL);
        if (!response.ok) throw response.status;

        const data = await response.json();
        setCharacter(data);
      } catch (err) {
        console.log(`Status: ${err}`);
      }
    })();
  }, [id]);
  return (
    <main className="p-6 flex flex-col items-center gap-8">
      {character ? (
        <>
          <img
            src={character.image}
            alt={character.name}
            className="w-48 h-48 rounded"
          />
          <h1 className="text-2xl font-bold">{character.name}</h1>
          <p>Species: {character.species}</p>
          <p>Status: {character.status}</p>
        </>
      ) : (
        <p>Loading...</p>
      )}
    </main>
  );
}

export default Task5Slug;
