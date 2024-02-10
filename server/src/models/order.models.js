import mongoose from "mongoose";

const orderSchema = new mongoose.Schema({
    refreshToken: {
        type: String,
        required: true 
    },
    menuItems: [{
        item: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Menu',
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
    },
    orderStatus: {
        type: String,
        enum: ['Placed', 'Preparing', 'Ready'],
        default: 'Placed'
    }
});

export const Order = mongoose.model('Order', orderSchema);