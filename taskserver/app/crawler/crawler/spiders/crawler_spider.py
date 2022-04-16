import scrapy
from crawler.items import CrawlerItem

class CrawlerSpider(scrapy.Spider):
  name = 'crawler'
  start_urls = ['https://komponent.herokuapp.com']

  def parse(self, response):
    item = CrawlerItem()
    name = response.css('title::text').get()
    item['name'] = name
    return item
