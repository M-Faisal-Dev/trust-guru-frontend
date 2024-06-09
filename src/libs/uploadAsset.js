import axios from 'axios';
const root = 'http://localhost:4000/api/upload-profile';

const handleProfileImageUpload = async (image) => {
  const formData = new FormData();
  formData.append('image', image);

  try {
    const response = await axios.post(root, formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    });
    console.log(response.data, "for checking upload progress");
    return response.data;
  } catch (error) {
    console.error('Error uploading image:', error);
    // Handle error (e.g., show error message)
  }
};

export { handleProfileImageUpload };
