import { Module } from '@nestjs/common';
import { BotUpdate } from './bot.update';
import { BotService } from './bot.service';
import { ConfigModule } from '@nestjs/config';
import { BotController } from './bot.controller';

@Module({
  providers: [BotService, BotUpdate],
  imports: [
    ConfigModule.forRoot({
      envFilePath: '.env',
    }),
  ],
  controllers: [BotController],
})
export class BotModule {}