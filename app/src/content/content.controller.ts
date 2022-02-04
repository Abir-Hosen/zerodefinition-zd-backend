import { Body, Controller, Delete, Get, HttpStatus, Param, Post, Put, Res } from "@nestjs/common"
import { Request, Response } from "express";
import { Content } from "./content.dto";
import { ContentService } from "./content.service"

@Controller('content')
export class ContentController {
    constructor(private readonly contentSerice: ContentService){}

    @Post()
    createContent(@Body() content: Content, @Res({ passthrough: true }) response: Response) {
        console.log(content)
        // save content
        // return response.status((HttpStatus.CREATED)).send(content);
        response.status((HttpStatus.CREATED))
        return []
    }

    @Get()
    findAll(@Res() response: Response) {
        // fetch all
        return response.status(200).send("response body")
    }

    @Get(":id")
    findOne(@Param("id") id: string, @Res() response: Response) {
        // fetch content by id
        console.log(id)
        return response.status(200).send("find one resp body")
    }

    @Put(':id')
    update(@Param("id") id: string, @Body() content: Content, @Res() response: Response) {
        //update operation
        return response.status(200).send("response body")
    }

    @Delete(':id')
    delete(@Param('id') id:string, @Res() response:Response) {
        // delete operation
        return response.status(200).send("response body")
    }

}