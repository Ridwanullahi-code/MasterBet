import * as cheerio from 'cheerio';
import axios from 'axios';

const URL = 'https://uk49sresultstoday.co.za/';
const object = [];
async function scrapeData() {
    await axios.get(URL)
  .then(response => {
    const $ = cheerio.load(response.data);
    const title = $('.elementor-col-12').text();
    const lunch = title.replace(/(\r\n|\n|\r)/gm, "").split(' ').slice(0, 7);
    const teatime = title.replace(/(\r\n|\n|\r)/gm, "").split(' ').slice(7, 14);
    object.push(new Array(lunch, teatime));
  })
  .catch(console.error);
  return object;
}

export default scrapeData;