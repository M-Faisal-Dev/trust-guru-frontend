// const root = "http://localhost:4000"
const root = "https://backend.trustyourguru.com"



export const api = `${root}/api/`
// 
export const routes = {
   
    register: `${api}register`,
    login: `${api}login`,
    logout: `${api}logout`,
    updateUserProfile: `${api}updateProfile`,
    findEmail: `${api}find-email`,
    resetPassword: `${api}reset-password`,
    getSingleUser: `${api}single-user`,
    checkCoursePurchase: `${api}check-user`,
   
    // for creating course 
    createCourse: `${api}course/create`,
    course: `${api}course`,
    purchasedCourse: `${api}course/add-purchased-course`,

    // for creating teacher profile
    
    createTeacher: `${api}teacher-profile/create`,
    teacher: `${api}teacher-profile`,
    getAllTeachers: `${api}teacher-profile`,
    getSingleTeacher: `${api}teacher-profile`,
    getSingleTeacherbyToken: `${api}teacher-profile/get-single-teacher`,
    updateTeacher: `${api}teacher-profile`,
    updateTeacherSkills: `${api}teacher-profile/update-skills`,
    bankDetails: `${api}teacher-profile/update-back-details`,
    createandUpdatePoints: `${api}teacher-profile/update-point`,
   
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
