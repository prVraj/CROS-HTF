import { Router } from "express";
import { createOrder, getOrderById, getOrders } from "../controllers/order.controllers.js";

const router = Router();

router.route("/create").post(createOrder);
router.route("/find/:id").get(getOrderById);
router.route("/all").get(getOrders);

export default router;