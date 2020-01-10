import React, { useState } from "react";
import { Form, Button } from "semantic-ui-react";
import { Wrapper, DatePickerWrapper, DateTitle } from "./ContactEditor.styled";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

export default function ContactEditor(props) {
  const [birthday, setBirthday] = useState(new Date());
  return (
    <Wrapper>
      <Form size="big" className="formWrapper">
        <Form.Group widths="equal">
          <Form.Input
            id="form-subcomponent-shorthand-input-first-name"
            label="First name"
            placeholder="First name"
            defaultValue={props.selected.firstName}
          />

          <DatePickerWrapper>
            <DateTitle>Birthday</DateTitle>
            <DatePicker onChange={setBirthday} selected={birthday} />
          </DatePickerWrapper>
        </Form.Group>
        <Form.Group widths="equal">
          <Form.Input
            id="form-subcomponent-shorthand-input-last-name"
            label="Last name"
            placeholder="Last name"
            defaultValue={props.selected.lastName}
          />
          <Form.Input
            id="form-subcomponent-shorthand-input-id"
            label="Cell"
            defaultValue={props.selected.id}
            disabled
          />
        </Form.Group>
        <Button className="saveBtn" primary>
          Save
        </Button>
      </Form>
    </Wrapper>
  );
}
