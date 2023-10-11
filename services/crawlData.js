const request = require("request");
const puppeteer = require('puppeteer'); 

const getCrawlData = async ({ id }) => {

  // Prepare URL
  url = `${process.env.URL}/${id}`
console.log(`Visiting ${url}...`);

//initiate the browser 
const browser = await puppeteer.launch({headless: false}); 

//create a new in headless chrome 
const page = await browser.newPage(); 

//go to target website 
await page.goto(url, { 
		//wait for content to load 
		waitUntil: 'networkidle0', 
	}); 

//get data
const data = await page.evaluate(() => 
  Array.from(document.querySelectorAll('.u9tve2')).map(a => a.textContent) 
);

await browser.close(); 
return data
};

module.exports = {
  getCrawlData,
};
