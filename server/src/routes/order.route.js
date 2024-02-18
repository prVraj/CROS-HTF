import { Router } from "express";
import { createOrder, getOrderById, getOrders } from "../controllers/order.controllers.js";
import { verifyCookie } from "../Middlewares/auth.middleware.js";

const router = Router();

router.route("/create").post(verifyCookie, createOrder);
router.route("/find/:id").get(verifyCookie, getOrderById);
router.route("/all").get(getOrders);

export default router;