export default function TodoCounter ({ total, completed }) {
  return (
    <>
      <h2 style={{ margin: 0 }}>
        {completed} TODO <br /> completed of {total}
      </h2>
    </>
  )
}