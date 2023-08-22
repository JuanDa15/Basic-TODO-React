import { useEffect, useReducer } from "react";
import { initialState, localStorageActionTypes, localStorageReducer } from "../reducers/localstorage-reducer";

export function useLocalStorage(key, initialValue) {
  const [state, dispatch] = useReducer(
    localStorageReducer, initialState(initialValue)
  )
  const { sync, storedValue, loading, error } = state;
 
  const onSuccess = (parsedItem) => {
    dispatch({
      type: localStorageActionTypes.success,
      payload: parsedItem
    })
  }

  const onError = (error) => {
    dispatch({
      type: localStorageActionTypes.error,
      payload: error
    })
  }

  const onUpdate = (item) => {
    localStorage.setItem(key,JSON.stringify(item));
    dispatch({
      type: localStorageActionTypes.update,
      payload: item
    })
  }

  const onSync = () => {
    dispatch({ type: localStorageActionTypes.sincronize })
  }

  useEffect( ()=>{
    setTimeout(()=>{
      try {
        const localStorageItem = localStorage.getItem(key);
        let  parsedItem;
  
        if(!localStorageItem){
          localStorage.setItem(itemName,JSON.stringify(initialValue));
          parsedItem = initialValue;
        } else {
          parsedItem = JSON.parse(localStorageItem);
        }
        onSuccess(parsedItem);
      } catch (error) {
        onError(error)
      } 
    },800);
  },[sync]);

  return {
    storedValue, 
    loading, 
    onSync,
    error, 
    onUpdate
  }
}