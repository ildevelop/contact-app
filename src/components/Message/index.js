import React, { useState } from "react";
import { Message } from "semantic-ui-react";

const MessageComponent = props => {
  const [visible, setVisible] = useState(true);
  return (
    <div>
      <br />
      {visible && (
        <Message
          warning={props.error}
          positive={props.success}
          onDismiss={() => setVisible(false)}
          header={props.success ? "Great! :)" : "Bad news :/"}
          content={
            props.success ? "The contact was updated" : "have some reject"
          }
        />
      )}
    </div>
  );
};

export default MessageComponent;
