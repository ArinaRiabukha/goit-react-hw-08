import s from "./App.module.css"
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import Layout from "./components/Layout";
import HomePage from "./pages_temp/HomePage/HomePage";
import ContactsPage from "./pages_temp/ContactsPage/ContactsPage";
import LoginPage from "./pages_temp/LoginPage/LoginPage";
import RegistrationPage from "./pages_temp/RegistrationPage/RegistrationPage";
import { refreshUser } from "./redux/auth/operations";
import { selectIsRefreshing } from "./redux/auth/AuthSelectors";
import PrivateRoute from "./components/PrivateRoute/PrivateRoute";
import RestrictedRoute from "./components/RestrictedRoute/RestrictedRoute";
import { Toaster } from "react-hot-toast";

const App = () => {
  const dispatch = useDispatch();
  const isRefreshing = useSelector(selectIsRefreshing);
  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  return isRefreshing ? null : (
    <div className={s.container}>
      <Toaster /> 
      <Routes>
        <Route path="/" element={<Layout />} >
        <Route index element={<HomePage/>} />
        <Route
          path="contacts"
          element={<PrivateRoute><ContactsPage/></PrivateRoute>}
        />
        </Route>
          <Route path="/register" element={<RegistrationPage/>} />
          <Route path="/login" element={<RestrictedRoute component={LoginPage} redirectTo = '/contacts'/>} />
        <Route path="*" element={<p>Not Found</p>} />
      </Routes>
    </div>
  );
};

export default App;