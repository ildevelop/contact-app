import React, { useState } from "react";
import Table from "../../components/Table/Table";
import ContactEditor from "../../components/ContactEditor/ContactEditor";
import { Wrapper } from "../../style/main";
const mockDB = [
  { firstName: "Ilya", lastName: "Radu", birthday: "18-09-89", id: 135131313 },
  { firstName: "Max", lastName: "AAA", birthday: "18-09-89", id: 135131322 },
  { firstName: "Tom", lastName: "BBB", birthday: "18-09-89", id: 135131343 }
];
function Contacts() {
  const [contactList] = useState(mockDB);
  const [selected, setSelected] = useState({});
  return (
    <Wrapper direction="column" margin="0 5%">
      <Table contactList={contactList} setSelected={setSelected} />
      <ContactEditor selected={selected} />
    </Wrapper>
  );
}

export default Contacts;
