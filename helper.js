const cheerio = require('cheerio');

function extractListingsFromHTML(html) {
  const $ = cheerio.load(html);


  const infos = [];

  const name = $('.flex-1 ').find('h1').first().text().trim();
  const price = $('.flex-1 ').find('td').first().text().trim();
  const changeInEUR = $('.flex-1 ').find('td').first().next().text().trim();
  const changeInPerc = $('.flex-1 ').find('td').first().next().next().text().trim();


  infos.push({
    name,
    price,
    changeInEUR,
    changeInPerc
  });


  return infos;
}

module.exports = {
  extractListingsFromHTML
};