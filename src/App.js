import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from './pages/Home';
import React from "react";
import notFound from "./pages/NotFound";



const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Switch>
          <Route path="/" exact component={Home}/>
          <Route component={notFound}/>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
