var cheerio = require('cheerio');
var axios = require('axios');

const CrawlNews = async (url) => {
    return await axios.get(url)
        .then(html => {
            let ulList = [];
        
            const $ = cheerio.load(html.data);
            const $bodyList = $("ul.type01").children("li");

            $bodyList.each( function(i, elem) {
                ulList[i] = {
                    title: $(this).find('dl dt a._sp_each_title').text().trim(),
                    url: $(this).find('div.thumb a').attr('href').trim(),
                    image_url: $(this).find('div.thumb a img').attr('src').trim(),
                    image_alt: $(this).find('div.thumb a img').attr('alt').trim()
                };
            });
            return ulList;
        })
        .catch(err =>{
            console.log('error', err)
            return err;
        })
}
module.exports = CrawlNews;