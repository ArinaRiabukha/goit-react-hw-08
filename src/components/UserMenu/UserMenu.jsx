import { useDispatch, useSelector } from 'react-redux';
import { selectUser } from '../../redux/auth/AuthSelectors';
import { logoutThunk } from '../../redux/auth/operations';
import s from "./UserMenu.module.css"

const UserMenu = () => {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();

  return (
    <div className={s.container}>
      {user?.name && <p className={s.userEmail}>{user.email}</p>}
      <button onClick={() => dispatch(logoutThunk())} className={s.logoutBtn}>Logout</button>
    </div>
  );
};

export default UserMenu;
