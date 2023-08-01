const fs = require("fs");
const products = require("../models/product");


exports.getdata = async(req, res) => {
  try {     
      let data =await products.find();
      
      return res.status(200).json(data);
  } catch (error) {
      return res.status(400).json({message: error});
  }
}

exports.adddata = async(req, res) => {
  try {
      let data =await products.create(req.body);    
      return res.status(200).json(data);
  } catch (error) {
      return res.status(400).json({message: error.message});
  }
}

exports.updatedata = async(req, res) => {
  let data =await products.updateOne({_id:req.query.id},{$set:req.body});

  return res.status(200).json(data);
}

exports.getonedata = async(req, res) => {
  let data = await products.findOne({_id:req.query.id},);
      return res.status(200).json(data);
}


exports.deletedata = async(req, res) => {
  let data = await products.deleteOne({_id:req.query.id},);
      return res.status(200).json(data);
}