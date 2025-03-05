import { NavLink } from 'react-router-dom';
import clsx from 'clsx';
import s from './Navigation.module.css';
import { useSelector } from 'react-redux';
import { selectIsLoggedIn } from '../../redux/auth/selectors';

const Navigation = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn); 

  return (
    <>
      <NavLink className={({ isActive }) => clsx(s.link, isActive && s.active)} to='/'>
        Home
      </NavLink>
      {isLoggedIn && (
        <NavLink className={({ isActive }) => clsx(s.link, isActive && s.active)} to='/contacts'>
          Contacts
        </NavLink>
      )}
    </>
  );
};

export default Navigation;
