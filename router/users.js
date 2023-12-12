const router = require("express").Router();
const {deteleOrder} = require("../controller/users")


router.post("/deleteOrder",deteleOrder)
module.exports = router