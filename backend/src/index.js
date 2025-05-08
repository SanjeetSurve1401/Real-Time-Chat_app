import express from 'express';
import dotnev from 'dotenv';
import authRoutes from './routes/auth.route.js';
import { connectDB } from './lib/db.js';
import cookieParser from "cookie-parser"

dotnev.config();
const app = express();

const port = process.env.PORT

app.use(express.json())
app.use(cookieParser())
app.use("/api/auth", authRoutes)

app.listen(port, () => {
  console.log('Server is running on port '+port);
  connectDB()
});