const root = "http://localhost:4000"


export const api = `${root}/api/`
// 
export const routes = {
   
    // car listing api 
    register: `${api}register`,
    login: `${api}login`,
    logout: `${api}logout`,
    updateUserProfile: `${api}updateProfile`,


    product: `${api}product`,
    email: `${api}email`,
    addtoCart: `${api}addToCart`,
    getUserByToken: `${api}userbyToken`,
    removeFromCart: `${api}removeFromCart`,

   

    // upload product Imgs 
     uploadImages: `${api}upload-img`

    
   


}
