var cheerio = require('cheerio');
var axios = require('axios');

const CrawlNews = async (url,query) => {
    const fullUrl = `${url}?where=news&sm=tab_jum&query=${query}`
    console.log(fullUrl)
    return await axios.get(encodeURI(`${url}?where=news&sm=tab_jum&query=${query}`))
        .then(html => {
            let ulList = [];
        
            const $ = cheerio.load(html.data);
            const $bodyList = $("ul.type01").children("li");

            $bodyList.each( function(i, elem) {
               // console.log( $(this).find('dl dt a._sp_each_title').text())
                //console.log( $(this).find('div.thumb a'))
                //console.log( $(this).find('div.thumb a img'))
               // console.log( $(this).find('div.thumb a img').attr('alt'))
5
                ulList[i] = {
                    title: $(this).find('dl dt a._sp_each_title').text().trim(),
                    url: $(this).find('div.thumb a').attr('href') || null,
                    image_url: $(this).find('div.thumb a img').attr('src') || null,
                    image_alt: $(this).find('div.thumb a img').attr('alt') || null
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
