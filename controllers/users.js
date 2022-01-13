 const User = require('../model/User')
 
 /**
    * GET all users
    */
exports.getUsers =async (req,res, next) =>  {
     try{
const users = await User.find();

res.status(200).json({success: true, data:users});
     }
     catch(err){
res.status(400).json({success: false});
     }
};
 
 /**
    * GET a single user
    */
exports.getUser = async (req,res, next) =>  {
     try{
const user = await User.findById(req.params.id);
if(!user) {
     return res.status(400).json({success: false});
}
res.status(200).json({success:true, data:user});
     }
     catch(err){
     res.status(400).json({success: false});
     }
}
 
 /**
    * Post a users
    */
exports.createUser = async(req,res, next) =>  {
     try{
const user = await User.create(req.body);
res.status(201).json({success: true, data:user});
     }
     catch(err){
res.status(400).json({success:false});
     }
     
};
 
 /**
    *PUT users
    */
exports.updateUser = async(req,res, next) =>  {
     try {
const user = await User.findByIdAndUpdate(req.params.id, req.body, {
        new: true,
        runValidators: true
   });
   if(!user) {
     return res.status(400).json({success: false});
}
res.status(200).json({success:true, data:user});
}
catch(err){
          return res.status(400).json({success: false});
     }
   

 /**
    *Delete users
    */

exports.deleteUser = async(req, res, next) => {
     try {
          const user = await User.findByIdAndDelete(req.params.id);
             if(!user) {
           return res.status(400).json({success: false});
          }
          res.status(200).json({success:true, data: {} });
          } 
          catch (err) {
            res.status(400).json({success: false });
               }
     };