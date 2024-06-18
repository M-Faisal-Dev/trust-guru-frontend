// ChatInput.jsx
import React, { useState } from 'react';

function ChatInput() {
  const [message, setMessage] = useState('');

  const handleSend = () => {
    // Add logic to send message
    console.log('Sending message:', message);
    setMessage('');
  };

  return (
    <div className="flex items-center p-4 border-t border-gray-300">
      <input 
        type="text" 
        value={message} 
        onChange={(e) => setMessage(e.target.value)} 
        placeholder="Type a message..." 
        className="flex-1 p-2 border border-gray-300 rounded-lg mr-2"
      />
      <button 
        onClick={handleSend} 
        className="p-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
      >
        Send
      </button>
    </div>
  );
}

export default ChatInput;
