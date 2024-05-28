// utils/cloudinarySetup.js
import { Cloudinary } from 'cloudinary-core';

const cloudinaryInstance = new Cloudinary({
  cloud_name: import.meta.env.VITE_CLOUDINARY_NAME,
  secure: true,
});

export default cloudinaryInstance;