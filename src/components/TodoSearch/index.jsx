import { useRef } from 'react';
import './TodoSearch.css';

export default function TodoSearch({ search, setSearch, loading }) {
  const ref = useRef(search)
  const handleChange = (e) => {
    const value = e.target.value;
    setSearch(value);
  }
  return (
    <input 
      ref={ref} 
      type="search" 
      placeholder="Search a todo" 
      onChange={ handleChange }
      disabled={loading}
    />
  )
}