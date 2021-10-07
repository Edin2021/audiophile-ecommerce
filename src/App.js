import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./pages/Home";
import Products from "./pages/Products";
import SingleProduct from "./pages/SingleProduct";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/products" component={Products} />
        <Route path="/single-product" component={SingleProduct} />
        <Route path="/checkout" />
      </Switch>
    </Router>
  );
}

export default App;
