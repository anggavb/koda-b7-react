import { useEffect, useState } from "react";
import { useParams, Link } from "react-router";

function Task5Slug() {
  const { id, slug } = useParams();
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
    <main className="p-6 flex flex-col items-center gap-2">
      {character ? (
        <>
          <img
            src={character.image}
            alt={character.name}
            className="w-48 h-48 rounded"
          />
          <h1 className="text-2xl font-bold">{character.name}</h1>
          <p>Origin: {character.origin.name}</p>
          <p>Species: {character.species}</p>
          <p>Gender: {character.gender}</p>
          <p>Status: {character.status}</p>
          <p>
            <Link
              to={`/rick-and-morty/${id}/${slug}`}
              className="underline text-blue-500"
            >
              View Profile
            </Link>
          </p>
          <Link
            to="/rick-and-morty"
            className="bg-blue-500 text-white px-4 py-2 rounded"
          >
            Back to Characters
          </Link>
        </>
      ) : (
        <p>Loading...</p>
      )}
    </main>
  );
}

export default Task5Slug;
