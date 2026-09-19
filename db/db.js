import mongoose from "mongoose";

const db=async ()=>{
    await mongoose.connect(process.env.MONGO_URL)
console.log("bd connceted")

}

export default db

