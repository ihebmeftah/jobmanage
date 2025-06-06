import { Module } from '@nestjs/common';
import { CandidatureService } from './candidature.service';
import { CandidatureResolver } from './candidature.resolver';

@Module({
  providers: [CandidatureResolver, CandidatureService],
})
export class CandidatureModule {}
