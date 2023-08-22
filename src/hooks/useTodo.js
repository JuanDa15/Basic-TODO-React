import { useEffect, useReducer, useState } from "react";
import { useLocalStorage } from './useLocalStorage';
import { todoInitialState, todoReducer, todoReducerActionTypes } from "../reducers/todo-reducer";


export const TODO_STORAGE_KEY = 'TODOS_V1'

export function useTodos() {
  
  const {
    storedValue, 
    loading, 
    error,
    onUpdate, 
    onSync
  } = useLocalStorage(TODO_STORAGE_KEY, []);
  
  const [state, dispatch] = useReducer(todoReducer, todoInitialState(storedValue));

  const { todos, search } = state;
  
  useEffect(() => {
    dispatch({
      type: todoReducerActionTypes.refresh,
      payload: storedValue
    })
  },[storedValue])

  const addTodo = (description) => {
    dispatch({
      type: todoReducerActionTypes.add,
      payload: {
        description,
        onUpdate
      }
    })
  }

  const toggleTodoStatus = (id) => {
    dispatch({
      type: todoReducerActionTypes.toggleStatus,
      payload: {
        id,
        onUpdate
      }
    })
  }
  
  const deleteTodo = (id) => {
    dispatch({
      type: todoReducerActionTypes.delete,
      payload: {
        id,
        onUpdate
      }
    })
  }

  const updateIsEditingStatus = (id) => {
    dispatch({
      type: todoReducerActionTypes.updateEditingStatus,
      payload: {
        id,
        onUpdate
      }
    })
  }

  const updateTodo = (id, description) => {
    dispatch({
      type: todoReducerActionTypes.update,
      payload: {
        id, description, onUpdate
      }
    })
  }

  const setSearch = (search) => {
    dispatch({
      type: todoReducerActionTypes.setSearch,
      payload: search
    })
  }

  const searchedTodos = todos.filter(
    todo => todo.description.toLowerCase().includes(
      search.toLowerCase()
    )
  )

  const completedTodos = searchedTodos.filter(
    todo => todo.isCompleted
  ).length;
  
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
    setSearch,
    loading, 
    error,
    onSync
  }

}