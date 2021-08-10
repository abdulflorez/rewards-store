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
          src="https://media0.giphy.com/media/18lTyvKRQTnSaQ1otq/giphy.gif?cid=790b7611789b256538f08208a50419c4d1b30cf61f7fe9a9&rid=giphy.gif&ct=g"
          alt="gif face happy"
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
