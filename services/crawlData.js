const request = require("request");
const puppeteer = require('puppeteer'); 

const getCrawlData = async ({ id }) => {

  // Prepare URL
  url = `${process.env.URL}/${id}`
console.log(`Visiting ${url}...`);

//initiate the browser 
const browser = await puppeteer.launch({
  executablePath: '/usr/bin/google-chrome-stable',
  headless: false,
  args: ['--disable-features=site-per-process, --window-size=1420,880'],
  defaultViewport: {
    width: 1420,
    height: 880,
  },
}); 

//create a new in headless chrome 
const page = await browser.newPage(); 

//go to target website 
await page.goto(url, { 
		//wait for content to load 
		waitUntil: 'load'
	}); 

//get data
const name = await page.evaluate(() => 
  Array.from(document.querySelectorAll('#productTitle')).map(a => a.textContent.trim()) 
);

await browser.close(); 
return name
};

module.exports = {
  getCrawlData,
};
