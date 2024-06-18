// MessageList.jsx
import React from 'react';
import Message from './Message';

function MessageList() {
  // Dummy messages
  const messages = [
    { id: 1, text: 'Hello!', sender: 'user' },
    { id: 2, text: 'Hi there!', sender: 'other' },
    // Add more messages here
  ];

  return (
    <div className="flex-1 p-4 overflow-y-auto">
      {messages.map((msg) => (
        <Message key={msg.id} text={msg.text} sender={msg.sender} />
      ))}
    </div>
  );
}

export default MessageList;
