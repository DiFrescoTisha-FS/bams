import { useMemo } from 'react';
import cloudinaryInstance from '../utils/cloudinarySetup'; // Ensure the path is correct

const useCloudinary = () => {
  return useMemo(() => cloudinaryInstance, []);
};

export default useCloudinary;
