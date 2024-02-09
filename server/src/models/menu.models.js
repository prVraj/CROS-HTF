import mongoose from "mongoose";

const menuSchema = new mongoose.Schema({
    category: {
        type: String,
        required: true,
        enum: ['Starters', 'Main Course', 'Desserts', 'Drinks'] // Add more categories as needed
    },
    items: [{
        name: {
            type: String,
            required: true
        },
        description: {
            type: String
        },
        price: {
            type: Number,
            required: true
        },
        isAvailable: {
            type: Boolean,
            default: true
        }
    }]
});

export const Menu  = mongoose.model('Menu', menuSchema);