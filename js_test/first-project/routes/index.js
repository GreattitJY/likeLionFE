var express = require("express");
var router = express.Router();
const loginCheck = require("../module/loginCheck");
const upload = require("../module/imageUpload");

router.get("/", loginCheck, (req, res) => {
    res.status(200).json({
        meesage: "login succeess!!",
    });
});

router.post("/upload", upload.single("image"), (req, res) => {
    const file = req.file;
    console.log(file);
    res.status(200).json({
        message: "upload success!!",
    });
});

module.exports = router;
