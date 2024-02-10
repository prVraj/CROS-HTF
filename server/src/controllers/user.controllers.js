import {User} from '../models/user.models.js'
import { ApiError } from '../utils/ApiError.js'
import { ApiResponse } from '../utils/ApiResponse.js'

const generateRefreshTokens = async (userId) => {
  try {
    const user = await User.findById(userId);
    const accessToken = user.generateAccessToken();
    const refreshToken = user.generateRefreshToken();

    user.refreshToken = refreshToken;
    await user.save({ validateBeforeSave: false });

    return { accessToken, refreshToken };
  } catch (error) {
    throw new ApiError("An error occured while generating tokens");
  }
}; 

const registerUser = async(req,res) => {
    const {username} = req.body;
    if(!username){
        throw new ApiError(401,"Username is Required...!!!")
    }

    const user = await User.create({username})
    if(!user){
        throw new ApiError(500,"User Not Created")
    }

    res
    .status(200)
    .json(
        new ApiResponse(201,user, "User Created Successfully...!")
    )
}

