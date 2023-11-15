import { Controller } from '@nestjs/common';
import { Interval } from '@nestjs/schedule';
import { CbfEsportesScrapperService } from 'src/sources/cbf-esportes-scrapper/cbf-esportes-scrapper.service';
import { CnnEsportesScrapperService } from 'src/sources/cnn-esportes-scrapper/cnn-esportes-scrapper.service';
import { GloboEsportesScraperService } from 'src/sources/globo-esportes-scraper/globo-esportes-scraper.service';
import { UolEsportesScrapperService } from 'src/sources/uol-esportes-scrapper/uol-esportes-scrapper.service';

@Controller('initialization')
export class InitializationController {
    constructor(private readonly cnnEsportesScrapperService: CnnEsportesScrapperService,
        private readonly cbfEsportesScrapperService: CbfEsportesScrapperService,
        private readonly uolEsportesScrapperService: UolEsportesScrapperService,
        private readonly globoEsportesScraperService: GloboEsportesScraperService
    ) { }

    @Interval(10000) // Interval in milliseconds (e.g., every 60 seconds)
    async scrapeData(): Promise<void> {

        await this.cnnEsportesScrapperService.fetchData();
        await this.cbfEsportesScrapperService.fetchData();
        await this.uolEsportesScrapperService.fetchData();
        await this.globoEsportesScraperService.fetchData();
        console.log('Scraped data:');
    }
}
