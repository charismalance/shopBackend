const router = require("express").Router();
const {allCategories, allOrders,allOrderFromSeler} = require("../controller/post")
router.get("/allCategory",allCategories)
router.get("/allOrder",allOrders)
router.post("/allOrderFromSeler",allOrderFromSeler)
module.exports = router