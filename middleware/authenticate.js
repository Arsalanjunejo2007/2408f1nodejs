const Authenticate=(req,res,next)=>{
    try {
        const authtoken= (req.headers.Authenticate)
        console.log("midel ware hit")
        const actualtoken=authtoken.split(" ")[1]
        const match = jwt.verify(actualtoken,process.env.ACCESS_SECTET)
        
        next()
    } catch (error) {
        res.status(400).json({msg:"token requried"})
        // console.log(error)
    }
}

export default Authenticate