import { Cloudinary } from 'cloudinary-core';

const cloudinary = new Cloudinary({ 
  cloud_name: process.env.VITE_CLOUDINARY_NAME, 
  secure: true 
});

export default cloudinary;
