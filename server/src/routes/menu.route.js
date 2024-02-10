import { Router } from "express";
import {
  createMenuItem,
  getAllMenuItems,
  deleteMenuItemById,
  updateMenuItemById
} from "../controllers/menu.controllers.js";

const router = Router();

router.route("/add").post(createMenuItem);
router.route("/delete/:id").delete(deleteMenuItemById);
router.route("/update/:id").put(updateMenuItemById);
router.route("/show").get(getAllMenuItems);

export default router;