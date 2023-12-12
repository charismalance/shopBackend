const router = require("express").Router();


router.use("/api/v1/auth",require("./auth"))
router.use("/api/v1/post",require("./posts"))
router.use("/api/v1/users",require("./users"))
module.exports = router