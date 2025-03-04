import { Field, Form, Formik } from 'formik';
import { useDispatch } from 'react-redux';
import { loginThunk } from '../../redux/auth/operations';
import { Link, useNavigate } from 'react-router-dom';
import s from "./LoginForm.module.css"

const LoginForm = () => {
  const initialValues = {
    email: '',
    password: '',
  };
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const handleSubmit = (values, options) => {
    console.log(values);
    dispatch(loginThunk(values))
      .unwrap()
      .then( () => {
        navigate('/contacts', { replace: true });
      })
      .catch(() => alert('Invalid data'));

    options.resetForm();
  };
  return (
    <div className={s.formWrapper}>
      <Formik initialValues={initialValues} onSubmit={handleSubmit}>
        <Form className={s.form}>
          <label>
            <span className={s.typeHeading}>Email:</span>
            <Field name='email' className={s.input}/>
          </label>
          <label>
            <span className={s.typeHeading}>Password:</span>
            <Field name='password' type='password' className={s.input} />
          </label>
          <button type='submit' className={s.regButton}>Register</button>
          <p className={s.link}>
            You do not have account yet? <Link to='/register'>Get IT!</Link>
          </p>
        </Form>
      </Formik>
    </div>
  );
};
export default LoginForm;