const express = require("express");
const cors = require("cors");
const morgan = require("morgan");
const helmet = require("helmet");
const mysql = require("mysql");

const connectionDB = mysql.createConnection({
  host: "database-1.c9hv5l3okuhp.us-east-2.rds.amazonaws.com",
  user: "admin",
  password: "admin-database-1",
  database: "database_1"
});

require("dotenv").config();

const app = express();

const port = process.env.REACT_APP_API_PORT;
const appOrigin = process.env.APP_ORIGIN;

app.use(morgan("dev"));
app.use(helmet());
app.use(cors({ origin: appOrigin }));

connectionDB.connect((err) => {
  if(err) throw err;

  console.log("connected");
});

app.get('/', (req, res) => {
  res.send("Server rodando");
});

app.listen(port, () => console.log(`API Server listening on port ${port}`));
