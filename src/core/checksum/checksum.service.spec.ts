import { Test, TestingModule } from '@nestjs/testing';
import { ChecksumService } from './checksum.service';

describe('ChecksumService', () => {
  let service: ChecksumService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ChecksumService],
    }).compile();

    service = module.get<ChecksumService>(ChecksumService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
