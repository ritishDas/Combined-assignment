import 'dotenv/config';
import express from 'express';
import cors from 'cors';
import { fileURLToPath } from "url";
import path from "path";
import mongoose from 'mongoose';
import authRoute from './routes/auth.routes.js';
const app = express();
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const staticFiles = path.resolve(__dirname, '..', 'frontend');
app.use(cors());
app.use(express.json());
app.use(express.static(staticFiles));
app.use('/api', authRoute);
// Global Error Handling
app.use((err, req, res, next) => {
    console.error(err);
    return res.status(err.status || 500).json({
        success: false,
        message: err.message || 'Internal Server Error'
    });
});
// frontend routing
app.use((req, res) => {
    res.sendFile(path.join(staticFiles, 'index.html'));
});
const PORT = process.env.PORT || 3000;
mongoose.connect(process.env.MONGO_URI).then(() => {
    app.listen(PORT, () => {
        console.log("server listening 🚀🚀🚀 PORT:", PORT);
    });
});
//# sourceMappingURL=server.js.map