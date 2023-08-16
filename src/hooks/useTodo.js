import { useState } from "react";
import { useLocalStorage } from './useLocalStorage';


const TODO_STORAGE_KEY = 'TODOS_V1'

export function useTodos() {
  const [todos, updateTodos] = useLocalStorage(TODO_STORAGE_KEY, []);
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

  const updateIsEditingStatus = (id) => {
    const position = todos.findIndex(todo => todo.id === id);
    const todosCopy = structuredClone(todos);
    todosCopy[position]['isEditing'] = !todosCopy[position]['isEditing'];
    updateTodos([...todosCopy])
  }

  const updateTodo = (id, description) => {
    const position = todos.findIndex(todo => todo.id === id);
    const todosCopy = structuredClone(todos);
    todosCopy[position]['description'] = description;
    todosCopy[position]['isEditing'] = false;
    todosCopy[position]['updatedAt'] = new Date().toLocaleString();
    updateTodos([...todosCopy])
  }
  const searchedTodos = todos.filter(todo => todo.description.toLowerCase().includes(search.toLowerCase()))
  const completedTodos = searchedTodos.filter(todo => todo.isCompleted).length;
  const todosLength = searchedTodos.length;

  return {
    todos: searchedTodos,
    addTodo,
    toggleTodoStatus,
    deleteTodo,
    updateIsEditingStatus,
    updateTodo,
    completedTodos,
    todosLength,
    search,
    setSearch
  }

}