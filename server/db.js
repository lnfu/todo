const Pool = require("pg").Pool;

const pool = new Pool({
  user: "root",
  password: "secret",
  host: "localhost",
  port: 5432,
  database: "todo",
});

module.exports = pool;
