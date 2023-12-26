import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import { connectDBFactory } from '~/common/config';
import { LoggerMiddleware } from '~/common/logger/logger.middleware';
import { SeedsModule } from '~/common/seeds/seed.module';


@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: ['.env'],
    }),
    MongooseModule.forRootAsync({
      inject: [ConfigService],
      useFactory: connectDBFactory,
    }),
    SeedsModule
  ],
  exports: [ConfigModule, MongooseModule],
})

export class CommonModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(LoggerMiddleware)
            .forRoutes('*');
  }
}
