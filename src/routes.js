import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import Contacts from "./components/Contacts/Contacts";
import Help from "./components/Help/Help";
import About from "./components/About/About";

function routes() {
  return (
    <Switch>
      <Route path="/about">
        <About />
      </Route>
      <Route path="/help">
        <Help />
      </Route>
      <Route path="/contacts">
        <Contacts />
      </Route>
      <Route exact path="/">
        <Redirect to="/contacts" />
      </Route>
    </Switch>
  );
}
export default routes;
