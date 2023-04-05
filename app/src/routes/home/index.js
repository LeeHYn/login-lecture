"use strict";

const express = require("express");
const router = express.Router();

const ctrl = require("./home.ctrl");

router.get("/", ctrl.output.home);
router.get("/Login", ctrl.output.login);
router.post("/Login", ctrl.process.login);
module.exports = router;
