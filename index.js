const express = require("express");
require('dotenv').config();

// Init needed app
const app = express();

// Routes for crawl data
const imdbRoutes = require("./routes/crawl");
imdbRoutes(app);

// Start the server to craw
const PORT = 8000;
  app.listen(PORT, () => console.log(`Crawling on port ${PORT}....`));
