import { useNavigate } from 'react-router-dom';
import TodoForm from "../../ui/TodoForm";
import { useContext } from "react";
import { TodoContext } from "../../context/TodoContext";

export function CreatePage () {
  const { addTodo } = useContext(TodoContext);
  const navigate = useNavigate();

  const submitFn = (e) => {
    e.preventDefault();
    const form = new FormData(e.target);
    const {description} = Object.fromEntries(form);
    if (description.length > 0) {
      addTodo(description);
      navigate('/');
    }
  }

  return (
    <>
      <h1>Create TODO</h1>
      <TodoForm submitFn={submitFn} btnText={'Create'}/>
    </>
  )
}