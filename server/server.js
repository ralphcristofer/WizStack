import dotenv from "dotenv";
import express from "express";
import cors from 'cors';
import path from 'path';
import url from 'url';
import connectDb from "./config/config.mjs";
import { HttpStatus } from "./util/dialogInvoke.mjs";
import userRouter from "./routes/api/users.routes.mjs";
import authRouter from "./routes/api/auth.routes.mjs";

dotenv.config({ path: "./config.env" });
connectDb();

const app = express();
const httpStatus = new HttpStatus();

app.use(express.json());
app.use(cors());
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.json({ message: "Welcome to Wizstack Student Management App" });
});

app.use("/api", userRouter);
app.use("/api", authRouter);

// Serve static files from the Vite build
const __dirname = path.dirname(url.fileURLToPath(import.meta.url));
const buildPath = path.resolve(__dirname, '../dist');
app.use(express.static(buildPath));

// Serve index.html file for any unknown paths
app.get('*', (req, res) => {
  res.sendFile(path.resolve(buildPath, 'index.html'));
});

app.listen(process.env.PORT, () => {
  httpStatus.showMessage(
    httpStatus.getStatusType(200),
    200,
    `Success! Server is running on port ${process.env.PORT}, http://localhost:${process.env.PORT}`
  );
});
