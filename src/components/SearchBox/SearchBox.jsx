import { useDispatch, useSelector } from "react-redux";
import s from "./SearchBox.module.css"
import { changeFilter } from "../../redux/filtersSlice";

const SearchBox = () =>{

    const dispatch = useDispatch();
    const filterValue = useSelector(state => state.filters.name);
    return (
        <>
        <p className={s.title}>Find contacts by name</p>
        <input className={s.input} 
        value={filterValue}
        onChange={e => dispatch(changeFilter(e.target.value))}  
        type="text" />
        </>
    )
};

export default SearchBox;