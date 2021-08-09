import { useContext } from "react";
import { AppContext } from "../../../context/AppProvider";
import "./modalsuccess.css";

function ModalSuccess() {
  //state from AppContext
  const { showSuccess, setShowSuccess } = useContext(AppContext);
  //Flag for show or no the modal with displey none according to the state "showError"
  const renderModal = showSuccess
    ? "background__modalsuccess"
    : "background__modalsuccess disable";
  return (
    <div className={renderModal}>
      <div className="modalsuccess">
        <img
          className="modalsuccess__gif"
          src="/assets/gif-success.gif"
          alt="gif face confused"
        />
        <h3 className="modalsuccess__title">SUCCESS!</h3>
        <p className="modalsuccess__text">WUJU! Everything is working.</p>
        <button
          className="modalsuccess__btn"
          onClick={() => setShowSuccess(false)}
        >
          CONTINUE
        </button>
      </div>
    </div>
  );
}

export default ModalSuccess;
