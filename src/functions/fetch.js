import * as cheerio from 'cheerio';
import axios from 'axios';
import { Parser } from '@json2csv/plainjs';

const URL = 'https://uk49sresultstoday.co.za/';
const result = [];
async function scrapeData() {
    axios.get(URL)
  .then(response => {
    const $ = cheerio.load(response.data);
    const title = $('.elementor-col-12').text();
      const re = title.replace(/(\r\n|\n|\r)/gm, "").split(' ').slice(0, 7);
      const opts = {};
      const parser = new Parser(opts);
      const csv = parser.parse({ re } );
      console.log(csv);
  })
    .catch(console.error);
    return result;
}
export default scrapeData;