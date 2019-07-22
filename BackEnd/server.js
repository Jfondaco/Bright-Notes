const express = require('express');
const app = express();
const cors = require('cors');
const bodyParser = require('body-parser');
const logger = require('morgan');
require('./utils/mongoConnect');
const routes = require("./routes");

const PORT = process.env.port || 3001;
app.use(cors());

app.use(bodyParser.json({}));
app.use(bodyParser.urlencoded({ extended: false }));

if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

// append /api for our http requests
app.use(routes);

// launch our backend into a port
app.listen(PORT, () => console.log(`LISTENING ON PORT ${PORT}`));