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
    // console.log(req.body);
    const {menuItems, totalAmount} = req.body;
    const user = await User.findById(req.user._id);
    if(menuItems.length == 0){
        throw  new ApiError(400, "Menu Items are Required...!!!")
    }
    console.log(user);

        try {
            const order = await Order.create({user:user._id, menuItems, totalAmount});
            if(!order){
                throw new ApiError(500, "Order Not Created...!!!");
            }
            user.orders_id.push(order._id)
            res.status(201).json(new ApiResponse(201,order, "Order Created SUccessfully...!!!"));
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
  try {
    const orders = await Order.find();
    res.json(orders);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// module.exports = OrderController;