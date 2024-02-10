import { Menu } from "../models/menu.models.js";
import { ApiError } from "../utils/ApiError.js";
import { ApiResponse } from "../utils/ApiResponse.js";

// Controller to create a new menu item
export const createMenuItem = async (req, res) => {
  try {
    const { category, name, description, price, isAvailable } = req.body;

    // Create a new menu item
    const menuItem = new Menu({
      category,
      items: [{ name, description, price, isAvailable }],
    });

    // Save the menu item to the database
    await menuItem.save();

    res
      .status(201)
      .json(new ApiResponse(201, menuItem, "Menu item uploaded successfully."));
  } catch (error) {
    // Handle error if saving the menu item fails
    res
      .status(500)
      .json(new ApiError(500, "Internal server error", error.message));
  }
};

// Controller to get all menu items
export const getAllMenuItems = async (req, res) => {
  try {
    // Fetch all menu items from the database
    const menuItems = await Menu.find();

    res
      .status(200)
      .json(
        new ApiResponse(200, menuItems, "Menu items retrieved successfully.")
      );
  } catch (error) {
    // Handle error if fetching menu items fails
    res
      .status(500)
      .json(new ApiError(500, "Internal server error", error.message));
  }
};

// Controller to update a menu item by ID
export const updateMenuItemById = async (req, res) => {
  try {
    const { id } = req.params;
    const { category, name, description, price, isAvailable } = req.body;

    // Find the menu item by ID and update its properties
    const menuItem = await Menu.findByIdAndUpdate(
      id,
      {
        category,
        items: [{ name, description, price, isAvailable }],
      },
      { new: true }
    );

    if (!menuItem) {
      throw new ApiError(404, "Menu item not found.");
    }

    res
      .status(200)
      .json(new ApiResponse(200, menuItem, "Menu item updated successfully."));
  } catch (error) {
    // Handle error if updating the menu item fails
    if (error instanceof ApiError) {
      res
        .status(error.statusCode)
        .json(new ApiError(error.statusCode, error.message));
    } else {
      res
        .status(500)
        .json(new ApiError(500, "Internal server error", error.message));
    }
  }
};

// Controller to delete a menu item by ID
export const deleteMenuItemById = async (req, res) => {
  try {
    const { id } = req.params;

    // Find the menu item by ID and delete it
    const menuItem = await Menu.findByIdAndDelete(id);

    if (!menuItem) {
      throw new ApiError(404, "Menu item not found.");
    }

    res
      .status(200)
      .json(new ApiResponse(200, null, "Menu item deleted successfully."));
  } catch (error) {
    // Handle error if deleting the menu item fails
    if (error instanceof ApiError) {
      res
        .status(error.statusCode)
        .json(new ApiError(error.statusCode, error.message));
    } else {
      res
        .status(500)
        .json(new ApiError(500, "Internal server error", error.message));
    }
  }
};
