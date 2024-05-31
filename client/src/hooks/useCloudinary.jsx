import { Cloudinary } from '@cloudinary/url-gen';

const useCloudinary = () => {
  const cloudinaryInstance = new Cloudinary({
    cloud: {
      cloudName: import.meta.env.VITE_CLOUDINARY_NAME, // Ensure this environment variable is set
    },
  });

  return cloudinaryInstance;
};

export default useCloudinary;
