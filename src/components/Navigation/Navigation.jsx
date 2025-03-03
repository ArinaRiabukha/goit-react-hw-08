import { NavLink } from 'react-router-dom';
import clsx from 'clsx';
import s from './Navigation.module.css';

const Navigation = () => {
  return (
    <>
      <NavLink className={({ isActive }) => clsx(s.link, isActive && s.active)} to='/'>
        Home
      </NavLink>
      <NavLink className={({ isActive }) => clsx(s.link, isActive && s.active)} to='/contacts'>
        Contacts
      </NavLink>
    </>
  );
};

export default Navigation;
