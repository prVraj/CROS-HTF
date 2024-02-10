import {User} from '../models/user.models.js'
import { ApiError } from '../utils/ApiError.js'
import { ApiResponse } from '../utils/ApiResponse.js'

export const registerUser = async(req,res) => {
    const {name} = req.body;
    if(!name){
        throw new ApiError(401,"Username is Required...!!!")
    }

    const user = await User.create({name})

    if(!user){
        throw new ApiError(500,"User Not Created")
    }

    res
    .status(200)
    .cookie('userId',user._id, {httpOnly:true})
    .json(
        new ApiResponse(201,user, "User Created Successfully...!")
    )
}

