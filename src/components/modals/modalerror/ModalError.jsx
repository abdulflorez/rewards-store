import { useContext } from "react";
import { AppContext } from "../../../context/AppProvider";
import "./modalerror.css";

function ModalError() {
  //state from AppContext
  const { showError, setShowError } = useContext(AppContext);
  //Flag for show or no the modal with displey none according to the state "showError"
  const renderModal = showError
    ? "background__modalerror"
    : "background__modalerror disable";
  return (
    <div className={renderModal}>
      <div className="modalerror">
        <img
          className="modalerror__gif"
          src="https://media4.giphy.com/media/Q9YsfdL4IHP9PtTVYo/giphy.gif?cid=790b7611b654ca587e4ebf4c0170764d1c5dfc266b354c1e&rid=giphy.gif&ct=g"
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
