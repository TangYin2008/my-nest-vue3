import { Module } from '@nestjs/common';
import { ArticleModule } from './article/article.module';
import { utilities as nestWinstonModuleUtilities, WinstonModule } from 'nest-winston';
import * as winston from 'winston';
import  'winston-daily-rotate-file';
import { DailyRotateFile } from 'winston/lib/winston/transports';

const isDebug = process.env.NODE_ENV === 'development';

function createDailyRotateTransport(level: string, filename: string) {
  return new DailyRotateFile({
    level,
    filename: `${filename}-%DATE%.log`,
    dirname:'logs',
    datePattern: 'YYYY-MM-DD',
    zippedArchive: true,
    maxSize: '20m',
    maxFiles: '14d',
    format: winston.format.combine(
      winston.format.timestamp(),
      winston.format.simple()
    )
  })
}

@Module({
  imports: [
    ArticleModule,
    WinstonModule.forRoot({
      level: 'silly',
      format: winston.format.json(),
      defaultMeta: { service: 'my-nest-app' },
      transports: [
        new winston.transports.Console({
          format: winston.format.combine(
            winston.format.timestamp(),
            winston.format.ms(),
            nestWinstonModuleUtilities.format.nestLike('MyApp', {
              colors: true,
              prettyPrint: true,
              processId: true,
              appName: true,
            }),
          ),
        }),
        // other transports...
        ...(isDebug ? [] : [
          createDailyRotateTransport('warn', 'error'),
          createDailyRotateTransport('info', 'app')
        ])
        // new winston.transports.File({filename: 'error.log', level: 'error',format: winston.format.combine(
        //   winston.format.timestamp(),
        //   winston.format.ms(),
        //   nestWinstonModuleUtilities.format.nestLike('MyApp', {
        //     prettyPrint: true,
        //   }),
        // )})
      ],
      // other options
    }),
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
