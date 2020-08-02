var DataBaseObject = require('../model/db_connect')
var express = require("express");
var router = express.Router();

router.get("/", async function (req, res, next) {
    var database = new DataBaseObject()
    sql_rows = await database.query("SELECT * FROM info")
    console.log('The solution is: ', sql_rows)
    database.close();
    res.send(JSON.stringify(sql_rows));
});

module.exports = router;
