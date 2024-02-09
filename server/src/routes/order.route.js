import { Router } from "express";
import { createOrder, getOrderById, getOrders } from "../controllers/order.controllers.js";

const router = Router();

router.route("/order").post(createOrder);
router.route("/order/:id").get(getOrderById);
router.route("/orders").get(getOrders);

export default router;