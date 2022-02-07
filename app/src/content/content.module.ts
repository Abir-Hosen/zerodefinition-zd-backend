import { Module } from "@nestjs/common";
import { SequelizeModule } from "@nestjs/sequelize";
import { ContentController } from "./content.controller";
import { Content } from "./content.model";
import { ContentService } from "./content.service";

@Module({
    imports: [SequelizeModule.forFeature([Content])],
    controllers: [ContentController],
    providers: [ContentService],
    exports: [SequelizeModule]
})
export class ContentModule { }