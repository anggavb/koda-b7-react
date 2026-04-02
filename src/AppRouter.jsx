import { Route, Routes } from 'react-router'
import { Task1, Task2, Task3, Review } from './pages'

function AppRouter() {
  return (
    <Routes>
      <Route path="/" element={ <Review /> } />
      <Route path="/counter" element={ <Task1 /> } />
      <Route path="/product-table" element={ <Task2 /> } />
      <Route path="/pokemon" element={ <Task3 /> } />
    </Routes>
  )
}

export default AppRouter