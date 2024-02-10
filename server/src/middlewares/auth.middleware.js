import { User } from "../models/user.models.js";
import { ApiError } from "../utils/ApiError.js";
import { registerUser } from "../controllers/user.controllers.js";

export const verifyCookie = async (req, res, next) => {
  try {
    const token =
      req.cookies?.userId ||
      req.header("Authorization")?.replace("Bearer ", "");

    console.log(token);

    if (!token) {
      throw new ApiError(401, "Access Denied")
    }

    const user = await User.findById(token).select();

    if (!user) {
      throw new ApiError(401, "Invalid Access Token");
    }
    req.user = user;
    next();

  } catch (error) {
    throw new ApiError(
      401,
      error?.message || "Something went wrong in Verifying Cookie"
    );
  }
};
