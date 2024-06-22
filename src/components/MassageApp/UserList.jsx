import React from 'react';

function UserList({ user, purchasedCourses, onSelectUser, studentData }) {
    // Check if purchasedCourses is undefined or null
    if (!purchasedCourses) {
        return renderStudentData(studentData, onSelectUser);
    }

    return (
        <div className="bg-gray-100 p-4">
            <h2 className="text-lg font-bold mb-4">User List</h2>
            {renderPurchasedUsers(purchasedCourses, user, onSelectUser)}
            {renderStudentData(studentData, onSelectUser)}
        </div>
    );
}

function renderPurchasedUsers(purchasedCourses, user, onSelectUser) {
    // Extract course owners from purchased courses
    const courseOwners = purchasedCourses.reduce((acc, course) => {
        // Check if course owner is already in acc array
        const existingOwner = acc.find(owner => owner.userId === course.courseOwner.userId);
        if (!existingOwner) {
            acc.push(course.courseOwner);
        }
        return acc;
    }, []);

    // Combine course owners with the original user
    const users = [
        ...courseOwners,
        // { userId: user.userId, fullName: user.fullName, email: user.email, profileImg: user.profileImg }
    ];

    return users.map((usr) => (
        <div key={usr.userId} className="flex items-center space-x-2 p-2 hover:bg-gray-200 cursor-pointer rounded-lg" onClick={() => onSelectUser(usr)}>
            {usr.profileImg.length ? (
                <img 
                    src={usr.profileImg} 
                    alt={usr.fullName}  
                    className="w-10 h-10 rounded-full object-cover"
                />
            ) : (
                <div className="w-10 h-10 rounded-full bg-gray-300 flex items-center justify-center">
                    <span className="text-white">{usr.fullName.charAt(0)}</span>
                </div>
            )}
            <div>
                <p className="font-semibold">{usr.fullName}</p>
                <p className="text-sm text-gray-500">{usr.email}</p>
            </div>
        </div>
    ));
}

function renderStudentData(studentData, onSelectUser) {
    if (!studentData) {
        return null;
    }

    const studentUsers = studentData.map((student) => student.user);

    return studentUsers.map((usr) => (
        <div key={usr.userId} className="flex items-center space-x-2 p-2 hover:bg-gray-200 cursor-pointer rounded-lg" onClick={() => onSelectUser(usr)}>
            {usr.profileImg.length ? (
                <img 
                    src={usr.profileImg} 
                    alt={usr.fullName}  
                    className="w-10 h-10 rounded-full object-cover"
                />
            ) : (
                <div className="w-10 h-10 rounded-full bg-gray-300 flex items-center justify-center">
                    <span className="text-white">{usr.fullName.charAt(0)}</span>
                </div>
            )}
            <div>
                <p className="font-semibold">{usr.fullName}</p>
                <p className="text-sm text-gray-500">{usr.email}</p>
            </div>
        </div>
    ));
}

export default UserList;
