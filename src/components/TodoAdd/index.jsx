import { AddICon } from "../Icons/icons";
import './TodoAdd.css';
export default function TodoAdd({isOpen, toggleModal}) {
  return (
    <button className="add-btn" onClick={ toggleModal } >
      <AddICon />
    </button>
  );

}