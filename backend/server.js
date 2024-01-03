import "dotenv/config";
import {config} from "dotenv";
const app = require("./app");
const { connectDatabase } = require("./config/database");
const cloudinary = require("cloudinary");
// server.js
const mongoose = require('mongoose');
mongoose.connection.on('error', (err) => {
  console.error('MongoDB connection error:', err);
});

connectDatabase();

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

app.listen(process.env.PORT, () => {
  console.log(`Server is running on port ${process.env.PORT}`);
});