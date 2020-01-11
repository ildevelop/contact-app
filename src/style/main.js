import styled from "styled-components";
export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: ${({ direction }) => (direction ? direction : "row")};
  margin: ${({ margin }) => (margin ? margin : 0)};
`;
export const Link = styled.a`
  padding: 0 5px;
`;
