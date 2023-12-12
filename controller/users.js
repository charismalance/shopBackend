const jwt = require("jsonwebtoken")
const User = require("../models").User;
const UserRole = require("../models").UserRole;
const Role = require("../models").Role;
const Order = require("../models").Order
const Basket = require("../models").Basket
const Category = require("../models").Catgories
const bcrypt = require("bcrypt")



exports.deteleOrder = async(req,res,next)=>{
    try {
        let find = false
        const allOrderFromSeler = await Order.findAll({
             where: {
                  selerId: req.body.userId
                 } });
       if(allOrderFromSeler &&allOrderFromSeler[0] ){
          for(let i = 0 ; i<allOrderFromSeler.length ; i++){
              if(req.body.postId == allOrderFromSeler[i].id ){
                  find = true
              }
          }
       }else{
           return res.send({status :"failed" , message :"orders not find"})
       }
    } catch (error) {
        return res.status(500).send({error :error.message}) 
    }
}
exports.deleteFromBascket = async(req,res,next)=>{}
exports.addOrder = async(req,res,next)=>{}
exports.addToBasket = async(req,res,next)=>{}

exports.addAdminUser = async(req,res,next)=>{}
exports.deleteUser = async(req,res,next)=>{}

exports.singleOrder = async(req,res,next)=>{}

exports.allBuyFromUser = async(req,res,next)=>{}
exports.myDiscount = async(req,res,next)=>{}