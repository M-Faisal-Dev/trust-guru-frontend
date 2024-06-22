import React from 'react';
import Message from './Message'; // Adjust the import path based on your project structure

function MessagesComponent({ messages }) {
  
  return (
    <div className="flex flex-col overflow-scroll space-y-2">
      {messages.map((msg, index) => (
        <Message
          key={index} // Use a unique key for each message
          text={msg.text}
          sender={msg.type}
        />
      ))}
    </div>
  );
}

export default MessagesComponent;
