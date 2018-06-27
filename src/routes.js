import React from "react";
import { Route, Switch } from "react-router-dom";
import Locations from "./components/Location";
import About from "./components/About";
import OrderDetails from "./components/OrderDetails";
import PastOrders from "./components/PastOrders";
import StoreSelection from "./components/stores/StoreSelection";
import Checkout from "./components/Checkout";

export default (
  <Switch>
    <Route exact path="/" component={Locations} />
    <Route path="/about" component={About} />
    <Route path="/order-details" component={OrderDetails} />
    <Route path="/past-orders" component={PastOrders} />
    <Route path="/store-selection" component={StoreSelection} />
    <Route path="/checkout" component={Checkout} />
  </Switch>
);
