import express from "express";
import "dotenv/config";
import mongoose from "mongoose";
import router from "./Route/userRoute.js";
import cors from "cors"
import cookieParser from "cookie-parser";
import adminRouter from "./Route/adminRoute.js";
import path from "path";

const app = express();
const Port = process.env.PORT;
const db = process.env.DB_URL;

try {
 const DbConnect=async()=>{
  await mongoose.connect(db, { useNewUrlParser: true, useUnifiedTopology: true });
  console.log("Connected to MongoDB");
 }
 DbConnect()
  
} catch (error) {
  console.error("Error connecting to MongoDB:", error);
}

// Middleware
app.use(express.json());
app.use(cookieParser())
app.use(cors({
  credentials: true,
  origin: 'http://localhost:5173' // frontend's URL
}));

// Route for user signup
app.use('/signup', router);
app.use('/login',router);
app.use('/logout',router)
// admin Route middleware
app.use('/user',adminRouter)
//Delete user
app.use('/delte',adminRouter)
//to host app on vercel
app.get("/", (req, res) => {
  app.use(express.static(path.resolve( "ClientSide", "build")));
  res.sendFile(path.resolve( "ClientSide", "build", "index.html"));
});
// Start the server
app.listen(Port, () => {
  console.log(`Server is running on port ${Port}`);
});
