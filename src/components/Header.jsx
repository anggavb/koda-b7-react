import { NavLink } from "react-router"

function Header() {
  return (
    <nav className="flex justify-center items-center gap-8 *:px-2 *:py-4 bg-emerald-400 *:hover:bg-amber-50 *:cursor-pointer *:font-bold mb-4">
      <NavLink className={({ isActive}) => isActive ? "bg-amber-50" : "font-bold"} to="/">Home</NavLink>
      <NavLink className={({ isActive}) => isActive ? "bg-amber-50" : "font-bold"} to="/counter">Counter</NavLink>
      <NavLink className={({ isActive}) => isActive ? "bg-amber-50" : "font-bold"} to="/product-table">Product Table</NavLink>
      <NavLink className={({ isActive}) => isActive ? "bg-amber-50" : "font-bold"} to="/pokemon">Pokemon</NavLink>
    </nav>
  )
}

export default Header 