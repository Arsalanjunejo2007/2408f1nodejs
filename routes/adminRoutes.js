import {Router} from "express"
const adminRoutes=Router()



adminRoutes.get("/",(req,res)=>{
    res.end("index page")
})


adminRoutes.get("/home",(req,res)=>{
    res.end("home page")
})
adminRoutes.get("/contact",(req,res)=>{
    res.end("contact page")
})

export default adminRoutes