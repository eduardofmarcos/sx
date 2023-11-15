import { Test, TestingModule } from '@nestjs/testing';
import { UolEsportesScrapperService } from './uol-esportes-scrapper.service';

describe('UolEsportesScrapperService', () => {
  let service: UolEsportesScrapperService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [UolEsportesScrapperService],
    }).compile();

    service = module.get<UolEsportesScrapperService>(UolEsportesScrapperService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
