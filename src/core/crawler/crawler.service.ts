import { Injectable } from '@nestjs/common';
import axios from 'axios';
import * as cheerio from 'cheerio';

@Injectable()
export class CrawlerService {
  async crawlCategory(categoryUrl: string, positiveRegexPattern: string[], negativeRegexPattern:string[]): Promise<string[]> {
    const html = await this.fetchHtml(categoryUrl);
    const urls = this.extractUrls(html, positiveRegexPattern, negativeRegexPattern);
    return urls;
  }

  private async fetchHtml(url: string): Promise<string> {
    try {
      const response = await axios.get(url);
      return response.data;
    } catch (error) {
      throw new Error(`Error fetching data from ${url}: ${error.message}`);
    }
  }

  private extractUrls(html: string, positiveRegexPattern: string[], negativeRegexPattern:string[]) {
    const $ = cheerio.load(html);
    const links = $('a'); // You may need to adjust this selector based on the website's HTML structure.
    const matchedUrls: string[] = [];
    const notMatchUrls: string[] = []

    links.each((_, element) => {
        const href = $(element).attr('href');
        if (href && negativeRegexPattern.some(pattern => new RegExp(pattern).test(href))) {
          notMatchUrls.push(href);
        }
      });

    links.each((_, element) => {
      const href = $(element).attr('href');
      if (href && positiveRegexPattern.some(pattern => new RegExp(pattern).test(href))) {
        matchedUrls.push(href);
      }
    });
   
    return this.filter(matchedUrls, notMatchUrls)
  }

  private filter(matchedUrls: string[], notMatchedUrls: string[]): string[] {
    return matchedUrls.filter((url) => !notMatchedUrls.includes(url));
  }

}
