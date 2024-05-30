// index.js or main.js
import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router } from 'react-router-dom';
import AuthProvider from './contexts/AuthProvider'; // Use the combined AuthContext
import ErrorBoundary from './components/ErrorBoundary';
import App from './App';
import './index.css';
import './styles/global.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ErrorBoundary>
      <AuthProvider>
        <Router>
          <App />
        </Router>
      </AuthProvider>
    </ErrorBoundary>
  </React.StrictMode>
);
