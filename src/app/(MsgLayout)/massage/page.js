// MessageApp.jsx
"use client"
import React from 'react';
import ChatWindow from '@/components/MassageApp/ChatWindow';

function MessageApp() {
  return (
    <div className="flex justify-center items-center py-6 h-screen bg-gray-100">
      <ChatWindow />
    </div>
  );
}

export default MessageApp;
