import React, { createContext, useContext, useState, useEffect } from 'react';
import axios from 'axios';

const AuthContext = createContext();

export const useAuthContext = () => useContext(AuthContext);

export const AuthProvider = ({ children }) => {
  const [authState, setAuthState] = useState({ isAuthenticated: false, user: null, message: "", errorMessage: "" });

  useEffect(() => {
    const fetchAuthStatus = async () => {
        try {
            const response = await axios.get(`${import.meta.env.VITE_API_URL}/auth/status`, {
                withCredentials: true,
                headers: {
                    'Cache-Control': 'no-cache',
                    'Pragma': 'no-cache',
                    'Expires': '0',
                },
            });
            if (response.data.isAuthenticated) {
                setAuthState({ isAuthenticated: true, user: response.data.user, message: "", errorMessage: "" });
            } else {
                setAuthState({ isAuthenticated: false, user: null, message: "", errorMessage: "" });
            }
        } catch (error) {
            setAuthState({ isAuthenticated: false, user: null, message: "", errorMessage: "Failed to check authentication status." });
        }
    };
    fetchAuthStatus();
}, []);


  const handleSignIn = () => {
    window.location.href = `${import.meta.env.VITE_API_URL}/auth/google`;
  };

  const handleSignOut = async () => {
    try {
      await axios.get(`${import.meta.env.VITE_API_URL}/auth/logout`, { withCredentials: true });
      setAuthState({ isAuthenticated: false, user: null, message: "", errorMessage: "" });
      window.location.href = "/"; // Redirect to home page on logout
    } catch (error) {
      console.error('Error during logout:', error);
    }
  };

  return (
    <AuthContext.Provider value={{ authState, handleSignIn, handleSignOut }}>
      {children}
    </AuthContext.Provider>
  );
};
