import { Module } from '@nestjs/common';
import { CbfEsportesScrapperService } from './cbf-esportes-scrapper.service';
import { CrawlerModule } from 'src/core/crawler/crawler.module';
import { ChecksumModule } from 'src/core/checksum/checksum.module';

@Module({
  imports: [CrawlerModule, ChecksumModule],
  providers: [CbfEsportesScrapperService],
  exports: [CbfEsportesScrapperService],
})
export class CbfEsportesScrapperModule { }
