import * as cheerio from 'cheerio';
import axios from 'axios';
var fs = require('fs');

const URL = 'https://uk49sresultstoday.co.za/';
const object = {result: []};
async function scrapeData() {
    axios.get(URL)
  .then(response => {
    const $ = cheerio.load(response.data);
    const title = $('.elementor-col-12').text();
      const re = title.replace(/(\r\n|\n|\r)/gm, "").split(' ').slice(0, 7);
      object.result.push({ re: re });
      const json = JSON.stringify(object);
      fs.writeFile('./jsonfile.json', json, 'utf8');
  })
    .catch(console.error);
}
export default scrapeData;