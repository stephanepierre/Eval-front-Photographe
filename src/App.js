import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from './pages/Home';
import React from "react";
import notFound from "./pages/NotFound";
import Prices from "./pages/Prices";



const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Switch>
          <Route path="/" exact component={Home}/>
          <Route path="/Prices" exact component={Prices}/>
          <Route component={notFound}/>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
