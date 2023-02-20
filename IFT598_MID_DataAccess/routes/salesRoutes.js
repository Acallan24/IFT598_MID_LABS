// const express = require('express');
// var router = express.Router();

// router.route('/').get( (req, res) => {
//     res.send('Sales')
//   })
// module.exports = router;

const express = require("express");
const router = express.Router();
const salesController = require("../controllers/salesController");
router
  .route("/")
  .get(salesController.getAllSales)
  .post(salesController.createNewSales);
router
  .route("/:id")
  .get(salesController.getSalesByID)
  .patch(salesController.patchSalesById)
  .delete(salesController.deleteSalesByID);
module.exports = router;
