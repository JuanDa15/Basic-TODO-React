import { useContext, useRef } from 'react';
import './TodoSearch.css';
import { TodoContext } from '../../context/TodoContext';
import { useSearchParams } from 'react-router-dom';

export default function TodoSearch() {
  const [searchParams, setSearchParams] = useSearchParams()

  const {search, setSearch} = useContext(TodoContext);
  const paramsValue = searchParams.get('search') || '';

  const handleChange = (e) => {
    const value = e.target.value;
    setSearch(value);
    setSearchParams(params => {
      params.set('search', value)
      return params;
    })
  }
  const ref = useRef(search)
  return (
    <input 
      ref={ref} 
      type="search" 
      placeholder="Search a todo" 
      value={paramsValue || search} 
      onChange={ handleChange } />
  )
}