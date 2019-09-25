var express = require('express');
var router = express.Router();
var crawlNews = require('../utils/CrawlNews');
//로그 찍는거
/* GET home page. */
router.get('/api/crawl_news', async (req, res, next) => {
  const result = await crawlNews("https://search.naver.com/search.naver?where=news&sm=tab_jum&query=%EB%8C%80%EB%A6%BC%EB%8F%99+%EB%B6%80%EB%8F%99%EC%82%B0")
  console.log(result);
  // await res.render('index', { title: result[0].title });

  await res.send(result)

  //axios.get('https://www.naver.com').then(res=> console.log(res))
  // const getHtml = async () => {
  //   try {
  //     return await axios.get("https://search.naver.com/search.naver?where=news&sm=tab_jum&query=%EB%8C%80%EB%A6%BC%EB%8F%99+%EB%B6%80%EB%8F%99%EC%82%B0");
  //   } catch (error) {
  //     console.error(error);
  //   }
  // };
  // getHtml()
  // .then(html => {
  //   let ulList = [];
    
  //   const $ = cheerio.load(html.data);
  //   const $bodyList = $("ul.type01").children("li");

  //   $bodyList.each(function(i, elem) {
  //     ulList[i] = {
  //         title: $(this).find('dl dt a._sp_each_title').text().trim(),
  //         url: $(this).find('div.thumb a').attr('href').trim(),
  //         image_url: $(this).find('div.thumb a img').attr('src').trim(),
  //         image_alt: $(this).find('div.thumb a img').attr('alt').trim()
  //     };
  //   });

  //   const data = ulList;
  //   return data;
  // })
  // .then(res => log(res));
});



module.exports = router;
