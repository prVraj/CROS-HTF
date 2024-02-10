import dotenv from "dotenv";
import app from "./app.js"
import ConnectDB from "./db/index.js";

dotenv.config({
    path: "./env"
});

ConnectDB()
.then(() =>{
    app.on("error",()=>{
        console.log(error);    
    })
    app.listen(process.env.PORT,()=>{
        console.log(`Server is running on port ${process.env.PORT}`);
    })
}
)
.catch((error) =>{
    console.log(error);
}
)
app.get("/",(req,res)=>{
    res.send("Hello World")
});