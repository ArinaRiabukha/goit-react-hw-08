import { Field, Form, Formik, ErrorMessage } from 'formik';
import s from "./ContactForm.module.css"
import * as Yup from 'yup';
import { useDispatch, useSelector } from 'react-redux';
import { addContact } from '../../redux/contacts/operations.js';
import { selectContacts, selectLoading } from '../../redux/contacts/contsctsSelectors.js';
import toast from 'react-hot-toast';

const ContactForm = () => {

  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts);
  const isLoading = useSelector(selectLoading);

    const onlyLetters = /^[A-Za-zА-Яа-яЄєІіЇїҐґ-\s]+$/;
    const onlyNumbers = /^[0-9-]+$/;

    const applySchema = Yup.object().shape({
        name: Yup.string()
          .required('This field is required')
          .min(3, 'Min 3 symbols')
          .max(50, 'Max 50 symbols')
          .matches(onlyLetters, 'Only lettters allowed'),
          number: Yup.string() 
          .required('This field is required')
          .min(3, 'Min 3 symbols')
          .max(50, 'Max 50 symbols')
          .matches(onlyNumbers, 'Only numbers and dashes allowed'),
      });

      const handleSubmit = async (values, { resetForm }) => {
        const { name, number } = values;
        const isExisting = contacts.some(contact => contact.number === number);

        if (isExisting) {
          toast.error('This contact already exists!'); 
          return;
        }

        dispatch(addContact({ name, number }));
        toast.success('Contact added successfully!');
        resetForm();
    };

    return (
      <Formik
        initialValues={{ name: '', number: '' }}
        validationSchema={applySchema}
        onSubmit={handleSubmit}
      >
        {({ handleSubmit }) => (
          <Form onSubmit={handleSubmit} className={s.form}>
            <label>
              <span className={s.title}>Name</span>
              <Field className={s.input} name="name" />
              <ErrorMessage name="name" component="div" className={s.error} />
            </label>

            <label>
              <span className={s.title}>Number</span>
              <Field className={s.input} name="number" />
              <ErrorMessage name="number" component="div" className={s.error} />
            </label>

            <button type="submit" className={s.button} disabled={isLoading}>
              {isLoading ? '...' : 'Add contact'}
            </button>
          </Form>
        )}
      </Formik>
    );
};

export default ContactForm;