import { useNavigate } from "react-router-dom";
import "./TodoForm.css";

export default function TodoForm({ submitFn, description = '', btnText}){
  const navigate = useNavigate()

  const handleSubmit = submitFn || function(e) {e.preventDefault();console.log('submitFn not defined')}

  return(
    <form className="TodoForm" onSubmit={handleSubmit}>
      <label >Add a new task</label>
      <textarea
        name="description"
        placeholder="Learn to read minds"
        defaultValue={description}
      />
      <div className="buttons-wrapper">
        <button 
          type="button" 
          onClick={() => navigate(-1)}
        >
          Cancel
        </button>
        <button 
          type="submit" 
        >
          {btnText}
        </button>
      </div>
    </form>
  )
}