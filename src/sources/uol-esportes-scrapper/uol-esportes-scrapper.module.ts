import { Module } from '@nestjs/common';
import { CrawlerModule } from 'src/core/crawler/crawler.module';
import { UolEsportesScrapperService } from './uol-esportes-scrapper.service';

@Module({
    imports: [CrawlerModule],
    providers: [UolEsportesScrapperService],
    exports: [UolEsportesScrapperService],
})
export class UolEsportesScrapperModule { }
