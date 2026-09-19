import jwt from "jsonwebtoken"
export  const accessToken=async(payload)=>{
 try {
    console.log(payload)
    return jwt.sign({id:payload._id,email:payload.email},process.env.ACCESS_SECTET,{expiresIn:"15m"})
    
 } catch (error) {
    console.log(error)
 }


}


export  const refershToken=async(payload)=>{
return await jwt.sign({id:payload._id,email:payload.email},process.env.REFRESH_SECTET,{expiresIn:"15d"})

} 
