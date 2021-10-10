import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Checkout from "./pages/Checkout";
import Home from "./pages/Home";
import Products from "./pages/Products";
import SingleProduct from "./pages/SingleProduct";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/products/:category" component={Products} />
        <Route path="/single-product/:id" component={SingleProduct} />
        <Route path="/checkout" component={Checkout} />
      </Switch>
    </Router>
  );
}

export default App;
