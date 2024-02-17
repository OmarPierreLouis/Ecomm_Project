import "./App.css";
import {
  /*Router,*/ Route,
  /*Link,*/ BrowserRouter,
  Switch,
  useNavigate,
  useState,
} from "react-router-dom";
import LandingPage from "./components/LandingPage";
import Navbar from "./components/Navbar";
import OrderPage from "./components/OrderPage";
import ShowCart from "./components/ShowCart";
import AccountPage from "./components/AccountPage";
// import AddressPage from "./components/AddressPage";
// import WalletPage from "./components/WalletPage";
// import AccountPage from "./components/AccountPage";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar></Navbar>
        <Switch>
          <Route exact path="/">
            <LandingPage>
            </LandingPage>
          </Route>
          <Route exact path="/api/product">
            <OrderPage></OrderPage>
          </Route>
          <Route exact path="/api/edit">
            <ShowCart></ShowCart>
          </Route>
          <Route exact path="/api/product/new">
            <AccountPage></AccountPage>
          </Route>
        </Switch>
      </div>
    </BrowserRouter>
  );
}
export default App;
