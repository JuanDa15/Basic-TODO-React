export default function TodoError({ error }) {
  return (
    <p style={{
      backgroundColor: 'red', color: 'darkred', border: '1px solid darkred', padding: '1rem', borderRadius: '0.5rem'
    }}>{error}</p>
  )
}