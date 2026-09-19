import usermodel from "../models/userModel.js";
import bcrypt from "bcryptjs";
import { accessToken, refershToken } from "../services/tokenServices.js";

export const signup =async(req,res)=>{
try {
    const match=await usermodel.findOne({email:req.body.email})
if(match){
    return res.status(409).json({msg:"email already exist"})
}

const user=new usermodel(req.body)
await user.save()
res.status(201).json({msg:"user created successful"})
    
} catch (error) {
    res.status(404).json({msg:"server not avalible"})
}

}



export const login = async (req, res) => {
try {
    const user = await usermodel.findOne({ email: req.body.email });

    if (!user) {
        return res.status(404).json({ msg: "invalid useremail" });
    }

    const frntpss = req.body.password;
    const dbpass = user.password;
    
    const match = await bcrypt.compare(frntpss, dbpass);

    if (!match) {
        return res.status(400).json({ msg: "invalid credential" });
    }
    
    const acc = await accessToken(user)
    const ref =await refershToken(user)
    res.cookie("reftoken",ref,{httponly:true})
    return res.status(200).json({ msg: "login successful...",accessToken:acc });

} catch (error) {
    console.log(error);
    return res.status(500).json({ msg: "server error", error: error.message });
}
}

export const auth =async(req,res)=>{

}