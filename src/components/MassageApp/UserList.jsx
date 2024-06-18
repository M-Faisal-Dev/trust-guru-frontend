// UserList.jsx
import React from 'react';

function UserList() {
  // Dummy user data
  const users = [
    { id: 1, name: 'Alice', profileImg: 'https://randomuser.me/api/portraits/women/1.jpg', lastMessage: 'Hello there!' },
    { id: 2, name: 'Bob', profileImg: 'https://randomuser.me/api/portraits/men/1.jpg', lastMessage: 'Hi!' },
    // Add more users here
  ];

  return (
    <div className="bg-gray-100 p-4">
      <h2 className="text-lg font-bold mb-4">User List</h2>
      {users.map((user) => (
        <div key={user.id} className="flex items-center space-x-2 p-2 hover:bg-gray-200 cursor-pointer rounded-lg">
          <img 
            src={user.profileImg} 
            alt={user.name} 
            className="w-10 h-10 rounded-full object-cover"
          />
          <div>
            <p className="font-semibold">{user.name}</p>
            <p className="text-sm text-gray-500">{user.lastMessage}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default UserList;
