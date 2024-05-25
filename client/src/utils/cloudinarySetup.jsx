import { Cloudinary } from 'cloudinary-core';

// Log the environment variable to verify it's being read correctly
console.log('Cloudinary Name:', import.meta.env.VITE_CLOUDINARY_NAME);

const cloudinaryInstance = new Cloudinary({
  cloud_name: import.meta.env.VITE_CLOUDINARY_NAME,
  secure: true,
});

export default cloudinaryInstance;
