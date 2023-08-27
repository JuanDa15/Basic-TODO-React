import { useContext } from "react"
import TodoCounter from "../../ui/TodoCounter"
import TodoSearch from "../../ui/TodoSearch"
import TodoList from "../../ui/TodoList"
import TodoItem from "../../ui/TodoItem"
import TodoAdd from "../../ui/TodoAdd"
import { TodoContext } from "../../context/TodoContext"
import { useNavigate } from "react-router-dom"

export function HomePage () {
  const { 
    todos, 
    toggleTodoStatus, 
    deleteTodo,
  } = useContext(TodoContext)

  const navigate = useNavigate()

  return (
    <div style={{
      position: 'relative',
      minHeight: '100vh',
    }}>
      <TodoCounter />
      <TodoSearch />
      <TodoList>
        {
          todos.map(todo => (
            <TodoItem 
              key={todo.id} 
              todo={todo} 
              toggleStatus={toggleTodoStatus}
              deleteTodo={deleteTodo}
              onUpdateTodo={ () => navigate(`/edit/${todo.id}`, { state: { todo }})
              }
            />
          ))
        }
      </TodoList>
      <TodoAdd
        action={ () => navigate('/create') }
      />
    </div>
  )
}
  