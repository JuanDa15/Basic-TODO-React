import TodoCounter from '../components/TodoCounter'
import TodoHeader from '../components/TodoHeader'
import TodoSearch from '../components/TodoSearch'
import TodoList from '../components/TodoList'
import TodoItem from '../components/TodoItem'
import TodoAdd from '../components/TodoAdd'
import Modal from '../components/Modal'
import TodoForm from '../components/TodoForm'
import { useModal } from './../hooks/useModal'
import { useTodos } from './../hooks/useTodo'

export default function App() {
  const { 
    isOpen, 
    toggleModal 
  } = useModal()
  const { 
    todos, 
    toggleTodoStatus, 
    deleteTodo, 
    updateIsEditingStatus, 
    updateTodo,
    completedTodos, 
    todosLength,
    addTodo,
    search, 
    setSearch
  } = useTodos()

  return (
    <div style={{
      position: 'relative',
      minHeight: '100vh',
      minWidth: '500px'
    }}>
      <TodoHeader>
        <TodoCounter 
          total={todosLength} 
          completed={completedTodos}
        />
        <TodoSearch 
          search={search} 
          setSearch={setSearch}
        />
      </TodoHeader>
      <TodoList>
        {
          todos.map(todo => (
            <TodoItem 
              key={todo.id} 
              todo={todo} 
              toggleStatus={toggleTodoStatus}
              deleteTodo={deleteTodo}
              onEditing={updateIsEditingStatus}
              onUpdateTodo={updateTodo}
            />
          ))
        }
      </TodoList>
      <TodoAdd
        openModal={isOpen}
        toggleModal={toggleModal}
      />

      {
        isOpen && <Modal >
          <TodoForm addTodo={addTodo} toggleModal={toggleModal}/>
        </Modal>
      }
    </div>
  )
}