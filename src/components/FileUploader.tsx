import React, { useState, useCallback } from 'react';
import { Upload } from 'lucide-react';

interface FileUploaderProps {
  onFileUpload: (file: File) => void;
}

const FileUploader: React.FC<FileUploaderProps> = ({ onFileUpload }) => {
  const [selectedFile, setSelectedFile] = useState<File | null>(null);

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files[0]) {
      setSelectedFile(event.target.files[0]);
    }
  };

  const handleUpload = useCallback(() => {
    if (selectedFile) {
      onFileUpload(selectedFile);
      setSelectedFile(null);
    }
  }, [selectedFile, onFileUpload]);

  return (
    <div className="p-6 bg-white rounded-lg shadow-md">
      <div className="flex items-center space-x-4">
        <label className="flex-1 cursor-pointer">
          <div className="flex items-center justify-center p-4 border-2 border-dashed rounded-md hover:border-blue-500">
            <Upload className="w-6 h-6 mr-2 text-gray-500" />
            <span className="text-gray-600">
              {selectedFile ? selectedFile.name : 'Choose a CSV file'}
            </span>
          </div>
          <input
            type="file"
            accept=".csv"
            className="hidden"
            onChange={handleFileChange}
          />
        </label>
        <button
          onClick={handleUpload}
          disabled={!selectedFile}
          className="px-6 py-3 text-white bg-blue-600 rounded-md hover:bg-blue-700 disabled:bg-gray-400 disabled:cursor-not-allowed"
        >
          Upload
        </button>
      </div>
    </div>
  );
};

export default FileUploader;