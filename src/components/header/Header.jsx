import "./header.css";

import { UserContext } from "../../context/UserProvider";
import { useContext } from "react";

import { Link } from "react-router-dom";

function Header() {
    // Geting User Data from user Context
  const { userData } = useContext(UserContext);

  return (
    <header className="header">
      <nav className="header__nav">
        <Link to="/rewards-store">
          <img
            className="header__logo"
            src="https://i.imgur.com/98mRTol.png"
            alt="logo-aerolab"
          />
        </Link>
        <ul className="header__navbar">
          <li>
            <Link className="header__navbar--options" to="/rewards-store">
              Shop
            </Link>
          </li>
          <li>
            <Link className="header__navbar--options" to="/rewards-store/orders">
              Orders
            </Link>
          </li>
          <li>
            <Link className="header__navbar--options" to="/rewards-store/getcoins">
              Get Coins
            </Link>
          </li>
        </ul>
      </nav>
      <div className="header__userbox">
        <p className="header__username">{userData.name}</p>
        <div className="header__balancebox">
          <p className="header__balancebox--balance">{userData.points}</p>
          <img
            className="header__balancebox--icon"
            src="https://i.imgur.com/Kfvvqtj.png"
            alt="icon of balance"
          />
        </div>
      </div>
    </header>
  );
}

export default Header;
