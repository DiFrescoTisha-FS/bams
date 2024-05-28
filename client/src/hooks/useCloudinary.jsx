// hooks/useCloudinary.js
import { useMemo } from 'react';
import cloudinaryInstance from '../utils/cloudinarySetup';

const useCloudinary = () => {
  return useMemo(() => cloudinaryInstance, []);
};

export default useCloudinary;
