const request = require('axios');
const {
  extractListingsFromHTML
} = require('./helper');



const Discord = require('./discbot.js');
const discord = new Discord();

const dispara = {
  channels: {
    default: '673567182143356939'
  },
  userAgent: 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10.14; rv:72.0) Gecko/20100101 Firefox/72.0',
  apikey: 'NjczNTE5OTk0OTM5NzY4ODY0.XjbzsA.QG4YKiMl2TQT8aajKK0pb5SByuQ',
};

discord.init(dispara);


module.exports.getetfprice = (event, context, callback) => {
  request('https://www.finanzen.net/etf/vaneck_vectors_video_gaming_and_esports_ucits_etf_a_usd')
    .then(({
      data
    }) => {
      const jobs = extractListingsFromHTML(data);
      callback(null, {
        jobs
      });
      discord.sendMessage(JSON.stringify(jobs));
    })
    .catch(callback);
};