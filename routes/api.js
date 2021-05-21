const { Router } = require("express");
const { getAllInfos, addInfo } = require("../controllers/info");
const router = Router();

router.get("/info", getAllInfos);
router.post("/info", addInfo);

module.exports = router;
