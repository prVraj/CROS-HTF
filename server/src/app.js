import express from 'express';
import cors from 'cors';
import cookieParser from "cookie-parser"

const app = new express();
app.use(cors())
app.use(express.json({limit: "16kb"}))
app.use(cookieParser())

import orderRouter from "./routes/order.route.js";
import userRouter from "./routes/user.route.js";
import menuRouter from "./routes/menu.route.js";

app.use("/order", orderRouter);
app.use("/user", userRouter);
app.use("/menu", menuRouter);

export default app;