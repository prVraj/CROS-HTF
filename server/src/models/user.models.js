import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    role: {
        type: String,
        enum: ['Customer', 'Staff', 'Admin'],
        default: 'Customer'
    }
});

export const User = mongoose.model('User', userSchema);