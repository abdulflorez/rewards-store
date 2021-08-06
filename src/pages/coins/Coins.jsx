import "./coins.css";
import { postPoints } from "../../utils/requests";

import { UserContext } from "../../context/UserProvider";
import { useContext } from "react";

function Coins() {
  const { setRefresh } =useContext(UserContext)
  const handleGetCoins = (value) => {
    postPoints(value, setRefresh )

  }
  return (
    <section className="coins">
      <h2 className="coins__title">GET MORE COINS</h2>
      <h3 className="coins__subtitle">choose your favorite package now.</h3>
      <div className="coins__container">
        <button className="coins__container--btn" onClick={()=>handleGetCoins(1000)}>
          1000{" "}
          <img
            className="coins__container--img"
            src="/assets/icons/coin.svg"
            alt="coin icon"
          />
        </button>
        <button className="coins__container--btn" onClick={()=>handleGetCoins(5000)}>
          5000
          <img
            className="coins__container--img"
            src="/assets/icons/coin.svg"
            alt="coin icon"
          />
        </button>
        <button className="coins__container--btn" onClick={()=>handleGetCoins(7500)}>
          7500
          <img
            className="coins__container--img"
            src="/assets/icons/coin.svg"
            alt="coin icon"
          />
        </button>
      </div>
    </section>
  );
}

export default Coins;
