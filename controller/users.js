const jwt = require("jsonwebtoken")
const User = require("../models").User;
const UserRole = require("../models").UserRole;
const Role = require("../models").Role;
const Order = require("../models").Order
const Basket = require("../models").Basket
const bcrypt = require("bcrypt")



exports.deteleOrder = async(req,res,next)=>{}
exports.deleteFromBascket = async(req,res,next)=>{}
exports.addOrder = async(req,res,next)=>{}
exports.addToBasket = async(req,res,next)=>{}
exports.allCategories = async(req,res,next)=>{}
exports.addAdminUser = async(req,res,next)=>{}
exports.deleteUser = async(req,res,next)=>{}
exports.allOrders = async(req,res,next)=>{}
exports.singleOrder = async(req,res,next)=>{}
exports.allOrderFromSeler = async(req,res,next)=>{}
exports.allBuyFromUser = async(req,res,next)=>{}
exports.myDiscount = async(req,res,next)=>{}