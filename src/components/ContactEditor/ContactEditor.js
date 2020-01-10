import React from "react";
import { Form, Button } from "semantic-ui-react";
import { Wrapper, DatePickerWrapper, DateTitle } from "./ContactEditor.styled";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const ContactEditor = React.memo(({ selected, setSelected, updateContact }) => {
  return (
    <Wrapper>
      <Form size="big" className="formWrapper">
        <Form.Group widths="equal">
          <Form.Input
            id="form-subcomponent-shorthand-input-first-name"
            label="First name"
            placeholder="First name"
            defaultValue={selected.first}
            onChange={e => {
              setSelected({ ...selected, first: e.target.value });
            }}
          />

          <DatePickerWrapper>
            <DateTitle>Birthday</DateTitle>
            <DatePicker
              onChange={date => {
                setSelected({ ...selected, birthday: new Date(date) });
              }}
              selected={selected.birthday ? new Date(selected.birthday) : ""}
            />
          </DatePickerWrapper>
        </Form.Group>
        <Form.Group widths="equal">
          <Form.Input
            id="form-subcomponent-shorthand-input-last-name"
            label="Last name"
            placeholder="Last name"
            onChange={e => {
              setSelected({ ...selected, last: e.target.value });
            }}
            defaultValue={selected.last}
          />
          <Form.Input
            id="form-subcomponent-shorthand-input-id"
            label="Cell"
            onChange={e => {
              setSelected({ ...selected, cell: e.target.value });
            }}
            defaultValue={selected.cell}
          />
        </Form.Group>
        <Button className="saveBtn" primary onClick={updateContact}>
          Save
        </Button>
      </Form>
    </Wrapper>
  );
});
export default ContactEditor;
