  const request = require('axios');
  const {
    extractListingsFromHTML
  } = require('./helper');



  const Discord = require('./discbot.js');
  const discord = new Discord();

  const dispara = {
    channels: {
      default: '<-- the channel you want to send to-->'
    },
    userAgent: '<-- youre user token-->',
    apikey: '<--Discord Token-->',
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