import { Injectable } from '@nestjs/common';
import * as crc32 from 'crc32'

@Injectable()
export class ChecksumService {

    public static calculateChecksum(text: string): number {
        return crc32(text);
      }  
}
