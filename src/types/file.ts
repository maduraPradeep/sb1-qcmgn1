export interface UploadedFile {
  id: string;
  name: string;
  type: string;
  uploadDate: Date;
  size: number;
  url: string;
}

export type FileType = 'document' | 'image' | 'spreadsheet' | 'other';