import styled from "styled-components";
export const TableWrapper = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: row;
`;
export const Title = styled.div`
  width: 33%;
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
`;
export const TableHead = styled(TableWrapper)`
  background: #9e9f9f;
`;
export const TableRow = styled(TableWrapper)`
  background: ${({ item }) => (item ? "#fff" : "#9e9f9f")};
  border-bottom: 1px solid #9e9f9f;
  cursor: ${({ item }) => (item ? "pointer" : "default")};
  &:hover {
    background: ${({ item }) => (item ? "#3aa9f4" : "none")};
  }
`;
