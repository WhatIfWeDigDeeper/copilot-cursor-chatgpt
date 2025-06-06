import multer from 'multer';
import path from 'path';
import { fileURLToPath } from 'url';

// Get the directory name of the current module
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Set up storage configuration for multer
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, path.join(__dirname, '../../public/images')); // Adjust the path as needed
  },
  filename: (req, file, cb) => {
    cb(null, `${Date.now()}${path.extname(file.originalname)}`); // Append timestamp to avoid name collisions
  }
});

// Create the multer instance with the storage configuration
const upload = multer({ storage });

export default upload;

// Usage example in a route (not included in this file):
// import upload from '../models/upload.js';
// import express from 'express';
// const router = express.Router();
//
// // Route to handle file uploads

// router.post('/upload', upload.single('file'), (req, res) => {
//   if (!req.file) {
//     return res.status(400).json({ error: 'No file uploaded.' });
//   }
//   res.json({ message: 'File uploaded successfully.', file: req.file });
// });
//
// export default router;
// Note: Make sure to create the 'uploads' directory in the root of your project or adjust the path accordingly.
