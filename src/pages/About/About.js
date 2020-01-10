import React from "react";
import { Card, Icon } from "semantic-ui-react";
import { Wrapper } from "../../style/main";

const extra = (
  <a>
    <Icon name="user" />
    16 Friends
  </a>
);
function About() {
  return (
    <Wrapper>
      <Card
        image="https://react.semantic-ui.com/images/avatar/small/jenny.jpg"
        header="Elliot Baker"
        meta="0527456966"
        description="Elliot is a sound engineer living in Nashville who enjoys playing guitar and hanging with his cat."
        extra={extra}
      />
    </Wrapper>
  );
}

export default About;
