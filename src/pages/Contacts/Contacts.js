import React, { useState, useEffect, useCallback } from "react";
import get from "lodash/get";
import Table from "../../components/Table/Table";
import ContactEditor from "../../components/ContactEditor/ContactEditor";
import Message from "../../components/Message";
import { Wrapper } from "../../style/main";
import API from "../../api";

const CONTACT_MOCK = {
  first: "",
  last: "",
  first_old: "",
  last_old: "",
  birthday: "",
  _id: 1,
  cell: ""
};
function Contacts() {
  const [contactList, setContactList] = useState([]);
  const [showMessage, setShowMessage] = useState(false);
  const [showErrorMessage, setShowErrorMessage] = useState(false);
  const [selected, setSelected] = useState(CONTACT_MOCK);
  const updateContact = () => {
    setShowMessage(true);
    API.updateContact(selected)
      .then(status => {
        const updatedList = contactList.map(contact => {
          if (contact._id === selected._id) {
            return selected;
          } else {
            return contact;
          }
        });
        setContactList(updatedList);
        setShowMessage(true);
        setSelected(CONTACT_MOCK);
      })
      .catch(error => {
        setShowErrorMessage(true);
      });
  };
  const updateSelectedContact = useCallback(contact => {
    setSelected({ ...contact });
  }, []);
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
