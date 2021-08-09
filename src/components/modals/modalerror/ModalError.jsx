import { useContext } from "react";
import { AppContext } from "../../../context/AppProvider";
import "./modalerror.css";

function ModalError() {
  //state from AppContext
  const { showError, setShowError } = useContext(AppContext);
  //Flag for show or no the modal with displey none according to the state "showError"
  const renderModal = showError ? "background__modalerror" : "background__modalerror disable";
  return (
    <div className={renderModal}>
      <div className="modalerror">
        <img
          className="modalerror__gif"
          src="/assets/gif-error.gif"
          alt="gif face confused"
        />
        <h3 className="modalerror__title">ERROR...so sorry!</h3>
        <p className="modalerror__text">OH NO! Something went wrong...</p>
        <button className="modalerror__btn" onClick={() => setShowError(false)}>
          TRY AGAYN
        </button>
      </div>
    </div>
  );
}

export default ModalError;
