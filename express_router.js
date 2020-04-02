var express = require("express");
var router = express.Router();
router.get("/", (req, res) => {
    res.send("Thanachot Tesjaroen");
})
router.get("/get_id/:userId", (req, res) => { 
    res.send(req.params);
})
module.exports = router;