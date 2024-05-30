import React, { Suspense } from 'react';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import { useAuthContext } from './contexts/AuthContext';
import Home from './pages';

const App = () => {
  const { authState } = useAuthContext();
  const currentUser = authState?.user;

  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Routes>
        <Route path="/" element={<Home currentUser={ currentUser } />} />
      </Routes>
    </Suspense>
  );
};

export default App;
