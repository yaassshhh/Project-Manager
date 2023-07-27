const express = require('express')
// defining router to use it
const router = express.Router()

// importing schema
const User = require('../schema/userSchema')

router.get ('/:id', async (req, res) => {
    const user = await User.findById({_id: req.params.id});

    if (!user) {
        res.status(500).json({ success: false, message: 'The user with the given ID not exists' })
    }
    res.status(200).send(user)  
})

router.post('/register',async(req,res) => {
    const userList = await User.findOne({email:req.body.email})
    if(userList) {
    res.status(400).json({success:"false",info:"this user has been already registered try with another email"})
    }
    else{

        let user = new User({
            name: req.body.name,
            email: req.body.email,
            phone: req.body.phone,
            password: req.body.password,
            isAdmin:req.body.isAdmin
        })
        
    user = await user.save();
    if (!user)
    return res.status(400).json({success:false,message:"something Went wrong"});
    res.status(200).json({success:true,user:user,message:"successfull"});
}
})

router.post('/login',async(req,res) => {
    const userList = await User.findOne({email:req.body.email})
    if(userList) {
    res.status(200).json({success:true,user:userList,message:"All right"})
    }
    else{
    res.status(400).json({success:false,message:"Sorry Cannot Login"});
    }
})


router.delete('/:id', (req, res) => {
    User.findByIdAndRemove(req.params.id).then(user => {
        if (user) {
            return res.status(200).json({ success: true, message: 'User deleted successfully' })
        } else {
            return res.status(404).json({ success: false, message: 'User cannot find' })
        }
    }).catch(err => {
        return res.status(400).json({ success: false, error: err })
    })
})

module.exports = router;