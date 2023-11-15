import { Module } from '@nestjs/common';
import { GloboEsportesScraperService } from './globo-esportes-scraper.service';
import { CrawlerModule } from 'src/core/crawler/crawler.module';

@Module({
  imports: [CrawlerModule],
  providers: [GloboEsportesScraperService],
  exports: [GloboEsportesScraperService],
})
export class GloboEsportesScraperModule { }
