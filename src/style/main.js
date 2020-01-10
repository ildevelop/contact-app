import styled from "styled-components";
export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: ${({ direction }) => (direction ? direction : "row")};
  margin: ${({ margin }) => (margin ? margin : 0)};
`;
export const Title = styled.div`
  width: 33%;
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
`;
export const TableHead = styled(Wrapper)`
  background: #9e9f9f;
`;
export const TableRow = styled(Wrapper)`
  background: ${({ item }) => (item ? "#fff" : "#9e9f9f")};
  border-bottom: 1px solid #9e9f9f;
  cursor: ${({ item }) => (item ? "pointer" : "default")};
  &:hover {
    background: ${({ item }) => (item ? "#3aa9f4" : "none")};
  }
`;
