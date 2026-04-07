import slugify from "slugify";
import { useEffect, useState } from "react";
import { Link } from "react-router";

function Task5() {
  const [data, setData] = useState([]);

  useEffect(() => {
    // Simulate an API call
    const fetchData = async () => {
      const URL = "https://rickandmortyapi.com/api/character";
      (async () => {
        try {
          const response = await fetch(URL);
          if (!response.ok) throw response.status;

          const { results } = await response.json();
          console.log(results);
          setData(results);
        } catch (err) {
          console.log(`Status: ${err}`);
        }
      })();
    };

    fetchData();
  }, []);

  return (
    <main className="p-6 flex flex-col gap-8">
      <div className="grid grid-cols-4 gap-2.5">
        {data.map((character) => (
          <Link
            to={`/rick-and-morty/${character.id}/${slugify(character.name.toLowerCase())}`}
            key={character.id}
            className="flex flex-col items-center gap-2.5 p-4 border rounded"
          >
            <img
              src={character.image}
              alt={character.name}
              className="w-24 h-24 rounded-full"
            />
            <h3 className="font-bold">{character.name}</h3>
            <p>{character.species}</p>
          </Link>
        ))}
      </div>
    </main>
  );
}

export default Task5;
