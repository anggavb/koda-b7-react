import { Route, Routes } from "react-router";
import { Task1, Task2, Task3, Review, Task5, Task5Slug } from "./pages";

function AppRouter() {
  return (
    <Routes>
      <Route path="/" element={<Review />} />
      <Route path="/counter" element={<Task1 />} />
      <Route path="/product-table" element={<Task2 />} />
      <Route path="/pokemon" element={<Task3 />} />
      <Route path="/rick-and-morty">
        <Route index element={<Task5 />} />
        <Route path=":id/:slug" element={<Task5Slug />} />
      </Route>
    </Routes>
  );
}

export default AppRouter;
