const jwt = require("jsonwebtoken")
const User = require("../models").User;
const UserRole = require("../models").UserRole;
const Role = require("../models").Role;
const Order = require("../models").Order
const Basket = require("../models").Basket
const Category = require("../models").Catgories
const bcrypt = require("bcrypt")

exports.allCategories = async(req,res,next)=>{
    try {
        const category = await Category.findAll()
       return res.status(200).send({categories : category}) 
    } catch (error) {
       return res.status(500).send({error :error.message}) 
    }    
}
exports.allOrders = async(req,res,next)=>{
    try {
        const allOrder = await Order.findAll()
        return res.status(200).send({orders : allOrder})
    } catch (error) {
        return res.status(500).send({error :error.message}) 
    }
}
exports.allOrderFromSeler = async(req,res,next)=>{
    try {
        const allOrderFromSeler = await Order.findAll({
             where: {
                  selerId: req.body.userId
                 } });
        return res.send({orders:allOrderFromSeler})
    } catch (error) {
        return res.status(500).send({error :error.message}) 
    }
}