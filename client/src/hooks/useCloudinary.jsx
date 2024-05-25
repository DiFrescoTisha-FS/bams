import { useMemo } from 'react';
import cloudinaryInstance from '../utils/cloudinarySetup'; // Adjust the import path as necessary

const useCloudinary = () => {
  return useMemo(() => cloudinaryInstance, []);
};

export default useCloudinary;
