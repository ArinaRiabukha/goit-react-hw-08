import { Field, Form, Formik } from 'formik';
import { useDispatch } from 'react-redux';
import { registerThunk } from '../../redux/auth/AuthOps';
import { Link } from 'react-router-dom';
import s from "./RegistrationForm.module.css"

const RegistrationForm = () => {
  const dispatch= useDispatch();
  const initialValues = {
    email: '',
    name: '',
    password: '',
  };
  const handleSubmit = (values, options) => {
    console.log(values);
    dispatch(registerThunk(values));
    options.resetForm();
  };

  return (
    <div className={s.formWrapper}>
      <Formik initialValues={initialValues} onSubmit={handleSubmit}>
        <Form className={s.form}>
          <label>
            <span className={s.typeHeading}>Name:</span>
            <Field name='name' className={s.input} />
          </label>
          <label>
            <span className={s.typeHeading}>Email:</span>
            <Field name='email' className={s.input} />
          </label>
          <label>
            <span className={s.typeHeading}>Password:</span>
            <Field name='password' type='password' className={s.input} />
          </label>
          <button type='submit' className={s.regButton}>Register</button>
          <p className={s.link}>
            Already have an account? <Link to='/login'>Get IT!</Link>
          </p>
        </Form>
      </Formik>
    </div>
  );
};
export default RegistrationForm;