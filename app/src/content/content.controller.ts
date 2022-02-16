import { Body, Controller, Delete, Get, HttpStatus, Param, Post, Put, Res } from "@nestjs/common"
import { Request, Response } from "express";
import { Content } from "./content.model";
import { ContentService } from "./content.service"

@Controller('content')
export class ContentController {
    constructor(private readonly contentService: ContentService) { }

    @Post()
    async createContent(@Body() content: Content, @Res({ passthrough: true }) response: Response) {
        const resp = await this.contentService.createContent(content)
        response.status((HttpStatus.CREATED))
        return resp;
    }

    @Get()
    async findAll(@Res() response: Response) {
        const resp = await this.contentService.findAll()
        return response.status(200).send(resp)
    }

    @Get(":id")
    async findOne(@Param("id") id: string, @Res() response: Response) {
        const resp = await this.contentService.findOne(id)
        return response.status(200).send(resp)
    }

    @Put(':id')
    async update(@Param("id") id: string, @Body() content: Content, @Res() response: Response) {
        const resp = await this.contentService.updateOne(id, content)
        return response.status(200).send(resp)
    }

    @Delete(':id')
    async delete(@Param('id') id: string, @Res() response: Response) {
        try{
            const resp = await this.contentService.remove(id)
            return response.status(200).send(resp)
        }
        catch(err){
            return response.status(400).send(err)
        }
    }

}