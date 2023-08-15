import { createContext, useState } from 'react'

export const ModalContext = createContext();

export function ModalProvider({ children }) {
  const [isOpen, setIsOpen] = useState(false);
 
  const toggleModal = () => {
    setIsOpen(!isOpen);
  }

  return (
    <ModalContext.Provider value={{
      isOpen,
      toggleModal
    }}>
      {children}
    </ModalContext.Provider>
  )

}