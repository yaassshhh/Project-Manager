const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const multer = require('multer')

const Product = require('../schema/productSchema')


const FILE_TYPE_MAP = {
    'image/png': 'png',
    'image/jpeg': 'jpeg',
    'image/jpg': 'jpg',
    'image/webp': 'webp',
    'image/pdf':'pdf'
}
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, './public/Products')
    },
    filename: function (req, file, cb) {
        const fileName = Date.now();
        const fileextensionname = file.originalname.split(" ").join('_')
      
        cb(null, `${fileName}`+ fileextensionname)
    }
})
const upload  = multer({ storage: storage })



router.post('/create', async (req, res) => {
    if (!req.body.userId&&req.body.skills){
        res.status(400).send('No body in the request')
    }
    else{
        // const fileName = file.filename;
        const data = await req.body
        let product = await new Product({
            title: data.title,
            desc: data.desc,
            userId:data.userId,
            skills:data.skills
        })
         console.log(product);
        product = await product.save();
    
        if (!product){
            return res.status(500).json({success:false,message:"internal server error"});
        }else{
            res.status(200).json({success:true,product:product})
        }
    
    }
})
router.get('/', async (req, res) => {
         const product = await Product.find()
          if (!product){
              return res.status(500).json({success:false});
        }else{
            res.status(200).json({success:true,product:product})
        }
})
router.put('/:id/upload/synopsis',upload.single('document'), async (req, res) => {
    const file = req.file
         if (!req.file) {
            return res.status(401).json({success:false,message:"No file to upload"});
         }
         console.log(req.body);
         const product = await Product.findByIdAndUpdate(req.params.id,{
            synopsis:file.filename
         })
         if (!product){
            return res.status(500).json({success:false,message:"product not found"});
         }else{
            res.status(200).json({success:true,product:product})
         }
})
router.put('/:id/upload/report',upload.single('document'), async (req, res) => {
    const file = req.file
         if (!req.file) {
            return res.status(401).json({success:false,message:"No file to upload"});
         }
         console.log(req.body);
         const product = await Product.findByIdAndUpdate(req.params.id,{
            report:file.filename
         })
         if (!product){
            return res.status(500).json({success:false,message:"product not found"});
         }else{
            res.status(200).json({success:true,product:product})
         }
})
router.put('/:id/upload/researchPaper',upload.single('document'), async (req, res) => {
    // console.log(file);
    const file = req.file
    console.log("file ",file);
         if (!req.file) {
            return res.status(401).json({success:false,message:"No file to upload"});
         }
         console.log(req.body);
         const product = await Product.findByIdAndUpdate(req.params.id,{
            researchPaper:file.filename
         })
         if (!product){
            return res.status(500).json({success:false,message:"product not found"});
         }else{
            res.status(200).json({success:true,product:product})
         }
})


// router.post('/find', async (req, res) => {
//     console.log(" req come with body ", req.body.data);
//          const product = await Product.find({
//             $and:[
//               req.body.data.category?{category: req.body.data.category}:{},
//               req.body.data.price?{price: {$lt: req.body.data.price}}:{},
//               req.body.data.gender?{gender: req.body.data.gender}:{},
//               req.body.brand?{brand: req.body.data.brand}:{},
//               req.body.data.section?{section: req.body.data.section}:{},
//             ]
//          })
//         if (!product){
//             return res.status(500).json({success:false});
//         }else{
//             res.status(200).json({success:true,product:product})
//         }
// })
router.get('/find/:id', async (req, res) => {
    if (!req.params.id) {
        res.status(400).json({success:false,message:"no id"})
    }
         const product = await Product.findOne({_id:req.params.id})
        if (!product){
            return res.status(500).json({success:false});
        }else{
            res.status(200).json({success:true,product:product})
        }
})


module.exports = router