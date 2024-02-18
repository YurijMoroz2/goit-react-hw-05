import { NavLink } from 'react-router-dom';
import css from './Navbar.module.css';
import clsx from 'clsx';

const buildLinkClass = ({ isActive }) => {
  return clsx(css.link, isActive && css.active);
};
export const Navbar = () => {
  return (
    <header className={css.header}>

    <nav className={css.nav}>
      <NavLink to="/" exact className={buildLinkClass}>
        Home
      </NavLink>
      <NavLink to="/movie" className={buildLinkClass}>
        Movie
      </NavLink>
    </nav>
    </header>
  );
};
