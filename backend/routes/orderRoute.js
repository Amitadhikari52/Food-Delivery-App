import exprees from "express";
import authMiddleware from "./../middleware/auth.js";
import {
  PlaceOrder,
  verifyOrder,
  userOrders,
  listOrders,
  updateStatus,
} from "../controllers/orderController.js";

const orderRouter = exprees.Router();

orderRouter.post("/place", authMiddleware, PlaceOrder);
orderRouter.post("/verify", verifyOrder);
orderRouter.post("/userorders", authMiddleware, userOrders);
orderRouter.get("/list", listOrders);
orderRouter.post("/status", updateStatus);

export default orderRouter;
