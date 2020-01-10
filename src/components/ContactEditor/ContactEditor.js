import React from "react";
import { Form, Button } from "semantic-ui-react";
import { Wrapper, DatePickerWrapper, DateTitle } from "./ContactEditor.styled";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

export default function ContactEditor({ selected, setSelectedDate }) {
  return (
    <Wrapper>
      <Form size="big" className="formWrapper">
        <Form.Group widths="equal">
          <Form.Input
            id="form-subcomponent-shorthand-input-first-name"
            label="First name"
            placeholder="First name"
            defaultValue={selected.first}
          />

          <DatePickerWrapper>
            <DateTitle>Birthday</DateTitle>
            <DatePicker
              onChange={date => {
                setSelectedDate({ ...selected, birthday: new Date(date) });
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
            defaultValue={selected.last}
          />
          <Form.Input
            id="form-subcomponent-shorthand-input-id"
            label="Cell"
            defaultValue={selected.cell}
          />
        </Form.Group>
        <Button className="saveBtn" primary>
          Save
        </Button>
      </Form>
    </Wrapper>
  );
}
