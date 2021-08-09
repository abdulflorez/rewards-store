import "./pagination.css";

function Pagination({ prevPage, nextPage, jump, numberJump }) {
  //Function to  create array with the number of pages from numberJump
  const numberForJump = () => {
    const pagesNumbers = [];
    for (let i = 1; i <= numberJump; i++) {
      pagesNumbers.push(i);
    }
    return pagesNumbers;
  };
  //Function for Dynamic render of buttons for jump
  const renderJumps = numberForJump().map((element) => (
    <button
      key={element}
      className="pagination__btn"
      onClick={() => jump(element)}
    >
      {element}
    </button>
  ));
  return (
    <div className="pagination">
      <button className="pagination__btn right" onClick={prevPage}>
        v
      </button>
      {renderJumps}
      <button className="pagination__btn left" onClick={nextPage}>
        v
      </button>
    </div>
  );
}

export default Pagination;
