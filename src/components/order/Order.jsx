import "./order.css";

function Order({ id, name, category, cost, date, img }) {
  return (
    <div className="order">
      <img className="order__img" src={img} alt="" />
      <article className="order__data">
        <p className="order__data--text">{name}</p>
        <p className="order__data--text">{category}</p>
        <p className="order__data--text">Cost: {cost}</p>
        <p className="order__data--text">Date: {date}</p>
        <p className="order__data--text">Id: {id}</p>
      </article>
    </div>
  );
}

export default Order;
