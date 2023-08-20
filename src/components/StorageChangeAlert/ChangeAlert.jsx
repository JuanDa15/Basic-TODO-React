import WithStorageListener from "./withStorageListener"
import './ChangeAlert.css';
function ChangeAlert({show, toggleShow}) {
  
  if (show) {
    return (
      <div className="alert-backdrop">
        <div className="alert-wrapper">
          <p>Hubo cambios</p>
          <button onClick={toggleShow}>Refrescar</button>
        </div>
      </div>
    )
  }

  return null
}

const ChangeAlertWithStorageListener = WithStorageListener(ChangeAlert)

export { ChangeAlertWithStorageListener }