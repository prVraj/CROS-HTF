import mongoose from "mongoose";

const orderSchema = new mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true 
    },
    menuItems: [{
        item: {
            type: String,
            required: true
        },
        quantity: {
            type: Number,
            default: 1
        },
        price : {
            type: Number,
            required: true
        }
    }],
    totalAmount: {
        type: Number,
        required: true
    }
});

export const Order = mongoose.model('Order', orderSchema);