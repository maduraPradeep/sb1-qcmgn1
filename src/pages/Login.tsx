import React, { useEffect } from 'react';
import { useKeycloak } from '@react-keycloak/web';
import { useNavigate } from 'react-router-dom';
import { LogIn } from 'lucide-react';

const Login: React.FC = () => {
  const { keycloak, initialized } = useKeycloak();
  const navigate = useNavigate();

  useEffect(() => {
    if (initialized && keycloak.authenticated) {
      navigate('/');
    }
  }, [keycloak, initialized, navigate]);

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
        <h1 className="text-2xl font-bold mb-6 text-center">Welcome to CSV File Management</h1>
        <p className="text-gray-600 text-center mb-8">
          Please log in to access the file management system
        </p>
        <button
          onClick={() => keycloak.login()}
          className="w-full px-4 py-3 text-white bg-blue-600 rounded-md hover:bg-blue-700 flex items-center justify-center"
        >
          <LogIn className="w-5 h-5 mr-2" />
          Login with Keycloak
        </button>
      </div>
    </div>
  );
};

export default Login;