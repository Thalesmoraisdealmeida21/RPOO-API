const express = require("express");
const router = express.Router();
const user = require("./../controller/user");
const User = user();


require("./user")(router)
require("./skil")(router)
require("./auth")(router)
require("./group")(router)
require("./challenger")(router)
require("./question")(router)
require("./ranking")(router)

router.get("/", (req, res) => {
    res.json("Rota Funcionando")
});


router.get("/user", (req, res) => {
    User.getUser(req, res);
});

module.exports = router;