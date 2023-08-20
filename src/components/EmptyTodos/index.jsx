export default function EmptyTodo({ message }) {
  return (
    <p style={{
      backgroundColor: 'lightblue', color: 'darkblue', border: '1px solid darkblue', padding: '1rem', borderRadius: '0.5rem'
    }}>
      { message }
    </p>
  )
}