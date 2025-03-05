import { useDispatch, useSelector } from "react-redux";
import ContactForm from "../../components/ContactForm/ContactForm"
import SearchBox from "../../components/SearchBox/SearchBox";
import Contactlist from "../../components/ContactList/ContactList";
import { selectContacts, selectError, selectLoading } from "../../redux/contacts/selectors";
import { useEffect } from "react";
import { fetchContacts } from "../../redux/contacts/operations";


const ContactsPage = () => {
  const contacts = useSelector(selectContacts);
    const isLoading = useSelector(selectLoading);
    const error = useSelector(selectError);
    const dispatch = useDispatch();
  
  useEffect(() => {
    dispatch(fetchContacts ());
  }, [dispatch]);


  return (
    <>
              <ContactForm />
              {isLoading && <p>Loading contacts...</p>}
              {error && <p>Error: {error}</p>}
              {contacts.length > 0 && <SearchBox />}
              <Contactlist contacts={contacts} />
            </>
  )
}

export default ContactsPage