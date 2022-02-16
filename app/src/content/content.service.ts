import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/sequelize";
import { Sequelize } from "sequelize-typescript";
import { Content } from "./content.model";

@Injectable()
export class ContentService {
    constructor(@InjectModel(Content) private contentModel: typeof Content, private sequelize: Sequelize) { }

    async createContent(content: Content) {
        try {
            const resp = await this.sequelize.transaction(async t => {
                const transactionHost = { transaction: t }
                return await this.contentModel.create({ ...content }, transactionHost);
            })
            return resp;
        } catch (err) {
            return err
        }
    }

    async findAll(): Promise<Content[]> {
        return this.contentModel.findAll();
    }

    async findOne(id: string): Promise<Content> {
        return this.contentModel.findOne({where: { id, } })
    }

    async updateOne(id: string, content: Content) {
        return this.contentModel.update(content, { where: { id: id } });
    }

    async remove(id: string){
        const content = await this.findOne(id);
        return await content.destroy();
    }
}