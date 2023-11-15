import { Module } from '@nestjs/common';
import { CbfEsportesScrapperModule } from 'src/sources/cbf-esportes-scrapper/cbf-esportes-scrapper.module';
import { CnnEsportesScrapperModule } from 'src/sources/cnn-esportes-scrapper/cnn-esportes-scrapper.module';
import { GloboEsportesScraperModule } from 'src/sources/globo-esportes-scraper/globo-esportes-scraper.module';
import { UolEsportesScrapperModule } from 'src/sources/uol-esportes-scrapper/uol-esportes-scrapper.module';

@Module({
    imports: [CnnEsportesScrapperModule, GloboEsportesScraperModule, CbfEsportesScrapperModule, UolEsportesScrapperModule],
    exports: [CnnEsportesScrapperModule, GloboEsportesScraperModule, CbfEsportesScrapperModule, UolEsportesScrapperModule],
})
export class SourcesModule { }
