import express from 'express';
import cors from 'cors';
import cookieParser from "cookie-parser"

const app = new express();
app.use(
  cors({
    origin: "http://localhost:5173", // Replace this with your actual frontend origin
    credentials: true, // Make sure to include this if your frontend makes requests with credentials (e.g., cookies)
  })
);


app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "http://localhost:5173"); // Replace with your client's origin
  res.header("Access-Control-Allow-Credentials", true); // Allow credentials
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});
app.use(express.json({limit: "16kb"}))
app.use(cookieParser())

import orderRouter from "./routes/order.route.js";
import userRouter from "./routes/user.route.js";
import menuRouter from "./routes/menu.route.js";

app.use("/order", orderRouter);
app.use("/user", userRouter);
app.use("/menu", menuRouter);

export default app;