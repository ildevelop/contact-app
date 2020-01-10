import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import Contacts from "./pages/Contacts/Contacts";
import Help from "./pages/Help/Help";
import About from "./pages/About/About";

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
