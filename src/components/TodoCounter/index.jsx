import './TodoCounter.css';

export default function TodoCounter ({ total, completed, loading }) {
  return (
    <>
      <h2 className={`${loading && 'loading'}`} style={{ margin: 0 }}>
        {completed} TODO <br /> completed of {total}
      </h2>
    </>
  )
}