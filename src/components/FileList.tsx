import React from 'react';
import { Download, FileSpreadsheet } from 'lucide-react';

interface File {
  id: string;
  name: string;
  url: string;
  uploadDate: string;
}

interface FileListProps {
  files: File[];
  onDownload: (file: File) => void;
}

const FileList: React.FC<FileListProps> = ({ files, onDownload }) => {
  return (
    <div className="mt-6">
      <h2 className="text-xl font-semibold mb-4">Uploaded Files</h2>
      <div className="space-y-2">
        {files.length === 0 ? (
          <p className="text-gray-500 text-center py-4">No files uploaded yet</p>
        ) : (
          files.map((file) => (
            <div
              key={file.id}
              className="flex items-center justify-between p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="flex items-center space-x-4">
                <FileSpreadsheet className="w-5 h-5 text-green-600" />
                <div>
                  <p className="text-sm font-medium text-gray-900">{file.name}</p>
                  <p className="text-xs text-gray-500">{file.uploadDate}</p>
                </div>
              </div>
              <button
                onClick={() => onDownload(file)}
                className="p-2 text-blue-600 hover:text-blue-800 hover:bg-blue-50 rounded-full transition-colors"
                title="Download file"
              >
                <Download className="w-5 h-5" />
              </button>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default FileList;