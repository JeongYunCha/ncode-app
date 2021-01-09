import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import { Provider } from "react-redux";
import store from "./store/store";
import { OrderDetailPage } from "./features/order/OrderDetailPage";

const App = (): React.ReactElement => {
  return (
    <Provider store={store}>
      <Router>
        <Switch>
          <Route path="/orders/:orderId">
            <OrderDetailPage />
          </Route>
          <Redirect exact={true} from="/" to="/orders/100" />
        </Switch>
      </Router>
    </Provider>
  );
};

export default App;
