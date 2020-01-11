import React from "react";
import { Card, Icon } from "semantic-ui-react";
import { Wrapper, Link } from "../../style/main";

const extra = (
  <Wrapper>
    <Link target="_blank" href="https://github.com/ildevelop">
      <Icon name="github" />
      GiHub
    </Link>
    <Link target="_blank" href="https://www.linkedin.com/in/ilyaradu/">
      <Icon name="linkedin" />
      LinkedIn
    </Link>
    <Link target="_blank" href="https://www.crocusit.co/">
      <Icon name="object group outline" />
      CrocusIT
    </Link>
  </Wrapper>
);
function About() {
  return (
    <Wrapper>
      <Card
        image="https://avatars2.githubusercontent.com/u/12765738?s=460&v=4"
        header="Ilya Radu"
        meta="0527456966"
        description="Full stack engineer, looking for new partners and new exciting projects.My experience allows create and develop of any complexity levels projects"
        extra={extra}
      />
    </Wrapper>
  );
}

export default About;
