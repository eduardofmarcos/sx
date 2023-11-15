import { Test, TestingModule } from '@nestjs/testing';
import { BaseFetcherService } from './base-fetcher.service';

describe('BaseFetcherService', () => {
  let service: BaseFetcherService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
    }).compile();

    service = module.get<BaseFetcherService>(BaseFetcherService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
