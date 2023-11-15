import { Module } from '@nestjs/common';
import { CrawlerModule } from 'src/core/crawler/crawler.module';
import { CnnEsportesScrapperService } from './cnn-esportes-scrapper.service';

@Module({
  imports: [CrawlerModule],
  providers: [CnnEsportesScrapperService],
  exports: [CnnEsportesScrapperService],
})
export class CnnEsportesScrapperModule { }
