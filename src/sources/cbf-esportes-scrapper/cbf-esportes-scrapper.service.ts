import { Injectable } from '@nestjs/common';
import { BaseFetcherService } from 'src/base-fetcher/base-fetcher.service';
import { CrawlerService } from 'src/core/crawler/crawler.service';
import * as cheerio from 'cheerio';
import { ChecksumService } from 'src/core/checksum/checksum.service';

@Injectable()
export class CbfEsportesScrapperService extends BaseFetcherService {
  constructor(private readonly crawlerService: CrawlerService) {
    super();
  }

  private PAGE_URL = "https://www.cbf.com.br/feed-geral"
  private URL_PATH = "https://www.cbf.com.br/"
  private POSITIVE_URL_PATTERNS = [`.*futebol.*`]
  private NEGATIVE_URL_PATTERNS = [`.*tabela.*`, 'linkedin']

  async fetchData(): Promise<string[]> {
    const rawData = await this.crawlerService.crawlCategory(this.PAGE_URL, this.POSITIVE_URL_PATTERNS, this.NEGATIVE_URL_PATTERNS);

    const textPromises = rawData.map(async (url) => {
      try {


        const html = await this.get(this.URL_PATH + url);
        const text = this.extractTextFromHtml(html);
        console.log(ChecksumService.calculateChecksum(text))
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
    const text = $('.article-inner-content').text(); // Extrai o texto do conteúdo HTML do body
    return text;
  }
}
