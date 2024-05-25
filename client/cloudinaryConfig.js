// cloudinaryConfig.js
import { Cloudinary } from 'cloudinary-core';

const cloudinaryInstance = new Cloudinary({
  cloud_name: import.meta.env.VITE_CLOUDINARY_NAME,
  api_key: import.meta.env.VITE_CLOUDINARY_KEY,
  api_secret: import.meta.env.VITE_CLOUDINARY_SECRET,
  secure: true,
});

export default cloudinaryInstance;
