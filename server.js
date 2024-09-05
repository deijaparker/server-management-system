const express = require("express");
const app = express();
const PORT = process.env.PORT || 4001;

// Middleware for handling CORS requests
const cors = require("cors");
app.use(cors());

// Middleware for parsing request bodies
const bodyParser = require("body-parser");
app.use(bodyParser.json());

// Mount my existing apiRouter at the '/api' path
const apiRouter = require("./server/api");
app.use("/api", apiRouter);

// The server listening at specified PORT
if (!module.parent) {
  app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`);
  });
}

module.exports = app;
