import { Global, Module } from '@nestjs/common'
import { ConfigModule } from '@nestjs/config'
import { dgraphConfig } from './config/dgraph.config'
import { DGraphService } from './dgraph.service'

@Global()
@Module({
  imports: [ConfigModule.forFeature(dgraphConfig)],
  providers: [DGraphService],
  exports: [DGraphService],
})
export class DGraphModule {}
