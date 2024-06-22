// const root = "http://localhost:4000"
const root = "https://backend.trustyourguru.com"



export const api = `${root}/api/`
// 
export const routes = {
   
    // car listing api 
    register: `${api}register`,
    login: `${api}login`,
    logout: `${api}logout`,
    updateUserProfile: `${api}updateProfile`,

    // for creating course 
    createCourse: `${api}course/create`,
    course: `${api}course`,
    purchasedCourse: `${api}course/add-purchased-course`,

    // for creating teacher profile
    
    createTeacher: `${api}teacher-profile/create`,
    teacher: `${api}teacher-profile`,
    getAllTeachers: `${api}teacher-profile`,
    getSingleTeacher: `${api}teacher-profile`,
    updateTeacher: `${api}teacher-profile`,
    bankDetails: `${api}teacher-profile/update-back-details`,

    // msg api 
    getStudent: `${api}student-purchased-courses`,
    getTeacher: `${api}teacher-purchased-courses`,
    saveMessage: `${api}messages/send`,
    getSanderMessages : `${api}sender-msg`,
    receivedMessages : `${api}receiver-msg`,




    email: `${api}email`,
    addtoCart: `${api}addToCart`,
    getUserByToken: `${api}userbyToken`,
    removeFromCart: `${api}removeFromCart`,

   

    // upload product Imgs 
     uploadImages: `${api}upload-img`

    
   


}
