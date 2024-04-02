import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faComment } from "@fortawesome/free-solid-svg-icons";
import "./MessagingIcon.css"; // Import your CSS file for styling
import Inbox from "./Inbox/Index";

const MessagingIcon = () => {
  const [inboxOpen, setInboxOpen] = useState(false);

  const toggleInbox = () => {
    setInboxOpen(!inboxOpen);
  };

  return (
    <>
      <div className="messaging-icon" onClick={toggleInbox}>
        <FontAwesomeIcon icon={faComment} />
        <span className="icon-text">Message Us</span>
      </div>
      {inboxOpen && <Inbox />}
    </>
  );
};

export default MessagingIcon;
