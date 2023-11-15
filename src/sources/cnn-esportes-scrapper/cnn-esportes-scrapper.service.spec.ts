import { Test, TestingModule } from '@nestjs/testing';
import { CnnEsportesScrapperService } from './cnn-esportes-scrapper.service';

describe('CnnEsportesScrapperService', () => {
  let service: CnnEsportesScrapperService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CnnEsportesScrapperService],
    }).compile();

    service = module.get<CnnEsportesScrapperService>(CnnEsportesScrapperService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
