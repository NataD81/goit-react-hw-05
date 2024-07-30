import { NavLink, Outlet } from "react-router-dom";
import s from "./Navigation.module.css";
import { Suspense } from "react";

const Navigation = () => {
  return (
    <>
      <header className={s.header}>
        <div className={s.wrapper}>
          <nav>
            <ul className={s.nav}>
              <li>
                <NavLink
                  to="/"
                  className={({ isActive }) => (isActive ? s.active : "")}
                >
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/movies"
                  className={({ isActive }) => (isActive ? s.active : "")}
                >
                  Movies
                </NavLink>
              </li>
            </ul>
          </nav>
        </div>
      </header>
      <Suspense fallback={<p>Loading...</p>}>
        <Outlet />
      </Suspense>
    </>
  );
};

export default Navigation;
