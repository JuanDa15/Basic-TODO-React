import './TodoList.css';

export default function TodoList({ children }) {
  return (
    <ul>
      {children}
    </ul>
  )
}