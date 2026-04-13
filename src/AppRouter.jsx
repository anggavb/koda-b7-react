import { Route, Routes } from "react-router";
import {
  Task1,
  Task2,
  Task3,
  Review,
  Task5,
  Task5Slug,
  DataFetching,
  ContextManagement,
  SurveyRedux,
} from "./pages";

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
      <Route path="/data-fetching" element={<DataFetching />} />
      <Route path="/user-context" element={<ContextManagement />} />
      <Route path="/survey" element={<SurveyRedux />} />
    </Routes>
  );
}

export default AppRouter;
