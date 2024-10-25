import React from 'react';
import { ReactKeycloakProvider } from '@react-keycloak/web';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import keycloak from './config/keycloak';
import PrivateRoute from './components/PrivateRoute';
import Login from './pages/Login';
import Home from './pages/Home';

function App() {
  return (
    <ReactKeycloakProvider authClient={keycloak}>
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route
            path="/"
            element={
              <PrivateRoute>
                <Home />
              </PrivateRoute>
            }
          />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </BrowserRouter>
    </ReactKeycloakProvider>
  );
}

export default App;