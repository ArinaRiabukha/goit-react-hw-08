import { useDispatch } from "react-redux";
import s from "./Contact.module.css"
import { deleteContact } from "../../redux/contacts/operations";
import toast from "react-hot-toast";

const Contact = ({ name, number, id }) => {

  const dispatch = useDispatch();
  return (
    <>
    <div className={s.info}>
      <p className={s.name}>{name}</p>
      <p className={s.number}>{number}</p>
      </div>
      <button className={s.deleteBtn} onClick={() => dispatch(deleteContact(id), toast.success('Contact deleted successfully!'))}>Delete</button>
    </>
  );
};

export default Contact;