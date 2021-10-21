import React, { useState } from "react";
import Message from "./Message";
import { messages } from "../../datalist";


const DialogBox = () => {
  const [currentMessage, setCurrentMessage] = useState(0);
  const handleClick = () => {
    if (currentMessage < messages.length - 1) {
      setCurrentMessage(currentMessage + 1);
    } else {
      setCurrentMessage(0);
    }
  };
  return (
    <div className="dialogWindow" onClick={handleClick}>
      <Message message={messages[currentMessage]} key={currentMessage} />
      <span className="nextButton">▼</span>
    </div>
  );
};

export default DialogBox;