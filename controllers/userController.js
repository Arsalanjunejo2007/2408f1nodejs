import usermodel from "../models/userModel.js";

export const userpage = async (req, res) => {
    try {
        const user = await usermodel.find();

        res.status(200).json({
            data: user
        });
    } catch (error) {
        res.status(500).json({
            msg: "db not available"
        });
    }
};




export const showbyid = async (req, res) => {
    try {
        const user = await usermodel.findById(req.params.id);

        if (!user) {
            return res.status(404).json({
                msg: "User not found"
            });
        }

        res.status(200).json({
            data: user
        });

    } catch (error) {
        res.status(500).json({
            msg: "DB not available"
        });
    }
};
    

export const home =  async(req, res) => {
    // console.log(req.body)
    // res.end("Welcome to the Home Page!");

    try {
         const user=new  usermodel(req.body);
    await user.save();
    res.status(201).json({msg: "user create successful"})
    } catch (error) {
    res.status(500).json({msg: "validation failed",reason: error })
        
    }
}

export const contact = (req, res) => {
    res.end(" Create Page!");
}

export const updatepage = async (req, res) => {
  try {
    const user = await usermodel.findByIdAndUpdate(req.params.id, req.body,{new:true})

    res.status(200).json({msg: "User updated successfully",data: user});
} 
catch (error) {
    res.status(500).json({msg: "Update error",error: error.message});
  }
};


export const deletepage = async(req, res) => {
    try {
    await  usermodel.findByIdAndDelete(req.params.id)
    res.status(2001).json({msg:"user deleted" ,data:user})
   } catch (error) {
     res.end(" update error");
   }
}