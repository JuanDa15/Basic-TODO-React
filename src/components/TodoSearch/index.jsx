import { useContext, useRef } from 'react';
import './TodoSearch.css';
import { TodoContext } from '../../context/TodoContext';

export default function TodoSearch() {
  const {search, setSearch} = useContext(TodoContext);

  const handleChange = (e) => {
    const value = e.target.value;
    setSearch(value);
  }
  const ref = useRef(search)
  return (
    <input ref={ref} type="search" placeholder="Search a todo" onChange={ handleChange }/>
  )
}