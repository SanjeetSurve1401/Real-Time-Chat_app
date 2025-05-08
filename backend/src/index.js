import express from 'express';
import dotnev from 'dotenv';
import authRoutes from './routes/auth.route.js';
import messageRoutes from './routes/meesage.route.js';
import cors from "cors";


import { connectDB } from './lib/db.js';
import cookieParser from "cookie-parser"

dotnev.config();
const app = express();

const port = process.env.PORT

app.use(express.json())
app.use(cookieParser())

app.use("/api/auth", authRoutes)
app.use("/api/message", messageRoutes)
app.use(cors({
  origin: "http://localhost:5173",
  credentials: true,
}))


app.listen(port, () => {
  console.log('Server is running on port '+port);
  connectDB()
});

