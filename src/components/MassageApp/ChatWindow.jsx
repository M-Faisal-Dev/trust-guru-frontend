// ChatWindow.jsx
import React from 'react';
import MessageList from './MessageList';
import ChatInput from './ChatInput';
import UserList from './UserList'; // Import UserList component

function ChatWindow() {
  return (
    <div className="flex w-full max-w-4xl h-full bg-white border border-gray-300 rounded-lg overflow-hidden shadow-lg">
      {/* Left side: UserList */}
      <div className="w-1/4 bg-gray-100 border-r border-gray-300">
        <UserList />
      </div>
      {/* Right side: MessageList and ChatInput */}
      <div className="w-3/4 flex flex-col">
        <MessageList />
        <ChatInput />
      </div>
    </div>
  );
}

export default ChatWindow;
