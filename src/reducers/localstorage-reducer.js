export const initialState = (initialValue) => ({
  sync: true,
  storedValue: initialValue,
  loading: true,
  error: null
})

export const localStorageActionTypes = {
  success: 'SUCCESS',
  error: 'ERROR',
  update: 'UPDATE',
  sincronize: 'SINCRONIZE'
}

const reducerObj = (state, payload) => ({
  [localStorageActionTypes.success]: {
    ...state,
    storedValue: payload,
    loading: false,
    error: null,
    sync: true
  },
  [localStorageActionTypes.error]: {
    ...state,
    loading: false,
    error: payload,
    sync: false
  },
  [localStorageActionTypes.update]: {
    ...state,
    storedValue: payload
  },
  [localStorageActionTypes.sincronize]: {
    ...state,
    loading: true,
    sync: false
  }
})

export const localStorageReducer = (state, action) => {
  if (action.type in reducerObj(state)) {
    return reducerObj(state, action.payload)[action.type]
  }
  return state;
}