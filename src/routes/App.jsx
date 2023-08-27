import { TodoProvider } from "../context/TodoContext";
import { HashRouter, Route, Routes } from "react-router-dom";
import { HomePage } from "./HomePage";
import { CreatePage } from "./CreatePage";
import { EditPage } from "./EditPage";
import { NotFoundPage } from "./NotFoundPage";

export default function App() {
  return (
    <>
      <TodoProvider>
        <HashRouter>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/create" element={<CreatePage />} />
            <Route path="/edit/:id" element={<EditPage />} />
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </HashRouter>
      </TodoProvider>
    </>
  )
}