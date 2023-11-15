import { Test, TestingModule } from '@nestjs/testing';
import { GloboEsportesScraperService } from './globo-esportes-scraper.service';

describe('GloboEsportesScraperService', () => {
  let service: GloboEsportesScraperService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [GloboEsportesScraperService],
    }).compile();

    service = module.get<GloboEsportesScraperService>(GloboEsportesScraperService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
