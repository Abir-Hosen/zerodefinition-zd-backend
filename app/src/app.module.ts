import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { Content } from './content/content.model';
import { ContentModule } from './content/content.module';

@Module({
  imports: [SequelizeModule.forRoot({
    dialect: 'mysql',
    host: 'localhost',
    port: 3306,
    username: 'abir',
    password: '3323',
    database: 'zd',
    autoLoadModels: true,
    synchronize: true,
  }), ContentModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
