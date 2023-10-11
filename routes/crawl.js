const fs = require("fs");
const { getCrawlData } = require("../services/crawlData");
const { writeJsonToFile } = require("../utils");

module.exports = async (app) => {
  // Route crawling by ID
  app.get("/crawl/:id", async function (req, res) {
    let id = req.params.id;

    // Check if id exist
    if (!id) {
      res.send({});
      return;
    }

    const response = await getCrawlData({ id });

    // Check if need to write to file

    response && writeJsonToFile(response);

    res.send(response);
    return;
  });

};
