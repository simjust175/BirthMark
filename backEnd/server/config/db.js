const mySql = require("mysql2");
require("dotenv").config();

const pool = mySql.createPool({
    host: process.env.HOST,
    user: process.env.USER,
    password: process.env.PASSWORD,
    database: process.env.DATABASE
});

console.log(process.env.DATABASE);

module.exports = pool.promise();