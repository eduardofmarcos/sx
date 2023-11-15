import { Module } from '@nestjs/common';
import { CrawlerModule } from './core/crawler/crawler.module';
import { ChecksumModule } from './core/checksum/checksum.module';
import { ScheduleModule } from '@nestjs/schedule';
import { InitializationController } from './initialization/initialization.controller';
import { InitializationModule } from './initialization/initialization.module';
import { SourcesModule } from './sources/sources.module';

@Module({
  imports: [ScheduleModule.forRoot(), CrawlerModule, ChecksumModule, InitializationModule, SourcesModule],
  controllers: [InitializationController],
})
export class AppModule { }
