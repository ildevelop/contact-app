import React, { useState, useEffect, useCallback } from "react";
import get from "lodash/get";
import Table from "../../components/Table/Table";
import ContactEditor from "../../components/ContactEditor/ContactEditor";
import Message from "../../components/Message";
import { Wrapper } from "../../style/main";
import API from "../../api";

function Contacts() {
  const [contactList, setContactList] = useState([]);
  const [showMessage, setShowMessage] = useState(false);
  const [showErrorMessage, setShowErrorMessage] = useState(false);
  const [selected, setSelected] = useState({
    first: "",
    last: "",
    first_old: "",
    last_old: "",
    birthday: "",
    _id: 1,
    cell: ""
  });
  const updateContact = () => {
    setShowMessage(true);
    API.updateContact(selected)
      .then(status => {
        setShowMessage(true);
      })
      .catch(error => {
        setShowErrorMessage(true);
      });
  };
  const updateSelectedContact = useCallback(
    contact => {
      setSelected({ ...contact });
    },
    [selected]
  );
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
      {showMessage && (
        <Message error={showErrorMessage} success={showMessage} />
      )}
      <ContactEditor
        selected={selected}
        setSelected={updateSelectedContact}
        updateContact={updateContact}
      />
    </Wrapper>
  );
}

export default Contacts;
