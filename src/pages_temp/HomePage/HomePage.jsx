import { useSelector } from "react-redux";
import s from "./HomePage.module.css"
import { selectIsLoggedIn, selectUser } from "../../redux/auth/AuthSelectors";

const HomePage = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const user = useSelector(selectUser);

  return (
    <div className={s.container}>
      <h1 className={s.title}>
        {isLoggedIn ? `Welcome back, ${user.name}!` : 'Welcome to Your Contact Book!'}
      </h1>
      <p className={s.text}>
        {isLoggedIn
          ? 'Manage your contacts easily and keep them organized.'
          : 'Sign up or log in to get started!'}
      </p>
    </div>
  );
};

export default HomePage