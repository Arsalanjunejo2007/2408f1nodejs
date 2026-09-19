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

export const refresh = async (req, res) => {
  try {
    const ref = req.cookies.refToken;

    const match = jwt.verify(
      ref,
      process.env.REFRESH_SECRET
    );

    if (!match) {
      return res.status(400).json({
        msg: "invalid token"
      });
    }

    const acc = jwt.sign(
      {
        id: match.id,
        email: match.email
      },
      process.env.ACCESS_SECRET,
      {
        expiresIn: "15m"
      }
    );

    res.status(200).json({
      msg: "new access token generated",
      accessToken: acc
    });

  } catch (error) {
    res.status(400).json({
      msg: "cookie error"
    });
  }
};
