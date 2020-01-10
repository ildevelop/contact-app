import React from "react";
import { Title, TableRow, TableHead } from "./Table.styled";

function Table(props) {
  return (
    <div>
      <TableHead>
        <Title>First Name</Title>
        <Title>Last Name</Title>
        <Title>Birthday</Title>
        <Title>Cell#</Title>
      </TableHead>
      {props.contactList.map(item => (
        <TableRow item key={item.id} onClick={() => props.setSelected(item)}>
          <Title item>{item.firstName}</Title>
          <Title item>{item.lastName}</Title>
          <Title item>{item.birthday}</Title>
          <Title item>{item.id}</Title>
        </TableRow>
      ))}
    </div>
  );
}

export default Table;
