import { useEffect, useState } from "react";

export function useLocalStorage(key, initialValue) {
  const [sync, setSync] = useState(true);
  const [storedValue,setStoredValue] = useState(initialValue);
  const [loading,setLoading] = useState(true);
  const [error,setError] = useState(false);

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
          setStoredValue(parsedItem);
        }
        setLoading(false);
        setError(null)
        setSync(true)
      } catch (error) {
        setLoading(false);
        setError(error);
        setSync(false)
      } 
    },800);
  },[sync]);
  
  const updateValue = (newItem) => {
    localStorage.setItem(key,JSON.stringify(newItem));
    setStoredValue(newItem);
  }

  const syncValue = () => {
    setLoading(true);
    setSync(false);
  }

  return [storedValue, updateValue, loading, error, syncValue]
}