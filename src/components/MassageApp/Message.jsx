// Message.jsx
import React from 'react';

function Message({ text, sender }) {
  return (
    <div className={`mb-2 p-2 rounded-lg max-w-xs ${sender === 'user' ? 'bg-green-200 self-end' : 'bg-gray-200 self-start'}`}>
      {text}
    </div>
  );
}

export default Message;
