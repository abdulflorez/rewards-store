import "./product.css";
import { postRedeem } from "../../utils/requests";
import { Link } from "react-router-dom";

import { UserContext } from "../../context/UserProvider";
import { OrdersContext } from "../../context/OrdersProvider";
import { AppContext } from "../../context/AppProvider"
import { useContext } from "react";

function Product({ idProduct, image, name, category, cost }) {
  const { userData, setRefresh } = useContext(UserContext);
  const { setOrdersData } = useContext(OrdersContext);
  const {   setShowSuccess, setShowError } = useContext(AppContext)

  const handleRedeems = (id) => {
    postRedeem(id, setRefresh, setOrdersData, setShowSuccess, setShowError);
  };
  function balanceToRedeem(enough, noEnough) {
    return userData.points > cost ? enough : noEnough;
  }
  const iconBuyBlue = (
    <img
      className="product__icon"
      src="/assets/icons/buy-blue.svg"
      alt="icon blue buy"
    />
  );
  const iconBuyWhite = (
    <img
      className="product__icon--hover"
      src="/assets/icons/buy-white.svg"
      alt="icon blue buy"
    />
  );
  const pointsRemaining = (
    <p className="product__pointsremaining">
      You need {cost - userData.points}
      <img
        className="product__pointsremaining--icon"
        src="/assets/icons/coin.svg"
        alt="icon coin"
      />
    </p>
  );
  const buttonDisable = balanceToRedeem(false, true);
  const redeemButton = (
    <button
      className="product__btn"
      disabled={buttonDisable}
      onClick={() => handleRedeems(idProduct)}
    >
      Enjoy and Reedem Now
    </button>
  );
  const redirectButton = (
    <Link to="/getcoins">
      <button
        className="product__btn disable"
      >
        GET MORE COINS
      </button>
    </Link>
  );

  return (
    <div className="product">
      {balanceToRedeem(iconBuyBlue, pointsRemaining)}
      {balanceToRedeem(iconBuyWhite, null)}
      <img className="product__image" src={image} alt={name} />
      <hr className="product__line" />
      <p className="product__category">{category}</p>
      <p className="product__name">{name}</p>
      <div className="product__hover">
        <div className="product__price">
          <p className="product__price--value">{cost}</p>
          <img
            className="product__price--icon"
            src="/assets/icons/coin.svg"
            alt="icon coin"
          />
        </div>
        {balanceToRedeem(redeemButton, redirectButton)}
      </div>
    </div>
  );
}
export default Product;