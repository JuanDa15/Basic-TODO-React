import { createContext, useState } from "react";
import { useLocalStorage } from '../hooks/useLocalStorage';


const TODO_STORAGE_KEY = 'TODOS_V1'
export const TodoContext = createContext();

export function TodoProvider({ children }) {
  const [todos, updateTodos, loading, error] = useLocalStorage(TODO_STORAGE_KEY, []);
  const [search, setSearch] = useState('')
  
  const addTodo = (description) => {
    const body = {
      description: description,
      isCompleted: false,
      isEditing: false,
      id: crypto.randomUUID(),
      createdAt: new Date().toLocaleString(),
      updatedAt: new Date().toLocaleString()
    }

    const exist = todos.find(todo => todo.id === body.id);
    if (exist) {
      return;
    }

    updateTodos([...todos, body]);
  }

  const toggleTodoStatus = (id) => {
    const todoPosition = todos.findIndex(todo => todo.id === id);
    const todosCopy = structuredClone(todos);
    if (todoPosition === -1) return;

    todosCopy[todoPosition]['isCompleted'] = !todosCopy[todoPosition]['isCompleted'];
    todosCopy[todoPosition]['updatedAt'] = new Date().toLocaleString();
    updateTodos([...todosCopy])
  }
  
  const deleteTodo = (id) => {
    const updatedTodos = todos.filter(todo => todo.id !== id);
    updateTodos([...updatedTodos]);
  }

  const updateTodo = (id, description) => {
    const position = todos.findIndex(todo => todo.id === id);
    const todosCopy = structuredClone(todos);
    todosCopy[position]['description'] = description;
    todosCopy[position]['isEditing'] = false;
    todosCopy[position]['updatedAt'] = new Date().toLocaleString();
    updateTodos([...todosCopy])
  }

  const getTodo = (id) => {
    return todos.find(todo => todo.id === id)
  }
  const searchedTodos = todos.filter(todo => todo.description.toLowerCase().includes(search.toLowerCase()))
  const completedTodos = searchedTodos.filter(todo => todo.isCompleted).length;
  const todosLength = searchedTodos.length;

  return (
    <TodoContext.Provider value={{
      todos: searchedTodos,
      addTodo,
      toggleTodoStatus,
      deleteTodo,
      updateTodo,
      completedTodos,
      todosLength,
      search,
      setSearch,
      getTodo,
      loading,
      error
    }}>
      {children}
    </TodoContext.Provider>
  );

}