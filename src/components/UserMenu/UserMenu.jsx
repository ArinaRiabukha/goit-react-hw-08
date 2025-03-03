import { useDispatch, useSelector } from 'react-redux';
import { selectUser } from '../../redux/auth/AuthSelectors';
import { logoutThunk } from '../../redux/auth/AuthOps';

const UserMenu = () => {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();

  return (
    <div>
      {user?.name && <p>{user.email}</p>}
      <button onClick={() => dispatch(logoutThunk())}>Logout</button>
    </div>
  );
};

export default UserMenu;
