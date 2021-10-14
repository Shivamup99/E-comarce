const Product = require('../model/product')

exports.getProduct = async(req,res)=>{
    const qNew = req.query.new;
    const qCategory = req.query.category;
 try {
    let products ;
     if(qNew){
        products = await Product.find().sort({createdAt:-1}).limit(1)
     } else if(qCategory){
        products = await Product.find({category : {
            $in: [qCategory]
        }})
     }else{
         products = await Product.find()
     }
     res.status(200).json(products)
 } catch (error) {
     res.status(500).json({message:error.message})
 }
}

exports.getProductById = async(req,res)=>{
    try {
        let product = await Product.findById({_id:req.params._id})
        res.status(200).json(product)
    } catch (error) {
        res.status(500).json({message:error.message})
    }
   }

exports.postProduct = async(req,res)=>{
    try {
        let product = new Product(req.body)
        await product.save()
        res.status(201).json(product)
    } catch (error) {
        res.status(500).json({message:error.message})
    }
}

exports.putProduct = async(req,res)=>{
    try {
        let product = await Product.findByIdAndUpdate({_id:req.params._id},req.body,{new:true})
        await product.save()
        res.status(200).json(product)
    } catch (error) {
        res.status(500).json({message:error.message})
    }
}

exports.deleteProduct = async(req,res)=>{
    try {
        let product = await Product.findByIdAndDelete({_id:req.params._id})
        if(product){
            res.status(200).json('product deleted')
        }else{
            res.status(400).json('product not found')
        }
    } catch (error) {
        res.status(500).json({message:error.message})
    }
}