import { Injectable } from '@nestjs/common';
import { CrawlerService } from 'src/core/crawler/crawler.service';
import * as cheerio from 'cheerio';
import { BaseFetcherService } from 'src/base-fetcher/base-fetcher.service';

@Injectable()
export class GloboEsportesScraperService extends BaseFetcherService {

  constructor(private readonly crawlerService: CrawlerService) {
    super();
  }

  private PAGE_URL = "https://ge.globo.com/futebol/"
  private POSITIVE_URL_PATTERNS = ['.*criciuma.*']
  private NEGATIVE_URL_PATTERNS = []

  async fetchData(): Promise<string[]> {
    const rawData = await this.crawlerService.crawlCategory(this.PAGE_URL, this.POSITIVE_URL_PATTERNS, this.NEGATIVE_URL_PATTERNS);
    console.log(rawData)
    const textPromises = rawData.map(async (url) => {
      try {
        const html = await this.get(url);
        const text = this.extractTextFromHtml(html);
        return text;
      } catch (error) {
        console.error(`Error fetching data from ${url}: ${error.message}`);
        return null; // or handle the error as needed
      }
    });

    const textData = await Promise.all(textPromises);

    return textData.filter((text) => text !== null); // Filter out any null values if needed
  }

  private extractTextFromHtml(html: string): string {
    const $ = cheerio.load(html);
    const text = $('.content-text').text(); // Extrai o texto do conteúdo HTML do body
    return text;
  }
}

