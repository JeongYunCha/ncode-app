import React from "react";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./ducks/store";
import OrderDetails from "./containers/OrderDetails";
import "./App.css";
const App = (): React.ReactElement => {
  return (
    <div className="App">
      <Provider store={store}>
        <BrowserRouter>
          <Switch>
            <Route path="/orders/:orderId">
              <OrderDetails />
            </Route>
            <Redirect exact={true} from="/" to="/orders/100" />
          </Switch>
        </BrowserRouter>
      </Provider>
    </div>
  );
};

export default App;
