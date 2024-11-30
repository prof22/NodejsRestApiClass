const User = require('../model/user');

class UserController{
    async create(req, res){
        try{
            const user = new User(req.body);
            const savedUser = await user.save();
            res.status(201).json(savedUser);
        }catch(e){
            res.status(400).json({error: e.message});
        }   
    }

    async getAllRecord(req, res){
        try{
            const users = await User.find();
            res.status(200).json({
                message:'Successfully retrived users',
                user:users
            });
        }catch(e){
            res.status(400).json({error: e.message});
        }
    }
    async getUserById(req, res){
        try{
            const user = await User.findById(req.params.id);
            if(!user){
                return res.status(404).json({message:"User not found"})
            }
            res.status(200).json({
                message:'Successfully retrived users',
                user:user
            });
      }catch(e){
            res.status(400).json({error: e.message});
        }
     }

     async updateUser(req, res){
        try{
            const UpdatedUser = await User.findByIdAndUpdate(req.params.id, req.body, {new: true, runValidators:true});
            if(!UpdatedUser){
                return res.status(404).json({message:"User not found"})
            }
            res.status(201).json({
                message:'Successfully Update User Record',
                user:UpdatedUser
            });
        }catch(e){
            res.status(400).json({error: e.message});
        }
     }

     async deleteUser(req, res){
        try{
            const deleteUser = await User.findByIdAndDelete(req.params.id);
            if(!deleteUser){
                return res.status(404).json({message:"User not found"})
            }
            res.status(201).json({
                message:'User Successfully deleted'
            });
         }catch(e){
            res.status(400).json({error: e.message});
        }
     }
}

// CR


module.exports = new UserController();