import { useContext } from "react";
import { ModalContext } from "../context/ModalContext";

import TodoCounter from "../components/TodoCounter";
import TodoItem from "../components/TodoItem";
import TodoList from "../components/TodoList";
import TodoSearch from "../components/TodoSearch";
import TodoAdd from "../components/TodoAdd";
import Modal from "../components/Modal";
import TodoForm from "../components/TodoForm";
import { TodoContext } from "../context/TodoContext";

export default function AppUI() {
  const { isOpen, toggleModal } = useContext(ModalContext)
  const { todos, toggleTodoStatus, deleteTodo, updateIsEditingStatus, updateTodo } = useContext(TodoContext)
  
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
          <TodoForm />
        </Modal>
      }
    </div>
  )
}