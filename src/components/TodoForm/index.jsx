import "./TodoForm.css";

export default function TodoForm({ addTodo, toggleModal }){
  const handleSubmit = (e) => {
    e.preventDefault();
    const form = new FormData(e.target);
    const {description} = Object.fromEntries(form);
    if (description.length > 0) {
      addTodo(description);
      toggleModal();
    }
  }

  return(
    <form className="TodoForm" onSubmit={handleSubmit}>
      <label >Add a new task</label>
      <textarea
        name="description"
        placeholder="Learn to read minds"
      />
      <div className="buttons-wrapper">
        <button type="button" onClick={toggleModal}>Cancel</button>
        <button type="submit" >Add</button>
      </div>
    </form>
  )
}