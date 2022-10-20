const express = require("express");
const router = express.Router();

router.get("ejs", (req, res) => {
    res.render("template");
});

module.exports = router;
