const Order = require("../model/order")

exports.getOrder = async(req,res)=>{
    try {
        let order = await Order.find().sort({_id:-1})
        res.status(200).json(order)
    } catch (error) {
        res.status(500).json({message:error.message})
    }
}

exports.getOrderById = async(req,res)=>{
    try {
        let order = await Order.findById({_id:req.params._id})
        res.status(200).json(order)
    } catch (error) {
        res.status(500).json({message:error.message})
    }
}

exports.postOrder = async(req,res)=>{
    try {
        let order = new Order(req.body)
        await order.save()
        res.status(201).json(order)
    } catch (error) {
        res.status(500).json({message:error.message})
    }
}

exports.putOrder = async(req,res)=>{
    try {
        let order = await Order.findByIdAndUpdate({_id:req.params._id},req.body,{new:true})
        await order.save()
        res.status(200).json(order)
    } catch (error) {
        res.status(500).json({message:error.message})
    }
}

exports.deleteOrder = async(req,res)=>{
    try {
        let order = await Order.findByIdAndDelete({_id:req.params._id})
        if(order){
            res.status(200).json('data deleted')
        }else{
            res.status(400).json('data not found')
        }
    } catch (error) {
        res.status(500).json({message:error.message})
    }
}

//order stats

exports.statsOrder = async(req,res)=>{
  const date = new Date();
  const lastMonth = new Date(date.setMonth(date.getMonth() - 1));
  const previousMonth = new Date(new Date().setMonth(lastMonth.getMonth() - 1));

  try {
    const income = await Order.aggregate([
      { $match: { createdAt: { $gte: previousMonth } } },
      {
        $project: {
          month: { $month: "$createdAt" },
          sales: "$amount",
        },
      },
      {
        $group: {
          _id: "$month",
          total: { $sum: "$sales" },
        },
      },
    ]);
    res.status(200).json(income);
  } catch (error) {
    res.status(500).json({message:error.message});
  }
}