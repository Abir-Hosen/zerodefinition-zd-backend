import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/sequelize";
import { Sequelize } from "sequelize-typescript";
import { Content } from "./content.model";

@Injectable()
export class ContentService {
    constructor(@InjectModel(Content) private contentModel: typeof Content, private sequelize: Sequelize) { }

    async createContent() {
        try {
            // this.contentModel.create({ name: 'content 1', description: 'content description 1', url: 'url 1' })
            await this.sequelize.transaction(async t => {
                const transactionHost = { transaction: t }
                await this.contentModel.create({ name: 'content 1', description: 'content description 1', url: 'url 1' }, transactionHost);
            })
        } catch (err) {
            console.log(err)
        }
    }

    async findAll(): Promise<Content[]> {
        return this.contentModel.findAll();
    }

    findOne(id: string): Promise<Content> {
        return this.contentModel.findOne({
            where: {
                id,
            }
        })
    }

    async remove(id: string): Promise<void> {

        const content = await this.findOne(id);
        await content.destroy();
    }


    getAllContent(): string {
        return 'hello content1'
    }
}