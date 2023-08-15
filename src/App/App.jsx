import { ModalProvider } from "../context/ModalContext";
import { TodoProvider } from "../context/TodoContext";
import AppUI from "./AppUI";

export default function App() {
  return (
    <>
      <TodoProvider>
        <ModalProvider>
          <AppUI />
        </ModalProvider>
      </TodoProvider>
    </>
  )
}