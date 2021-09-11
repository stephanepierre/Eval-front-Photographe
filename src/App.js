import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from './pages/Home';
import React from "react";



const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Switch>
          <Route path="/" exact component={Home}/>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
