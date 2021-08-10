import "./redeems.css";
import Order from "../../components/order/Order";
import Pagination from "../../components/pagination/Pagination";

import { OrdersContext } from "../../context/OrdersProvider";
import { useContext, useState } from "react";

import usePagination from "../../hooks/usePagination";

function Redeems() {
  //STATES
  const { ordersData } = useContext(OrdersContext);
  //Variable for Pagination
  const PER_PAGE = 10;
  const pages = usePagination(ordersData, PER_PAGE,);
  const totalFound = ordersData.length;
  const numberJump = Math.ceil(totalFound / PER_PAGE);
  //Function with map to render the order's history
  const renderOrders = pages.currentData().map((order) => {
    const id = order.productId;
    const name = order.name;
    const category = order.category;
    const cost = order.cost;
    const date = order.createDate;
    const img = order.img.hdUrl;
    return (
      <Order
        key={id}
        id={id}
        name={name}
        category={category}
        cost={cost}
        date={date}
        img={img}
      />
    );
  });

  return (
    <section className="redeems">
      <h2 className="redeems__title">ORDERS HISTORY</h2>
      <h3 className="redeems__subtitle">History of your orders</h3>
      <div className="redeems__pagination">
        <Pagination
          prevPage={pages.prev}
          nextPage={pages.next}
          jump={pages.jump}
          numberJump={numberJump}
        />
      </div>
      <div className="redeems__orders">{renderOrders}</div>
      <div className="redeems__pagination">
        <Pagination
          prevPage={pages.prev}
          nextPage={pages.next}
          jump={pages.jump}
          numberJump={numberJump}
        />
      </div>
    </section>
  );
}

export default Redeems;
