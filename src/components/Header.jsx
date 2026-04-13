import { useContext } from "react";
import { NavLink } from "react-router";

import usersContext from "../contexts/users/context";

function Header() {
  const { usersState, usersDispatch } = useContext(usersContext);

  return (
    <nav className="flex justify-center items-center gap-8 *:px-2 *:py-4 bg-emerald-400 *:hover:bg-amber-50 *:cursor-pointer *:font-bold mb-4">
      <NavLink
        className={({ isActive }) => (isActive ? "bg-amber-50" : "font-bold")}
        to="/"
      >
        Home
      </NavLink>
      <NavLink
        className={({ isActive }) => (isActive ? "bg-amber-50" : "font-bold")}
        to="/counter"
      >
        Counter
      </NavLink>
      <NavLink
        className={({ isActive }) => (isActive ? "bg-amber-50" : "font-bold")}
        to="/product-table"
      >
        Product Table
      </NavLink>
      <NavLink
        className={({ isActive }) => (isActive ? "bg-amber-50" : "font-bold")}
        to="/pokemon"
      >
        Pokemon
      </NavLink>
      <NavLink
        className={({ isActive }) => (isActive ? "bg-amber-50" : "font-bold")}
        to="/rick-and-morty"
      >
        Rick and Morty
      </NavLink>
      <NavLink
        className={({ isActive }) => (isActive ? "bg-amber-50" : "font-bold")}
        to="/data-fetching"
      >
        Data Fetching
      </NavLink>
      <NavLink
        className={({ isActive }) => (isActive ? "bg-amber-50" : "font-bold")}
        to="/user-context"
      >
        User Context
      </NavLink>

      <NavLink
        className={({ isActive }) => (isActive ? "bg-amber-50" : "font-bold")}
        to="/survey"
      >
        Survey
      </NavLink>

      {usersState.username}
      <button
        onClick={() => usersDispatch({ type: "LOGOUT" })}
        className={`bg-red-600 text-white hover:text-black ${usersState.username ? "block" : "hidden"}`}
      >
        Logout
      </button>
      <button
        className={`bg-green-600 text-white hover:text-black ${usersState.username ? "hidden" : "block"}`}
      >
        Login
      </button>
    </nav>
  );
}

export default Header;
