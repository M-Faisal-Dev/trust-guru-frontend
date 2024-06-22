"use client"
import React, { useEffect, useState } from 'react';
import MessageList from './MessageList';
import ChatInput from './ChatInput';
import UserList from './UserList';
import axios from 'axios';
import { routes } from '@/libs/api';
import { useAuth } from '@/Context/AuthContext';




function ChatWindow() {
  const [userData, setUserData] = useState(null);
  const [studentData, setStudentData] = useState(null);
  const [selectedUser, setSelectedUser] = useState(null);
  const { isAuthenticated, login, setRefreshToken, logout, userToken, getRefreshToken } = useAuth();

  const handleSelectUser = (user) => {
    setSelectedUser(user);
  };
  const Token = getRefreshToken()
  const [messages, setMessages] = useState([]);


 



  useEffect(() => {
    const fetchMessages = async () => {
      if (selectedUser) {
        try {
          const senderResponse = await axios.get(routes.getSanderMessages, {
            headers: {
              Authorization: `Bearer ${Token}`
            }
          });
  
          const receivedResponse = await axios.get(routes.receivedMessages, {
            headers: {
              Authorization: `Bearer ${Token}`
            }
          });
  
          // Add a 'type' property to distinguish between sender and receiver messages
          const senderMessages = senderResponse.data.map(msg => ({ ...msg, type: 'sender' }));
          const receivedMessages = receivedResponse.data.map(msg => ({ ...msg, type: 'receiver' }));
  
          // Combine and sort messages by timestamp in ascending order
          const allMessages = [...senderMessages, ...receivedMessages];
          const sortedMessages = allMessages.sort((a, b) => new Date(a.timestamp) - new Date(b.timestamp));
          setMessages(sortedMessages);
        } catch (error) {
          console.error("Error fetching messages:", error);
        }
      }
    };
  
    // Initially fetch messages
    fetchMessages();
  
    // Set interval to fetch messages every 3 seconds
    const intervalId = setInterval(fetchMessages, 3000);
  
    // Clean up the interval on component unmount
    return () => clearInterval(intervalId);
  }, [selectedUser, Token]);

 
  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const response = await axios.get(routes.getStudent,
          {
            headers: {
              Authorization: `Bearer ${Token}`
            }
          }
        );
        setUserData(response.data);
      } catch (error) {
        console.error("Error fetching user data:", error);
      }
    };

    fetchUserData();
  }, [Token]);


  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const response = await axios.get(routes.getTeacher,
          {
            headers: {
              Authorization: `Bearer ${Token}`
            }
          }
         );
        setStudentData(response.data);
      } catch (error) {
        console.error("Error fetching user data:", error);
      }
    };

    fetchUserData();
  },[]);

  console.log(studentData, "this is student data")


  return (
    <div className="flex  flex-col sm:flex-row w-full max-w-7xl  h-full bg-white border border-gray-300 rounded-lg overflow-scroll shadow-lg">
      {/* Left side: UserList */}
      <div className="w-full md:w-1/3 lg:w-1/4 bg-gray-100 border-r border-gray-300">
        {userData && <UserList user={userData.user} purchasedCourses={userData.purchasedCourses}  onSelectUser={handleSelectUser}  />}
        {studentData && <UserList studentData={studentData} onSelectUser={handleSelectUser}  />}
      </div>
      {/* Right side: MessageList and ChatInput */}
      <div className="w-full md:w-2/3 lg:w-3/4 flex flex-col">
      {messages && <MessageList messages={messages} selectedUser={selectedUser?.userType} />}
        {userData && <ChatInput userId={selectedUser?.userId} 
          userName={selectedUser?.fullName} />}
        {studentData && <ChatInput userId={selectedUser?.userId} 
          userName={selectedUser?.fullName} />}
      </div>
    </div>

  //   <div className="flex flex-col w-full max-w-7xl h-full bg-white border border-gray-300 rounded-lg overflow-hidden shadow-lg">
  //   {/* Left side: UserList */}
  //   <div className="w-full md:w-1/3 lg:w-1/4 bg-gray-100 border-r border-gray-300">
  //     {userData && <UserList user={userData.user} purchasedCourses={userData.purchasedCourses} onSelectUser={handleSelectUser} />}
  //     {studentData && <UserList studentData={studentData} onSelectUser={handleSelectUser} />}
  //   </div>
  //   {/* Right side: MessageList and ChatInput */}
  //   <div className="w-full md:w-2/3 lg:w-3/4 flex flex-col">
  //     {messages && <MessageList messages={messages} selectedUser={selectedUser?.userType} />}
  //     {userData && <ChatInput userId={selectedUser?.userId} userName={selectedUser?.fullName} />}
  //     {studentData && <ChatInput userId={selectedUser?.userId} userName={selectedUser?.fullName} />}
  //   </div>
  // </div>
  );
}

export default ChatWindow;
