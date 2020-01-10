import React, { useState, useEffect } from "react";
import get from "lodash/get";
import Table from "../../components/Table/Table";
import ContactEditor from "../../components/ContactEditor/ContactEditor";
import { Wrapper } from "../../style/main";
import API from "../../api";

function Contacts() {
  const [contactList, setContactList] = useState([]);
  const [selected, setSelected] = useState({
    first: "",
    last: "",
    birthday: "",
    _id: 1,
    cell: ""
  });
  useEffect(() => {
    API.getContacts()
      .then(res => {
        setContactList(get(res, "data.contact", []));
      })
      .catch(err => {
        console.error("Error fetch data", err);
      });
  }, []);
  return (
    <Wrapper direction="column" margin="0 5%">
      <Table contactList={contactList} setSelected={setSelected} />
      <ContactEditor selected={selected} setSelectedDate={setSelected} />
    </Wrapper>
  );
}

export default Contacts;
