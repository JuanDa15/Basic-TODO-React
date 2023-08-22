export const todoInitialState = (initialValue) => ({
  todos: initialValue,
  search: ''
})
export const todoReducerActionTypes = {
  refresh: 'REFRESH',
  add: 'ADD',
  toggleStatus: 'TOGGLE_STATUS',
  delete: 'DELETE',
  updateEditingStatus: 'UPDATE_EDITING_STATUS',
  update: 'UPDATE',
  setSearch: 'SET_SEARCH'
}

const reducerObj = {
  [todoReducerActionTypes.refresh]: (state, payload) => {
    const { todos, ...others } = state;
    return {
      ...others,
      todos: payload
    }
  },
  [todoReducerActionTypes.add]: (state, payload) => {
    const {todos, ...others} = state;
    const {description, onUpdate} = payload;
    const body = {
      description: description,
      isCompleted: false,
      isEditing: false,
      id: crypto.randomUUID(),
      createdAt: new Date().toLocaleString(),
      updatedAt: new Date().toLocaleString()
    }
    const exist = todos.find(todo => todo.id === body.id);
    if (exist)  return {...state};
    onUpdate([...todos, body])
    return {
      ...others,
      todos: [...todos, body]
    }
  },
  [todoReducerActionTypes.toggleStatus]: (state, payload) => {
    const {todos, ...others} = state;
    const {id, onUpdate} = payload;
    const todoPosition = todos.findIndex(todo => todo.id === id);
    const todosCopy = structuredClone(todos);
    if (todoPosition === -1) return;

    todosCopy[todoPosition]['isCompleted'] = !todosCopy[todoPosition]['isCompleted'];
    todosCopy[todoPosition]['updatedAt'] = new Date().toLocaleString();
    onUpdate(todosCopy);
    return {
      ...others,
      todos: todosCopy
    }
  },
  [todoReducerActionTypes.delete]: (state, payload) => {
    const {todos, ...others} = state;
    const {id, onUpdate} = payload;
    const updatedTodos = todos.filter(todo => todo.id !== id);
    onUpdate(updatedTodos);
    return {
      ...others,
      todos: updatedTodos
    }
  },
  [todoReducerActionTypes.updateEditingStatus]: (state, payload) => {
    const {todos, ...others} = state;
    const {id, onUpdate} = payload;
    const position = todos.findIndex(todo => todo.id === id);
    const todosCopy = structuredClone(todos);
    todosCopy[position]['isEditing'] = !todosCopy[position]['isEditing'];
    onUpdate(todosCopy);
    return {
      ...others,
      todos: todosCopy
    }
  },
  [todoReducerActionTypes.update]: (state, payload) => {
    const { id, description, onUpdate } = payload;
    const {todos, ...others} = state;

    const position = todos.findIndex(todo => todo.id === id);
    const todosCopy = structuredClone(todos);
    todosCopy[position]['description'] = description;
    todosCopy[position]['isEditing'] = false;
    todosCopy[position]['updatedAt'] = new Date().toLocaleString();
    onUpdate(todosCopy);
    return {
      ...others,
      todos: todosCopy
    }
  },
  [todoReducerActionTypes.setSearch]: (state, payload) => {
    return {
      ...state,
      search: payload
    }
  }
}

export const todoReducer = (state, action) => {
  if(action.type in reducerObj) {
    return reducerObj[action.type](state, action.payload)
  }
  return state
}