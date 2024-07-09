import axios from 'axios';
const root = 'https://backend.trustyourguru.com/api';
// const root = "http://localhost:4000/api"


const handleProfileImageUpload = async (image) => {
  const formData = new FormData();
  formData.append('image', image);

  try {
    const response = await axios.post(`${root}/upload-profile`, formData, {
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
const handleCoverImageUpload = async (image) => {
  console.log(image.file)
  const formData = new FormData();
  formData.append('image', image.file);
  
  try {
    const response = await axios.post(`${root}/upload-cover`, formData, {
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
const handleThumbnailImageUpload = async (image) => {
  const formData = new FormData();
  formData.append('image', image.file);

  try {
    const response = await axios.post(`${root}/upload-product-img`, formData, {
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

export { handleProfileImageUpload, handleCoverImageUpload, handleThumbnailImageUpload };

