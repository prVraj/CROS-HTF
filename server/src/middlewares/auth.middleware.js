import { User } from "../models/user.models.js";
import { ApiError } from "../utils/ApiError.js";
import { ApiResponse } from "../utils/ApiResponse.js";

export const verifyCookie = async (req, res, next) => {
  try {
    const token = req.cookies?.userId 
      // || req.header("Authorization")?.replace("Bearer ", "");

    if (token === undefined) {
      return res.status(400).json(new ApiResponse(400,{},"User Does Not Exist"));
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
