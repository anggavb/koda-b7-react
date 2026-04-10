import { useFetch } from "@/hooks";

function DataFetching() {
  const { data, isLoading, error } = useFetch(
    "https://jsonplaceholder.typicode.com/posts",
  );

  return (
    <>
      {isLoading && <p>Loading...</p>}
      {error && <p>{error.message}</p>}
      {data?.map((post) => (
        <div key={post.id}>
          <h3>{post.title}</h3>
          <p>{post.body}</p>
        </div>
      ))}
    </>
  );
}

export default DataFetching;
