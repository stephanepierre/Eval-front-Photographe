import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from './pages/Home';
import React from "react";
import notFound from "./pages/NotFound";
import Prices from "./pages/Prices";
import Contact from "./pages/Contact";
import PhotosGallery from "./pages/PhotosGallery";



const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Switch>
          <Route path="/" exact component={Home}/>
          <Route path="/Prices" exact component={Prices}/>
          <Route path="/Contact" exact component={Contact}/>
          <Route path="/PhotosGallery" exact component={PhotosGallery}/>
          <Route component={notFound}/>
          <Route path="/" exact component={Home}/>
          <Route path="/" exact component={Home}/>
          <Route path="/" exact component={Home}/>
          <Route path="/" exact component={Home}/>
          <Route path="/" exact component={Home}/>
          <Route path="/" exact component={Home}/>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
