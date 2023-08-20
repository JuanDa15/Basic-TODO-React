import { useEffect, useState } from "react"
import { TODO_STORAGE_KEY } from "../../hooks/useTodo"

export default function useStorageListener() {
  const [storageChange, setStorageChange] = useState(false)

  const handleStorageChange = (change) => {
    if (change.key === TODO_STORAGE_KEY) {
      setStorageChange(true)
    }
  }
  useEffect(() => {
    const storageListener = window.addEventListener('storage', handleStorageChange)
    return () => {
      removeEventListener(storageListener, handleStorageChange)
    }
  }, [])

  const toggleShow = () => {
    setStorageChange(false)
    props.sync()
  }

  return {
    storageChange,
    toggleShow
  }
}