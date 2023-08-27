import { useLocation, useNavigate, useParams } from "react-router-dom";
import TodoForm from "../../ui/TodoForm";
import { useContext } from "react";
import { TodoContext } from "../../context/TodoContext";

export function EditPage () {
  const navigate = useNavigate()
  const location = useLocation()

  const { id } = useParams()
  const { updateTodo, getTodo, loading } = useContext(TodoContext)

  let todo;

  if (loading) {
    return <h1>Loading...</h1>
  }
  console.log(location)
  if (location.state?.todo ) {
    todo = location.state.todo;
  } else {
    todo = getTodo(id)
  }


  const submitFn = (e) => {
    e.preventDefault();
    const form = new FormData(e.target);
    const { description } = Object.fromEntries(form);

    if (description.length === 0) {
      e.target.value = todo?.description;
    }
    if (description === todo?.description) {
      return;
    }
    if (description.length > 0) {
      updateTodo(todo?.id, description);
      navigate('/');
    }
  }

  return (
    <>
      <h1>Edit Todo</h1>
      <TodoForm submitFn={submitFn} description={todo?.description} btnText={'Edit'}/>
    </>
  )
}