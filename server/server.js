import path from "path";
import express from "express";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";

import authRoutes from "./routes/auth.routes.js";
import messageRoutes from "./routes/message.routes.js";
import userRoutes from "./routes/user.routes.js";

import connectToMongoDB from "./config/mongoDB.js";
import { app, server } from "./socket/socket.js";



const __dirname = path.resolve();

dotenv.config();

app.use(express.json()); // to parse the incoming requests with JSON payloads (from req.body)
app.use(cookieParser());

app.use("/api/auth", authRoutes);
app.use("/api/messages", messageRoutes);
app.use("/api/users", userRoutes);

app.use(express.static(path.join(__dirname, "/client/dist")));

app.get("*", (req, res) => { 
	res.sendFile(path.join(__dirname, "client", "dist", "index.html"));
});

const PORT = process.env.PORT;
server.listen(PORT, () => { 
	connectToMongoDB();
	console.log(`Server Running on port ${PORT}`);
});
