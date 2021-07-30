import "./header.css";

function Header() {
  return (
    <header className="header">
      <nav className="header__nav">
        <img
          className="header__logo"
          src="/assets/aerolab-logo.svg"
          alt="logo-aerolab"
        />
        <div className="header__userbox">
          <p className="header__username">John Kile</p>
          <div className="header__balancebox">
            <p className="header__balancebox--balance">2000</p>
            <img
              className="header__balancebox--icon"
              src="/assets/icons/coin.svg"
              alt="icon of balance"
            />
          </div>
        </div>
      </nav>
      <img className="header__cover" src="/assets/header-x2.png" alt=""/>
      <h1 className="header__title">Electronics</h1>
    </header>
  );
}

export default Header;
