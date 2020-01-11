import React from "react";
import Loading from "./../Loader";
import { Title, TableBody, TableRow, TableHead } from "./Table.styled";

const Table = React.memo(props => {
  return (
    <div>
      <TableHead>
        <Title>First Name</Title>
        <Title>Last Name</Title>
        <Title>Birthday</Title>
        <Title>Cell#</Title>
      </TableHead>
      {!props.contactList.length ? (
        <Loading />
      ) : (
        <TableBody>
          {props.contactList.map(item => (
            <TableRow
              item
              key={item._id}
              onClick={() =>
                props.setSelected({
                  ...item,
                  first_old: item.first,
                  last_old: item.last
                })
              }
            >
              <Title item>{item.first}</Title>
              <Title item>{item.last}</Title>
              <Title item>
                {typeof item.birthday === "string"
                  ? item.birthday.slice(0, 10)
                  : JSON.stringify(item.birthday).slice(1, 10)}
              </Title>
              <Title item>{item.cell}</Title>
            </TableRow>
          ))}
        </TableBody>
      )}
    </div>
  );
});

export default Table;
