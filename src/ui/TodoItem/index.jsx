import { CheckIcon, EditIcon, TrashIcon, XmarkIcon } from '../Icons/icons';
import './TodoItem.css';

export default function TodoItem({ todo, toggleStatus, deleteTodo, onUpdateTodo }) {

  return (
    <li>
      <span onClick={() => toggleStatus(todo.id)}>
        {todo.isCompleted ? <CheckIcon /> : <XmarkIcon />}
      </span>
      
      <p 
        className={todo.isCompleted ? 'line-through' : ''} 
      >
        {todo.description}
      </p>
        
      <div style={{
        display: 'flex',
        flexDirection: 'row',
        gap: '0.5rem'
      }}>
        <button onClick={ onUpdateTodo }>
          <EditIcon />
        </button>
        <button onClick={() => deleteTodo(todo.id)}>
          <TrashIcon />
        </button>
      </div>
    </li>
  )
}