import "./styles/index.css";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import Header from "./components/header/Header";
import Shop from "./pages/shop/Shop";
import Redeems from "./pages/redeems/Redeems";
import Coins from "./pages/coins/Coins";

import { UserProvider } from "./context/UserProvider";
import { ProductProvider } from "./context/ProductProvider";
import { OrdersProvider } from "./context/OrdersProvider";

function App() {
  return (
    <BrowserRouter>
      <OrdersProvider>
        <ProductProvider>
          <UserProvider>
            <div className="App">
              <Header />
              <main>
                <Switch>
                  <Route exact path="/" component={Shop} />
                  <Route exact path="/orders" component={Redeems} />
                  <Route exact path="/getcoins" component={Coins} />
                </Switch>
              </main>
            </div>
          </UserProvider>
        </ProductProvider>
      </OrdersProvider>
    </BrowserRouter>
  );
}

export default App;
