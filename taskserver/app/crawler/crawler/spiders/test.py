import scrapy


class TestSpider(scrapy.Spider):
    name = 'test'

    def statr_requests(self):
        urls = [
            'https://naver.com'
        ]
        for url in urls:
            yield scrapy.Request(url=url, callback=seld.parse)

    def parse(self, response):
        page = response.url.split()
        
