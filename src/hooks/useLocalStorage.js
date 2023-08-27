import { useEffect, useState } from "react";

export function useLocalStorage(key, initialValue) {
  const [storedValue,setStoredValue] = useState(initialValue);
  const [loading,setLoading] = useState(true);
  const [error,setError] = useState(false);

  useEffect( ()=>{
    const storageCallBack = (e) => {
      if (e?.key === key) {
        location.reload()
      }
    }
    setTimeout(()=>{
      window.addEventListener('storage', storageCallBack)
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
      } catch (error) {
        setLoading(false);
        setError(true);
      }
    },800);

    return () => {
      window.removeEventListener('storage', storageCallBack);
    } 
  },[key]);
  
  const updateValue = (newItem) => {
    localStorage.setItem(key,JSON.stringify(newItem));
    setStoredValue(newItem);
  }

  return [storedValue, updateValue, loading, error]
}