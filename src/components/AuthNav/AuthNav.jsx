import { NavLink } from 'react-router-dom';
import clsx from 'clsx';
import s from './AuthNav.module.css';

const AuthNav = () => {
  return (
    <div className={s.container}>
      <NavLink className={({ isActive }) => clsx(s.link, isActive && s.active)} to='/register'>
      Sign up
      </NavLink>
      <NavLink className={({ isActive }) => clsx(s.link, isActive && s.active)} to='/login'>
        Log in
      </NavLink>
    </div>
  );
};

export default AuthNav;
