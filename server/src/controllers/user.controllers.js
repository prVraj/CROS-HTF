import { User } from '../models/user.models.js'
import { ApiError } from '../utils/ApiError.js'
import { ApiResponse } from '../utils/ApiResponse.js'

export const registerUser = async(req,res) => {

    const {name} = req.body;
    console.log(req.cookies);

    if(req.cookies?.userId){
        const user = await User.findById(req.cookies.userId);
        return res.json(new ApiResponse(201,user, "User Already Exist")); 
    }

    if(!name){
        throw new ApiError(401,"Username is Required...!!!")
    }

    const user = await User.create({name})

    if(!user){
        throw new ApiError(500,"User Not Created")
    }

    res.cookie("userId", user._id, {
      secure: true,
    });

    return res
      .status(200)
      .json(new ApiResponse(201, {}, "User Created Successfully...!"));

}

