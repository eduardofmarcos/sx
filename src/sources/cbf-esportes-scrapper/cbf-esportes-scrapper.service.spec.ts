import { Test, TestingModule } from '@nestjs/testing';
import { CbfEsportesScrapperService } from './cbf-esportes-scrapper.service';

describe('CbfEsportesScrapperService', () => {
  let service: CbfEsportesScrapperService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CbfEsportesScrapperService],
    }).compile();

    service = module.get<CbfEsportesScrapperService>(CbfEsportesScrapperService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
