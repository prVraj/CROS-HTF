import express from 'express';
import cors from 'cors';
import cookieParser from "cookie-parser"

const app = new express();
app.use(cors({
    origin : process.env.CRS_ORIGIN,
    credentials: true
}))
app.use(express.json({limit: "16kb"}))
app.use(cookieParser())

import orderRouter from "./routes/order.route.js";

app.use("/customer", orderRouter);

export default app;