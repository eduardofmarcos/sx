import { Module } from '@nestjs/common';
import { CbfEsportesScrapperModule } from 'src/sources/cbf-esportes-scrapper/cbf-esportes-scrapper.module';
import { CnnEsportesScrapperModule } from 'src/sources/cnn-esportes-scrapper/cnn-esportes-scrapper.module';
import { SourcesModule } from 'src/sources/sources.module';

@Module({
    imports: [SourcesModule],
})
export class InitializationModule { }
