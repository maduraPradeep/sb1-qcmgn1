import React, { useState } from 'react';
import { useKeycloak } from '@react-keycloak/web';
import FileUploader from '../components/FileUploader';
import FileList from '../components/FileList';
import { LogOut } from 'lucide-react';

interface UploadedFile {
  id: string;
  name: string;
  url: string;
  uploadDate: string;
}

const Home: React.FC = () => {
  const { keycloak } = useKeycloak();
  const [files, setFiles] = useState<UploadedFile[]>([]);

  const handleFileUpload = (file: File) => {
    const newFile: UploadedFile = {
      id: Math.random().toString(36).substr(2, 9),
      name: file.name,
      url: URL.createObjectURL(file),
      uploadDate: new Date().toLocaleString()
    };
    setFiles((prev) => [newFile, ...prev]);
  };

  const handleDownload = (file: UploadedFile) => {
    window.open(file.url, '_blank');
  };

  const handleLogout = () => {
    keycloak.logout();
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <nav className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16 items-center">
            <h1 className="text-xl font-semibold">CSV File Management</h1>
            <div className="flex items-center space-x-4">
              <span className="text-sm text-gray-600">
                Welcome, {keycloak.tokenParsed?.preferred_username}
              </span>
              <button
                onClick={handleLogout}
                className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 rounded-md"
              >
                <LogOut className="w-4 h-4 mr-2" />
                Logout
              </button>
            </div>
          </div>
        </div>
      </nav>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <FileUploader onFileUpload={handleFileUpload} />
        <FileList files={files} onDownload={handleDownload} />
      </main>
    </div>
  );
};

export default Home;