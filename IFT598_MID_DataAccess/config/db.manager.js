const sql = require("mssql");
const dbConnection = require("./db.config");
console.log(dbConnection);
async function getSalesProducts() {
  console.log(" Connecting to SQL....... Cloud Server");
  let dbContext = await sql.connect(dbConnection);
  console.log("The Databse connection was Successful");
  console.log("Getting data");
  let results = await dbContext.request().query(`
            SELECT TOP(20)
            productId,
            name,
            productNumber,
            color
            listPrice
            FROM
            salesLT.Product
`);
  console.log(`Returned SQL results`);
  return results;
}

async function insertSalesProducts(record) {
  console.log(" Connecting to SQL....... Cloud Server");
  let dbContext = await sql.connect(dbConnection);
  console.log("The Databse connection was Successful");
  console.log("Getting data");
  let results = await dbContext.request().query(`
            INSERT INTO salesLT.Product (productId,name,productNumber,color, listPrice)
            VALUES (${record.productid}, ${record.name}, ${record.productNumber}, ${record.color}, ${record.listPrice})
`);
  console.log(`Returned SQL results`);
  return results;
}

//Export
module.exports = { getSalesProducts, insertSalesProducts };

