import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  orders_id: {
    type: [String], // Array of order IDs
    default: [], // Default value as an empty array
  },
});

export const User = mongoose.model('User', userSchema);