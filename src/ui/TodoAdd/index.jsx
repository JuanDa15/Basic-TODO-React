import { AddICon } from "../Icons/icons";
import './TodoAdd.css';
export default function TodoAdd({ action }) {
  return (
    <button className="add-btn" onClick={ action } >
      <AddICon />
    </button>
  );

}