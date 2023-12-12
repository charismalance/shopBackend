const router = require("express").Router();
const {deteleOrder,addOrder} = require("../controller/users")


router.post("/deleteOrder",deteleOrder)
router.post("/insertOrder",addOrder)
module.exports = router