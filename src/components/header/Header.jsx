import "./header.css";
import { UserContext } from "../../context/UserProvider";
import { useContext } from "react";
import { Link } from "react-router-dom";

function Header() {
  const { userData } = useContext(UserContext);
  // getUser(setUserData)

  return (
    <header className="header">
      <nav className="header__nav">
        <ul className="header__navbar">
          <li>
            <Link to="/">
              <img
                className="header__navbar--logo"
                src="/assets/aerolab-logo.svg"
                alt="logo-aerolab"
              />
            </Link>
          </li>
          <li>
            <Link className="header__navbar--options" to="/">
              Shop
            </Link>
          </li>
          <li>
            <Link className="header__navbar--options" to="/orders">
              Orders
            </Link>
          </li>
          <li>
            <Link className="header__navbar--options" to="/getcoins">
              Get Coins
            </Link>
          </li>
        </ul>
        <div className="header__userbox">
          <p className="header__username">{userData.name}</p>
          <div className="header__balancebox">
            <p className="header__balancebox--balance">{userData.points}</p>
            <img
              className="header__balancebox--icon"
              src="/assets/icons/coin.svg"
              alt="icon of balance"
            />
          </div>
        </div>
      </nav>
      <img className="header__cover" src="/assets/header-x1.png" alt="" />
      <h1 className="header__title">Electronics</h1>
    </header>
  );
}

export default Header;
