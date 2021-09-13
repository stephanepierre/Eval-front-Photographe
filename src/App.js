import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from './pages/Home';
import React from "react";
import notFound from "./pages/NotFound";
import Prices from "./pages/Prices";
import Contact from "./pages/Contact";



const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Switch>
          <Route path="/" exact component={Home}/>
          <Route path="/Prices" exact component={Prices}/>
          <Route path="/Contact" exact component={Contact}/>
          <Route component={notFound}/>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
