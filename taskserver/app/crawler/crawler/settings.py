BOT_NAME = 'crawler'

SPIDER_MODULES = ['crawler.spiders']
NEWSPIDER_MODULE = 'crawler.spiders'

ROBOTSTXT_OBEY = True

ITEM_PIPELINES = {
  'crawling,crawler.crawler.pipelines.CrawlerPipeline': 300
}
