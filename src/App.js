import React from "react";
import { Switch, Route } from "react-router-dom";

import "./App.css";
import HomePage from "./pages/homepage/homepage.component";

const HatsPage = () => (
  <div>
    <h1>HATS PAGE</h1>
  </div>
);
const JacketsPage = () => (
  <div>
    <h1>jacketsPAGE</h1>
  </div>
);
const SneakersPage = () => (
  <div>
    <h1>Sneakers PAGE</h1>
  </div>
);
const WomensPage = () => (
  <div>
    <h1>Womens PAGE</h1>
  </div>
);
const MensPage = () => (
  <div>
    <h1>Mens Page</h1>
  </div>
);
function App() {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/hats" component={HatsPage} />
        <Route exact path="/jackets" component={JacketsPage} />
        <Route exact path="/sneakers" component={SneakersPage} />
        <Route exact path="/womens" component={WomensPage} />
        <Route exact path="/mens" component={MensPage} />
      </Switch>
    </div>
  );
}

export default App;
