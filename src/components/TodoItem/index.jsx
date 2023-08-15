import { CheckIcon, TrashIcon, XmarkIcon } from '../Icons/icons';
import './TodoItem.css';

export default function TodoItem({ todo, toggleStatus, deleteTodo, onEditing, onUpdateTodo }) {

  const handleBlur = (e) => {
    const value = e.target.value;
    if (value.length === 0) {
      e.target.value = todo.description;
    }
    if (value === todo.description) {
      return;
    }
    onUpdateTodo(todo.id, value);
  }
  return (
    <li>
      <span onClick={() => toggleStatus(todo.id)}>
        {todo.isCompleted ? <CheckIcon /> : <XmarkIcon />}
      </span>
      {
        !todo.isEditing &&  (
          <p 
            className={todo.isCompleted ? 'line-through' : ''} 
            onDoubleClick={ () => onEditing(todo.id)}
          >
            {todo.description}
          </p>
        )
      }
      {
        todo.isEditing &&  <input type="text" defaultValue={todo.description} onBlur={handleBlur}/>
      }
      <button onClick={() => deleteTodo(todo.id)}>
        <TrashIcon />
      </button>
    </li>
  )
}