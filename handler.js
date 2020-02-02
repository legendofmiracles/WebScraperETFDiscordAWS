const request = require('axios');
const {
  extractListingsFromHTML
} = require('./helper');



module.exports.getetfprice = (event, context, callback) => {
  request('https://www.finanzen.net/etf/vaneck_vectors_video_gaming_and_esports_ucits_etf_a_usd')
    .then(({
      data
    }) => {
      const jobs = extractListingsFromHTML(data);
      callback(null, {
        jobs
      });
    })
    .catch(callback);
};