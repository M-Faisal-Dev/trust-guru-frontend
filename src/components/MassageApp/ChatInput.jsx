// ChatInput.jsx
import React, { useState } from 'react';
import { useAuth } from '@/Context/AuthContext';
import axios from 'axios';
import {routes} from "@/libs/api"



function ChatInput({userId, userName}) {
  const [message, setMessage] = useState('');

  const { isAuthenticated, login, setRefreshToken, logout, userToken, getRefreshToken } = useAuth();



  const Token = getRefreshToken()
  console.log(Token, "this is token")

  const handleSend = async () => {
    try {
      // Validate message (optional)
      if (!message.trim()) {
        console.log('Message cannot be empty');
        return;
      }

      console.log(message, "this is faisal")

      // Prepare message object to send
      const newMessage = {
        text: message,
        senderName: userName
      };

      // Send message to backend
      const response = await axios.post(`${routes.saveMessage}/${userId}`, newMessage,
        {
          headers: {
            Authorization: `Bearer ${Token}`
          }
        }
      );
      setMessage('');
    } catch (error) {
      console.error('Error sending message:', error);
      // Handle error (e.g., show error message to user)
    }
  };

  return (
    <div className="flex items-center p-4 border-t border-gray-950">
      <input 
        type="text" 
        value={message} 
        onChange={(e) => setMessage(e.target.value)} 
        placeholder="Type a message..." 
        className="flex-1 p-2 border border-gray-300 rounded-lg mr-2"
      />
      <button 
        onClick={handleSend} 
        className="p-2 bg-blue text-white rounded-lg hover:bg-blue-600"
      >
        Send
      </button>
    </div>
  );
}

export default ChatInput;
