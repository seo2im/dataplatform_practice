# Define your item pipelines here
#
# Don't forget to add your pipeline to the ITEM_PIPELINES setting
# See: https://docs.scrapy.org/en/latest/topics/item-pipeline.html


# useful for handling different item types with a single interface
from itemadapter import ItemAdapter
from model.connect import get_connection
from model.data import insert_data


class CrawlerPipeline:
    def process_item(self, item, spider):
        conn = get_connection()
        insert_data(conn, item)
        return item
