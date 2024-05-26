import { Cloudinary } from 'cloudinary-core';

// Check if the environment variables are being correctly logged
console.log('Cloudinary Name:', import.meta.env.VITE_CLOUDINARY_NAME);

const cloudinaryInstance = new Cloudinary({
  cloud_name: import.meta.env.VITE_CLOUDINARY_NAME,
  secure: true,
});

export default cloudinaryInstance;
