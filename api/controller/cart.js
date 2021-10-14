const Cart = require("../model/cart")

exports.getCart = async(req,res)=>{
    try {
        let cart = await Cart.find().sort({_id:-1})
        res.status(200).json(cart)
    } catch (error) {
        res.status(500).json({message:error.message})
    }
}

exports.getCartById = async(req,res)=>{
    try {
        let cart = await Cart.findById({_id:req.params._id})
        res.status(200).json(cart)
    } catch (error) {
        res.status(500).json({message:error.message})
    }
}

exports.postCart = async(req,res)=>{
    try {
        let cart = new Cart(req.body)
        await cart.save()
        res.status(201).json(cart)
    } catch (error) {
        res.status(500).json({message:error.message})
    }
}

exports.putCart = async(req,res)=>{
    try {
        let cart = await Cart.findByIdAndUpdate({_id:req.params._id},req.body,{new:true})
        await cart.save()
        res.status(200).json(cart)
    } catch (error) {
        res.status(500).json({message:error.message})
    }
}

exports.deleteCart = async(req,res)=>{
    try {
        let cart = await Cart.findByIdAndDelete({_id:req.params._id})
        if(cart){
            res.status(200).json('data deleted')
        }else{
            res.status(400).json('data not found')
        }
    } catch (error) {
        res.status(500).json({message:error.message})
    }
}