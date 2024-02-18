import { ApiError } from '../utils/ApiError.js';
import { User } from '../models/user.models.js';
import {Order} from '../models/order.models.js';
import { ApiResponse } from '../utils/ApiResponse.js';
import { Menu } from '../models/menu.models.js';

// const OrderController = {
//     async createOrder(req, res) {
//         console.log(req.body);
//         try {
//             const order = new Order(req.body);
//             await order.save();
//             res.status(201).json(order);
//         } catch (error) {
//             res.status(500).json({ message: error.message });
//         }
//     },

//     async getOrderById(req, res) {
//         try {
//             const order = await Order.findById(req.params.id);
//             if (!order) {
//                 return res.status(404).json({ message: 'Order not found' });
//             }
//             res.json(order);
//         } catch (error) {
//             res.status(500).json({ message: error.message });
//         }
//     },

//     async updateOrderStatus(req, res) {
//         try {
//             const order = await Order.findById(req.params.id);
//             if (!order) {
//                 return res.status(404).json({ message: 'Order not found' });
//             }
//             order.orderStatus = req.body.orderStatus;
//             await order.save();
//             res.json(order);
//         } catch (error) {
//             res.status(500).json({ message: error.message });
//         }
//     },

//     async getUserOrders(req, res) {
//         try {
//             const orders = await Order.find({ user: req.params.userId });
//             res.json(orders);
//         } catch (error) {
//             res.status(500).json({ message: error.message });
//         }
//     }
// };

export const createOrder = async (req,res) =>{
    const { menuItems, totalAmount } = req.body;
    if (menuItems.length == 0) {
      throw new ApiError(400, "Menu Items are Required...!!!");
    }
    try {
      const order = await Order.create({ menuItems, totalAmount });
      if (!order) {
        throw new ApiError(500, "Order Not Created...!!!");
      }
      const user = await User.findByIdAndUpdate(
        req.user._id,
        { $push: { orders_id: order._id } },
        { new: true }
      );
      const list = user.orders_id;
      res
        .status(201)
        .json(
          new ApiResponse(201,{list,order}, "Order Created Successfully...!!!")
        );
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
}

export const getOrderById = async (req,res) =>{
    try {
        const order = await Order.findById(req.params.id);
        if (!order) {
            return res.status(404).json({ message: 'Order not found' });
        }
        res.json(order);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

export const getOrders = async (req, res) => {
    const userId = req.cookies?.userId;
  try {
    const user = await User.findById(userId);
    const orders = user.orders_id;
    res.json(new ApiResponse(200, orders, "Orders Fetched Successfully...!!!"));
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// module.exports = OrderController;