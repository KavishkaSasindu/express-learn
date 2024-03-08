const express = require("express");

const router = express.Router();

router.get("/blog", (req, resp) => {
  return resp.status(200).send({
    message: "hello Routes",
  });
});

module.exports = router;
