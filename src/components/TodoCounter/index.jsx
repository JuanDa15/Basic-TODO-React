import { useContext } from "react"
import { TodoContext } from "../../context/TodoContext"

export default function TodoCounter () {
  const { completedTodos, todosLength } = useContext(TodoContext)
  return (
    <>
      <h2 style={{
        margin: 0
      }}>{completedTodos} TODO <br /> completed of {todosLength}</h2>
    </>
  )
}