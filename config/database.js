const { createPool } = require("mysql");

const pool = createPool({
  host: process.env.MYSQL_HOST,
  port: process.env.MYSQL_PORT,
  user: process.env.MYSQL_USER,
  password: process.env.MYSQL_PASSWORD,
  database: process.env.MYSQL_DATABASE,
  connectionLimit: 10,

  //   host: "127.0.0.1",
  //   port: 3306,
  //   user: "root",
  //   password: "",
  //   database: "customer_table",
});

module.exports = pool;
