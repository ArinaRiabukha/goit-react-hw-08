import ContactForm from "./components/ContactForm/ContactForm"
import SearchBox from "./components/SearchBox/SearchBox"
import ContactList  from "./components/ContactList/ContactList"
import s from "./App.module.css"
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { fetchContacts } from "./redux/contactsOps";
import { selectContacts, selectError, selectLoading } from "./redux/contactsSlice";

const App = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts);
  const isLoading = useSelector(selectLoading);
  const error = useSelector(selectError);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <div className={s.container}>
      <h1 className={s.title}>Phonebook</h1>
      <ContactForm />
      {isLoading && <p className={s.alert}>Loading contacts...</p>}
      {error && <p className={s.alert}>Error: {error}</p>}
      {contacts.length > 0 && <SearchBox />}
      <ContactList contacts={contacts} />
    </div>
  );
};

export default App;