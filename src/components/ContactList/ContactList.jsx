import { useSelector } from "react-redux";
import Contact from "../Contact/Contact";
import s from "./ContactList.module.css"
import { selectFilteredContacts } from "../../redux/contacts/selectors";

const Contactlist = () => {
  const filteredContacts = useSelector(selectFilteredContacts);
 
  return (
    <ul className={s.list}>
      {filteredContacts.map(({ id, name, number}) => (
        <li className={s.contact} key={id}>
          <Contact id={id} name={name} number={number}/>
        </li>
      ))}
    </ul>
  );
};

export default Contactlist;