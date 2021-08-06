import "./product.css";
import { postRedeem } from "../../utils/requests";

import { UserContext } from "../../context/UserProvider";
import { OrdersContext } from "../../context/OrdersProvider";
import { useContext } from "react";

function Product({idProduct, image, name, category, cost }) {
  const { setRefresh} =useContext(UserContext)
  const {setOrdersData} = useContext(OrdersContext) 
  const handleRedeems = (id) =>{
    postRedeem(id, setRefresh, setOrdersData)
  }

  return (
    <div className="product">
      <img
        className="product__icon"
        src="/assets/icons/buy-blue.svg"
        alt="icon blue buy"
      />
      <img
        className="product__icon--hover"
        src="/assets/icons/buy-white.svg"
        alt="icon blue buy"
      />
      <img className="product__image" src={image} alt={name} />
      <hr className="product__line" />
      <p className="product__category">{category}</p>
      <p className="product__name">{name}</p>
      <div className="product__hover">
        <div className="product__price">
        <p className="product__price--value">
          {cost}
        </p>
        <img
            className="product__price--icon"
            src="/assets/icons/coin.svg"
            alt="icon coin"
          />
        </div>

        <button className="product__btn" onClick={()=>handleRedeems(idProduct)}>Enjoy and Reedem Now </button>
      </div>
    </div>
  );
}

export default Product;
