const db = require("../config/db.manager");
exports.getAllSales = function (req, res) {
  const salesProduct = db.getSalesProducts().then((results) => {
    console.log(results);
    res.status(200).json({
      status: "successfull",
      data: results.recordsets[0],
    }); // send all the data
  });
};


exports.getSalesByID = function (req, res) {
  const { id } = req.params; // get id
  res.status(200).json({
    status: "no implemented",
  });
};

exports.createNewSales = function (req, res) {
  // must select the body to be
  const { body } = req; // req.body (attribute)
  const salesProduct = db.insertSales(body).then((results) => {
    console.log(results);
    res.status(200).json({
      status: "successfull"
    }); // send all the data
  });
};

exports.patchSalesById = function (req, res) {
  // must select the body to be
  const { body } = req; // req.body (attribute)

  const { id } = req.params; // get id (attribute)
  res.status(200).json({
    status: "no implemented",
  });
};

exports.deleteSalesByID = function (req, res) {
  // must select the body to be
  const { body } = req; // req.body (attribute)
  const { id } = req.params; // get id
  res.status(200).json({
    status: "no implemented",
  });
};
