import React from "react";
import { BrowserRouter as Router, Link } from "react-router-dom";
import Routes from "./../routes";
import { Button } from "semantic-ui-react";
import { Wrapper } from "./../style/main";

export default function App() {
  return (
    <Router>
      <Wrapper>
        <Link to="/about">
          <Button animated="vertical" basic color="purple">
            <Button.Content visible>About</Button.Content>
            <Button.Content hidden>About</Button.Content>
          </Button>
        </Link>
        <Link to="/help">
          <Button animated="vertical" basic color="blue">
            <Button.Content visible>Help</Button.Content>
            <Button.Content hidden>Help</Button.Content>
          </Button>
        </Link>
        <Link to="/contacts">
          <Button animated="vertical" basic color="yellow">
            <Button.Content visible>Contacts</Button.Content>
            <Button.Content hidden>Contacts</Button.Content>
          </Button>
        </Link>
      </Wrapper>
      <br />
      <Routes />
    </Router>
  );
}
