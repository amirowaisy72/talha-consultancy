import React, { useState } from "react";

const Index = () => {
  const [showEmojiPicker, setShowEmojiPicker] = useState(false);
  const [message, setMessage] = useState("");
  
  const handleEmojiClick = (emoji) => {
    setMessage(message + emoji);
    setShowEmojiPicker(false); // Hide emoji picker after selecting emoji
  };
  const handleAttachmentClick = () => {
    // Trigger file input click
    document.getElementById("file-input").click();
  };

  const handleFileChange = (e) => {
    // Handle file change
    const file = e.target.files[0];
    console.log("Selected file:", file);
  };

  const emojiPicker = (
    <div className="emoji-picker">
      {/* Sample emojis, replace with your actual emoji picker */}
      <span onClick={() => handleEmojiClick("😊")}>😊</span>
      <span onClick={() => handleEmojiClick("😁")}>😁</span>
      <span onClick={() => handleEmojiClick("😎")}>😎</span>
      <span onClick={() => handleEmojiClick("👍")}>👍</span>
      <span onClick={() => handleEmojiClick("👌")}>👌</span>
      <span onClick={() => handleEmojiClick("🙌")}>🙌</span>
      <span onClick={() => handleEmojiClick("💯")}>💯</span>
      <span onClick={() => handleEmojiClick("🔥")}>🔥</span>
      <span onClick={() => handleEmojiClick("🎉")}>🎉</span>
      <span onClick={() => handleEmojiClick("🚀")}>🚀</span>
      {/* Add more emojis as needed */}
    </div>
  );

  return (
    <div className="footer">
      <div className="write-message">
        <textarea
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          rows={3} // Set initial number of rows
          autoFocus // Automatically focus on the textarea
          disabled
        />
        <div className="options">
          <span onClick={() => setShowEmojiPicker(!showEmojiPicker)}>😊</span>
          {/* Emoji icon */}
          <span onClick={handleAttachmentClick}>📎</span>{" "}
          {/* Attachment icon */}
          <input
            id="file-input"
            type="file"
            style={{ display: "none" }}
            onChange={handleFileChange}
          />
        </div>
      </div>
      {showEmojiPicker && emojiPicker}{" "}
      {/* Render emoji picker if showEmojiPicker is true */}
    </div>
  );
};

export default Index;
