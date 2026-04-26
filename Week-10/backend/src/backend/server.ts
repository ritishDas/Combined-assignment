// server.ts
import type { Request, Response, NextFunction } from 'express';
import 'dotenv/config';
import express from 'express';
import cors from 'cors';
import { fileURLToPath } from "url";
import path from "path";
import mongoose from 'mongoose';



import authRoute from './routes/auth.routes.js'
import householdRoute from './routes/household.routes.js'
import cookieParser from 'cookie-parser';


const app = express();


const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const staticFiles = path.resolve(__dirname, '..', 'frontend')


app.use(cors());
app.use(express.json());
app.use(cookieParser());
app.use(express.static(staticFiles,
  // {  
  //   maxAge: '1y', // 1 year
  //   immutable: true
  // }
));


app.use('/api/auth', authRoute);
app.use('/api/household', householdRoute);

// Global Error Handling
app.use((
  err: any,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  console.error(err);

  return res.status(err.status || 500).json({
    success: false,
    message: err.message || 'Internal Server Error'
  });
});


// frontend routing
app.use((req: Request, res: Response) => {
  res.sendFile(path.join(staticFiles, 'index.html'));
});


const PORT = process.env.PORT || 3000;
mongoose.connect(process.env.MONGO_URI!).then(() => {
  app.listen(PORT, () => {
    console.log("server listening 🚀🚀🚀 PORT:", PORT);
  });
});


