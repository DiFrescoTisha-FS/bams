// utils/cloudinarySetup.js
import { Cloudinary } from 'cloudinary-core';

// Hardcoding Cloudinary configuration for debugging
const cloudinaryInstance = new Cloudinary({
  cloud_name: 'djqw1de3s',  // Replace with your actual Cloudinary name
  secure: true,
});

export default cloudinaryInstance;
