import mongoose from "mongoose";

const  connetcDb = async ()=>{
const connected = await mongoose.connect('mongodb://localhost:27017/ecommerce')
console.log('db is running')
return connected
}

export default connetcDb