import "./styles/index.css";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import Header from "./components/header/Header";
import Shop from "./pages/shop/Shop";
import Redeems from "./pages/redeems/Redeems";
import Coins from "./pages/coins/Coins";

import { UserProvider } from "./context/UserProvider";
import { ProductProvider } from "./context/ProductProvider";
import { OrdersProvider } from "./context/OrdersProvider";
import { AppProvider } from "./context/AppProvider";

import ModalError from "./components/modals/modalerror/ModalError";
import ModalSuccess from "./components/modals/modalsuccess/ModalSuccess";

function App() {
  return (
    <BrowserRouter>
      <AppProvider>
        <OrdersProvider>
          <ProductProvider>
            <UserProvider>
              <div className="App">
                <Header />
                <ModalError />
                <ModalSuccess />
                <main className="main">
                  <Switch>
                    <Route exact path="/" component={Shop} />
                    <Route path="/orders" component={Redeems} />
                    <Route path="/getcoins" component={Coins} />
                  </Switch>
                </main>
              </div>
            </UserProvider>
          </ProductProvider>
        </OrdersProvider>
      </AppProvider>
    </BrowserRouter>
  );
}

export default App;
